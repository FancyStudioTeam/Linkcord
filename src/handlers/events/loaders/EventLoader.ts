import type { Dirent } from 'node:fs';
import { glob } from 'node:fs/promises';
import { basename } from 'node:path';
import { emitWarning } from 'node:process';
import type { Client, ClientEvents } from '#client/index.js';
import { defineReadonlyProperty } from '#utils/functions/defineReadonlyProperty.js';
import { validate } from '#utils/functions/validate.js';
import { importFile, resolvePath } from '#utils/helpers/ImportUtils.js';
import { EventHandlerSchema, EventSchema } from '../schemas/EventSchema.js';
import type { EventConfig, EventHandler } from './EventLoader.types.js';

export class EventLoader {
	declare readonly client: Client;
	declare readonly eventsFolderPath: string;

	constructor(eventsFolderPath: string, client: Client) {
		defineReadonlyProperty(this, 'client', client);
		defineReadonlyProperty(this, 'eventsFolderPath', eventsFolderPath);
	}

	static EVENTS_GLOB_PATTERNS = [
		'**/*.event.{js,mjs,cjs,jsx,ts,mts,cts,tsx}',
	] as const;

	async #getEventFilePaths(): Promise<Dirent<string>[]> {
		const { eventsFolderPath } = this;
		const { EVENTS_GLOB_PATTERNS } = EventLoader;

		const filePathsAsyncGenerator = glob(EVENTS_GLOB_PATTERNS, {
			cwd: eventsFolderPath,
			exclude: [
				'node_modules',
			],
			withFileTypes: true,
		});
		const filePathsArray = await Array.fromAsync(filePathsAsyncGenerator);

		return filePathsArray;
	}

	async #importEventFile(eventFilePath: Dirent<string>): Promise<void> {
		const { name: eventFileName, parentPath: eventFileParentPath } = eventFilePath;

		const resolvedEventFilePath = resolvePath(eventFileParentPath, eventFileName);
		const importedEventFileData = await importFile<ImportedEventFileData>(resolvedEventFilePath, {
			requiredExports: [
				'config',
				'handler',
			],
		});
		const { config: configExport, handler: handlerExport } = importedEventFileData;

		const config = validate(EventSchema, configExport);
		const handler = validate(EventHandlerSchema, handlerExport);

		const { disabled, event, once } = config;

		if (disabled) {
			return this.#showDisabledEventWarning(resolvedEventFilePath);
		}

		const { client } = this;
		const { events } = client;

		events.addEventListener(event, handler, {
			once: Boolean(once),
		});
	}

	#showDisabledEventWarning(eventFilePathString: string): void {
		const fileName = basename(eventFilePathString);
		const warningMessage = `Event file '${fileName}' is disabled and will be ignored from the event handler`;

		emitWarning(warningMessage, {
			code: 'EVENT_HANDLER',
			type: 'Disabled Event Warning',
		});
	}

	async registerEvents(): Promise<void> {
		const eventFilePaths = await this.#getEventFilePaths();
		const eventFileImportPromises = eventFilePaths.map((eventFilePath) => this.#importEventFile(eventFilePath));

		await Promise.all(eventFileImportPromises);
	}
}

interface ImportedEventFileData {
	config: EventConfig<ClientEvents>;
	handler: EventHandler<EventConfig<ClientEvents>>;
}
