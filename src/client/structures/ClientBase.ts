import { join } from "node:path";
import { cwd } from "node:process";
import { getOptions } from "#configuration/helpers/ConfigurationUtils.js";
import { CommandLoader } from "#handlers/commands/loaders/CommandLoader.js";
import { EventLoader } from "#handlers/events/loaders/EventLoader.js";
import type { Snowflake } from "#types/index.js";
import { SnowflakeUtils } from "#utils/index.js";
import type { Client } from "./Client.js";

const { cast } = SnowflakeUtils;

/**
 * Represents the base structure of the main Discord client instance.
 *
 * @remarks
 * This class provides access to core client management and serves as the
 * foundation for initializing and managing the main Discord client.
 */
export class ClientBase {
	/**
	 * The application ID associated with the application token.
	 *
	 * @remarks
	 * This value is retrieved by decoding the first segment of the application token
	 * which contains the application ID encoded in Base64.
	 */
	get applicationId(): Snowflake {
		const { token } = getOptions();

		const [encodedApplicationId] = token.split(".");
		const decodedApplicationId = atob(encodedApplicationId);

		return cast(decodedApplicationId);
	}

	/**
	 * The gateway intents used when connecting the Discord client to the gateway.
	 *
	 * @remarks
	 * This value is retrieved from the framework configuration.
	 */
	get intents(): number {
		return getOptions().intents;
	}

	/**
	 * The application token used to authenticate the Discord client.
	 *
	 * @remarks
	 * This value is retrieved from the framework configuration.
	 */
	get token(): string {
		return getOptions().token;
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
	 * Prepares and registers the Discord commands into the main Discord client.
	 *
	 * @param root - The root directory where the commands directory is located.
	 * @param commandsDirectory - The name of the directory where the command files are located.
	 * @param client - The main Discord client instance where the commands will be registered.
	 */
	async #prepareCommands(root: string, commandsDirectory: string, client: Client): Promise<void> {
		const commandsFolderPath = this.#createDirectoryPath(root, commandsDirectory);
		const commandLoader = new CommandLoader(commandsFolderPath, client);

		await commandLoader.registerCommands();
	}

	/**
	 * Prepares and registers the Discord events into the main Discord client.
	 *
	 * @param root - The root directory where the events directory is located.
	 * @param eventsDirectory - The name of the directory where the event files are located.
	 * @param client - The main Discord client instance where the events will be registered.
	 */
	async #prepareEvents(root: string, eventsDirectory: string, client: Client): Promise<void> {
		const eventsFolderPath = this.#createDirectoryPath(root, eventsDirectory);
		const eventLoader = new EventLoader(eventsFolderPath, client);

		await eventLoader.registerEvents();
	}

	/**
	 * Initializes the framework by registering all modules into the main Discord client.
	 *
	 * @param client - The main Discord client instance where the framework modules will be registered.
	 */
	protected async init(client: Client): Promise<void> {
		const { locations } = getOptions();
		const { commands, events, root } = locations;

		await Promise.all([
			this.#prepareCommands(root, commands, client),
			this.#prepareEvents(root, events, client),
		]);
	}
}
