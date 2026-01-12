import { type Dirent, existsSync } from 'node:fs';
import { glob, readFile, writeFile } from 'node:fs/promises';
import { extname } from 'node:path';
import { isDeepStrictEqual } from 'node:util';
import type { Client } from '#client/index.js';
import { ConfigurationUtils } from '#configuration/helpers/ConfigurationUtils.js';
import type { DeclarableCommandConstructor } from '#handlers/decorators/Declare.types.js';
import { COMMANDS_CACHE_FILE_NOT_FOUND, COMMANDS_CACHE_NOT_ENABLED } from '#messages/debug.js';
import { COMMANDS_CACHE_FILE_NOT_AN_ARRAY, INVALID_COMMANDS_CACHE_FILE_TYPE } from '#messages/errors.js';
import type { CreateApplicationCommand, CreateChatInputApplicationCommand } from '#types/index.js';
import { defineReadonlyProperty } from '#utils/functions/defineReadonlyProperty.js';
import { isArray, isInstanceOf } from '#utils/helpers/AssertionUtils.js';
import { importFile, resolvePath } from '#utils/helpers/ImportUtils.js';
import { ChatInputCommandHandler, type MessageCommandHandler, type UserCommandHandler } from '../structures/index.js';

export class CommandLoader {
	declare readonly client: Client;
	declare readonly commandsFolderPath: string;

	constructor(commandsFolderPath: string, client: Client) {
		defineReadonlyProperty(this, 'client', client);
		defineReadonlyProperty(this, 'commandsFolderPath', commandsFolderPath);
	}

	static COMMANDS_GLOB_PATTERNS = [
		'**/*.command.{js,mjs,cjs,jsx,ts,mts,cts,tsx}',
	] as const;

	async #appendCommandToCache(applicationCommand: CreateApplicationCommand): Promise<void> {
		const { enabled, filePath } = ConfigurationUtils.getCommandsCache();

		if (!enabled) {
			return;
		}

		const cachedCommandsContent = await readFile(filePath, {
			encoding: 'utf-8',
		});
		const cachedCommandsContentParsed = JSON.parse(cachedCommandsContent) as CreateApplicationCommand[];

		if (!isArray(cachedCommandsContentParsed)) {
			throw new TypeError(COMMANDS_CACHE_FILE_NOT_AN_ARRAY(filePath));
		}

		const { name: commandName, type: commandType } = applicationCommand;
		const existingCachedCommand = cachedCommandsContentParsed.find(({ name, type }) => name === commandName && type === commandType);

		if (!existingCachedCommand) {
			cachedCommandsContentParsed.push(applicationCommand);
		} else if (!isDeepStrictEqual(existingCachedCommand, applicationCommand)) {
			const existingCachedCommandIndex = cachedCommandsContentParsed.indexOf(existingCachedCommand);

			cachedCommandsContentParsed[existingCachedCommandIndex] = applicationCommand;
		}

		await writeFile(filePath, JSON.stringify(cachedCommandsContentParsed, null, 2), {
			encoding: 'utf-8',
		});

		return;
	}

	async #bulkOverwriteApplicationCommands(applicationCommands: CreateApplicationCommand[]): Promise<void> {
		const { client } = this;
		const { applicationId, rest } = client;
		const { resources } = rest;
		const { applications } = resources;

		await applications.bulkOverwriteApplicationCommands(applicationId, applicationCommands);
	}

	async #checkForCacheFile(): Promise<void> {
		const { enabled, filePath } = ConfigurationUtils.getCommandsCache();

		if (!enabled) {
			return this.debug(COMMANDS_CACHE_NOT_ENABLED());
		}

		const filePathExtension = extname(filePath);

		if (!filePathExtension.endsWith('.json')) {
			throw new TypeError(INVALID_COMMANDS_CACHE_FILE_TYPE());
		}

		if (!existsSync(filePath)) {
			this.debug(COMMANDS_CACHE_FILE_NOT_FOUND(filePath));

			await writeFile(filePath, '[]', {
				encoding: 'utf-8',
			});
		}

		return;
	}

	#handleChatInputCommandHandler(chatInputCommandHandler: ChatInputCommandHandler): CreateChatInputApplicationCommand {
		const chatInputApplicationCommand = chatInputCommandHandler.toJSON();
		const { name } = chatInputApplicationCommand;

		const { client } = this;
		const { commands } = client;
		const { chatInput } = commands;

		chatInput.set(name, chatInputCommandHandler);

		return chatInputApplicationCommand;
	}

	#handleCommandHandler(commandHandler: ChatInputCommandHandler | MessageCommandHandler | UserCommandHandler): CreateApplicationCommand {
		switch (true) {
			case isInstanceOf(commandHandler, ChatInputCommandHandler): {
				return this.#handleChatInputCommandHandler(commandHandler);
			}
			default:
				throw new TypeError('Unknown instance');
		}
	}

	async #importCommandFile(commandFilePath: Dirent<string>): Promise<CreateApplicationCommand> {
		const { name: commandFileName, parentPath: commandFileParentPath } = commandFilePath;

		const resolvedCommandFilePath = resolvePath(commandFileParentPath, commandFileName);
		const importedCommandFileData = await importFile<ImportedCommandFileData>(resolvedCommandFilePath, {
			requireDefault: true,
		});

		const { default: CommandHandler } = importedCommandFileData;

		const commandHandler = new CommandHandler();
		const applicationCommand = this.#handleCommandHandler(commandHandler);

		return applicationCommand;
	}

	async #getCommandFilePaths(): Promise<Dirent<string>[]> {
		const { commandsFolderPath } = this;
		const { COMMANDS_GLOB_PATTERNS } = CommandLoader;

		const filePathsAsyncGenerator = glob(COMMANDS_GLOB_PATTERNS, {
			cwd: commandsFolderPath,
			exclude: [
				'node_modules',
			],
			withFileTypes: true,
		});
		const filePathsArray = await Array.fromAsync(filePathsAsyncGenerator);

		return filePathsArray;
	}

	debug(message: string): void {
		const { client } = this;

		client.debug(message, {
			label: 'Command Handler',
		});
	}

	async registerCommands(): Promise<void> {
		await this.#checkForCacheFile();

		const commandFilePaths = await this.#getCommandFilePaths();
		const commandFileImportPromises = commandFilePaths.map((commandFilePath) => this.#importCommandFile(commandFilePath));

		const applicationCommands = await Promise.all(commandFileImportPromises);

		await this.#bulkOverwriteApplicationCommands(applicationCommands);
	}
}

interface ImportedCommandFileData {
	default: DeclarableCommandConstructor;
}
