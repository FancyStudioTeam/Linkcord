import { extname } from "node:path";
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
		return "**/*.command.{js,cjs,mjs,ts,cts,mts,jsx,tsx}";
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
}

/**
 * @internal
 */
interface CacheConfiguration {
	cacheEnabled: boolean;
	cachePath: string;
}

/**
 * @internal
 */
interface ImportCommandData {
	default?: CommandData;
}

/**
 * @internal
 */
type CommandData = UserContextCommandInstance;
