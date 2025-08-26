import { basename } from "node:path";
import { emitWarning } from "node:process";
import { glob, type Path } from "glob";
import type { Client } from "#client/index.js";
import type { UserContextCommandInstance } from "#handlers/types/index.js";
import { ApplicationCommandTypes, type CreateApplicationCommandOptions } from "#types/index.js";
import { ImportUtils } from "#utils/helpers/ImportUtils.js";
import { UserContextCommand } from "../structures/UserContextCommand.js";

const APPLICATION_COMMANDS: CreateApplicationCommandOptions[] = [];
const COMMANDS_GLOB_PATTERNS = ["**/*.command.{js,mjs,cjs,jsx,ts,mts,cts,tsx}"];

/**
 * Loads the file paths from the commands folder.
 * @param commandsFolderPath - The path of the commands folder.
 * @returns The loaded `Path` objects.
 */
async function loadCommandFilePaths(commandsFolderPath: string): Promise<Path[]> {
	const commandFilePaths = await glob(COMMANDS_GLOB_PATTERNS, {
		cwd: commandsFolderPath,
		withFileTypes: true,
	});

	return commandFilePaths;
}

async function registerCommands(commandsFolderPath: string, client: Client): Promise<void> {
	const commandFilePaths = await loadCommandFilePaths(commandsFolderPath);

	for (const commandPath of commandFilePaths) {
		const { name: fileName, parentPath: fileParentPath } = commandPath;

		const importCommandFilePath = ImportUtils.resolvePath(fileParentPath, fileName);
		const importCommandFileData = await ImportUtils.import<CommandFileData>(
			importCommandFilePath,
			true,
		);

		const { default: defaultExport, disabled } = importCommandFileData;

		if (disabled) {
			emitWarning(
				`Command "${basename(importCommandFilePath)}" is disabled and will not be registered.`,
			);

			continue;
		}

		const Command = new defaultExport();
		const type = Command["__type__"];

		switch (type) {
			case ApplicationCommandTypes.User:
				break;
		}

		defaultExport;
	}
}

export const CommandsLoader = {
	loadCommandFilePaths,
	registerCommands,
};

/** The expected structure of the imported file. */
interface CommandFileData {
	/** The command instance to handle and register. */
	default: CommandData;
	/** Whether the command is disabled and should not be registered. */
	disabled?: boolean;
}

type CommandData = UserContextCommandInstance;

/*import { extname } from "node:path";
import { isDeepStrictEqual } from "node:util";
import { glob } from "glob";
import type { BaseClient } from "#client/BaseClient.js";
import { LinkcordConfiguration } from "#configuration/structures/LinkcordConfiguration.js";
import { ApplicationCommandTypes } from "#types/index.js";
import { ImportUtils } from "#utils/structures/ImportUtils.js";
import type { UserContextCommand } from "../structures/UserContextCommand.js";
import type { UserContextCommandInstance } from "../types.js";

const APPLICATION_COMMANDS = [];

export class CommandsLoader {
	static get CACHE_PATH(): string {
		const { commandsCache } = LinkcordConfiguration.getOptions();
		const { cachePath } = commandsCache ?? {};

		if (cachePath) {
			const extension = extname(cachePath);
			const slicedExtension = extension.slice(1);

			if (slicedExtension && slicedExtension !== "json") {
				throw new Error(
					`Invalid cache file extension "${extension}". Cache file must be a JSON file.`,
				);
			}

			return extension ? cachePath : `${cachePath}.json`;
		}

		return "commands.json";
	}

	static get CACHE_CONFIGURATION(): CacheConfiguration {
		const { commandsCache } = LinkcordConfiguration.getOptions();
		const { enabled } = commandsCache ?? {};
		const cachePath = CommandsLoader.CACHE_PATH;

		return {
			cacheEnabled: enabled ?? false,
			cachePath,
		};
	}

	static get GLOB_PATTERN(): string {

	}

	static handleUserContextCommand(
		command: UserContextCommand,
		_cacheConfiguration: CacheConfiguration,
	): void {
		// const { cacheEnabled } = cacheConfiguration;
		const resolvedApplicationCommand = command.toJSON();

		APPLICATION_COMMANDS.push(resolvedApplicationCommand);
	}

	static async registerCommandsToClient(
		commandsFolderPath: string,
		client: BaseClient,
	): Promise<void> {
		const globPattern = CommandsLoader.GLOB_PATTERN;
		const cacheConfiguration = CommandsLoader.CACHE_CONFIGURATION;
		const commandFilePaths = await glob(globPattern, {
			cwd: commandsFolderPath,
			withFileTypes: true,
		});

		for (const commandPath of commandFilePaths) {
			const { name: fileName, parentPath: fileParentPath } = commandPath;
			const importCommandPath = ImportUtils.resolvePath(fileParentPath, fileName);
			const importCommandData = (await import(importCommandPath)) as ImportCommandData;
			const { default: defaultExport } = importCommandData;

			if (!defaultExport) {
				throw new Error(`Command file '${fileName}' must include a default export.`);
			}

			const commandInstance = new defaultExport();
			const { type } = commandInstance;

			switch (type) {
				case ApplicationCommandTypes.User: {
					CommandsLoader.handleUserContextCommand(commandInstance, cacheConfiguration);

					break;
				}
			}
		}
	}
}*/
