import { basename } from "node:path";
import { emitWarning } from "node:process";
import { glob, type Path } from "glob";
import type { Client } from "#client/index.js";
import type { EventData } from "#handlers/types/index.js";
import { ImportUtils } from "#utils/structures/ImportUtils.js";

const EVENTS_GLOB_PATTERNS = ["**/*.event.{js,mjs,cjs,jsx,ts,mts,cts,tsx}"];

/**
 * Loads the file paths from the events folder.
 * @param eventsFolderPath - The path of the events folder.
 * @returns The loaded `Path` objects.
 */
async function loadEventFilePaths(eventsFolderPath: string): Promise<Path[]> {
	const eventFilePaths = await glob(EVENTS_GLOB_PATTERNS, {
		cwd: eventsFolderPath,
		withFileTypes: true,
	});

	return eventFilePaths;
}

/**
 * Register the listeners to the client.
 * @param eventsFolderPath - The path of the events folder.
 * @param client - The client where the events will be registered.
 */
async function registerEvents(eventsFolderPath: string, client: Client): Promise<void> {
	const eventFilePaths = await loadEventFilePaths(eventsFolderPath);

	for (const eventPath of eventFilePaths) {
		const { name: fileName, parentPath: fileParentPath } = eventPath;

		const importEventFilePath = ImportUtils.resolvePath(fileParentPath, fileName);
		const importEventFileData = await ImportUtils.import<EventFileData>(
			importEventFilePath,
			true,
		);

		const { default: defaultExport, disabled, once } = importEventFileData;

		if (disabled) {
			const eventFileName = basename(importEventFilePath);

			emitWarning(`Event "${eventFileName}" is disabled and will not be registered.`);

			continue;
		}

		const { name, run } = defaultExport;
		const { events } = client;

		events.addListener(name, once ?? false, run);
	}
}

export const EventsLoader = {
	loadEventFilePaths,
	registerEvents,
};

/** The expected structure of the imported file. */
interface EventFileData {
	/** The validated options of the event. */
	default: EventData;
	/** Whether the listener is disabled and should not be registered. */
	disabled?: boolean;
	/** Whether the listener should be executed once. */
	once?: boolean;
}
