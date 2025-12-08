import { join } from "node:path";
import { cwd } from "node:process";
import { ConfigurationUtils } from "#configuration/helpers/ConfigurationUtils.js";
import { CommandLoader } from "#handlers/commands/loaders/CommandLoader.js";
import { EventLoader } from "#handlers/events/loaders/EventLoader.js";
import type { Client } from "./Client.js";

/**
 * Represents the base structure of the main Discord client.
 *
 * @remarks
 * This class provides access to core client management and serves as the
 * foundation for initializing and managing the main Discord client.
 */
export class ClientBase {
	/**
	 * The gateway intents used when connecting the Discord client to the gateway.
	 *
	 * @remarks
	 * This value is retrieved from the framework configuration.
	 */
	get intents(): number {
		return ConfigurationUtils.getIntents();
	}

	/**
	 * The application token used to authenticate the Discord client.
	 *
	 * @remarks
	 * This value is retrieved from the framework configuration.
	 */
	get token(): string {
		return ConfigurationUtils.getToken();
	}

	/**
	 * Creates a path to a directory using the provided root and directory name.
	 *
	 * @param root - The root directory where all the target directories are located.
	 * @param directoryName - The name of the directory.
	 */
	#createDirectoryPath(root: string, directoryName: string): string {
		return join(cwd(), root, directoryName);
	}

	/**
	 * Registers all framework modules for the provided Discord client.
	 *
	 * @param client - The main Discord client instance where the modules will be registered.
	 */
	async #register(client: Client): Promise<void> {
		const locations = ConfigurationUtils.getLocations();
		const { commands, events, root } = locations;

		const commandsFolderPath = this.#createDirectoryPath(root, commands);
		const eventsFolderPath = this.#createDirectoryPath(root, events);

		const commandLoader = new CommandLoader(commandsFolderPath, client);
		const eventLoader = new EventLoader(eventsFolderPath, client);

		await Promise.all([
			commandLoader.registerCommands(),
			eventLoader.registerEvents(),
		]);
	}

	async init(client: Client): Promise<void> {
		await this.#register(client);
	}
}
