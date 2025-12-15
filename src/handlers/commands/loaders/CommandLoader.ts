import type { Dirent } from "node:fs";
import { glob } from "node:fs/promises";
import type { Client } from "#client/index.js";
import type { DeclarableCommandConstructor } from "#handlers/decorators/Declare.types.js";
import type { CreateApplicationCommandOptions, CreateChatInputApplicationCommandOptions } from "#types/index.js";
import { defineImmutableProperty } from "#utils/functions/defineImmutableProperty.js";
import { isInstanceOf } from "#utils/helpers/AssertionUtils.js";
import { importFile, resolvePath } from "#utils/helpers/ImportUtils.js";
import { ChatInputCommandHandler } from "../structures/index.js";

export class CommandLoader {
	declare readonly client: Client;
	declare readonly commandsFolderPath: string;

	constructor(commandsFolderPath: string, client: Client) {
		defineImmutableProperty(this, "client", client);
		defineImmutableProperty(this, "commandsFolderPath", commandsFolderPath);
	}

	static COMMANDS_GLOB_PATTERNS = [
		"**/*.command.{js,mjs,cjs,jsx,ts,mts,cts,tsx}",
	] as const;

	async #bulkOverwriteApplicationCommands(applicationCommands: CreateApplicationCommandOptions[]): Promise<void> {
		const { client } = this;
		const { applicationId, rest } = client;
		const { applications } = rest;

		await applications.bulkOverwriteApplicationCommands(applicationId, applicationCommands);
	}

	#handleChatInputCommandHandler(
		chatInputCommandHandler: ChatInputCommandHandler,
	): CreateChatInputApplicationCommandOptions {
		const chatInputApplicationCommand = chatInputCommandHandler.toJSON();
		const { name } = chatInputApplicationCommand;

		const { client } = this;
		const { commands } = client;
		const { chatInput } = commands;

		chatInput.set(name, chatInputCommandHandler);

		return chatInputApplicationCommand;
	}

	#handleCommandHandler(commandHandler: ChatInputCommandHandler): CreateApplicationCommandOptions {
		if (isInstanceOf(commandHandler, ChatInputCommandHandler)) {
			return this.#handleChatInputCommandHandler(commandHandler);
		}

		throw new Error("Unknown instance");
	}

	async #importCommandFile(commandFilePath: Dirent<string>): Promise<CreateApplicationCommandOptions> {
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
				"node_modules",
			],
			withFileTypes: true,
		});
		const filePathsArray = await Array.fromAsync(filePathsAsyncGenerator);

		return filePathsArray;
	}

	async registerCommands(): Promise<void> {
		const commandFilePaths = await this.#getCommandFilePaths();
		const commandFileImportPromises = commandFilePaths.map((commandFilePath) =>
			this.#importCommandFile(commandFilePath),
		);

		const applicationCommands = await Promise.all(commandFileImportPromises);

		await this.#bulkOverwriteApplicationCommands(applicationCommands);
	}
}

interface ImportedCommandFileData {
	default: DeclarableCommandConstructor;
}
