import { join } from "node:path";
import { cwd } from "node:process";
import { getOptions, loadConfigurationFile } from "#configuration/helpers/ConfigurationUtils.js";
import { CommandLoader } from "#handlers/commands/loaders/CommandLoader.js";
import { EventLoader } from "#handlers/events/loaders/EventLoader.js";
import type { Snowflake } from "#types/index.js";
import { SnowflakeUtils } from "#utils/index.js";
import type { Client } from "./Client.js";

const { cast } = SnowflakeUtils;

export class ClientBase {
	/**
	 * @remarks
	 * This value is retrieved by decoding the first segment of the application
	 * token which contains the application ID encoded in Base64.
	 *
	 * The first segment is decoded using the `atob` method:
	 * ```ts
	 * atob("ODAzNTExMTAyMjQ2Nzg5MTI"); // -> "80351110224678912"
	 * ```
	 */
	get applicationId(): Snowflake {
		const { token } = getOptions();

		const [encodedApplicationId] = token.split(".");
		const decodedApplicationId = atob(encodedApplicationId);

		return cast(decodedApplicationId);
	}

	/**
	 * @remarks
	 * This value is retrieved from the framework configuration.
	 */
	get intents(): number {
		return getOptions().intents;
	}

	/**
	 * @remarks
	 * This value is retrieved from the framework configuration.
	 */
	get token(): string {
		return getOptions().token;
	}

	#createDirectoryPath(root: string, directoryName: string): string {
		return join(cwd(), root, directoryName);
	}

	async #prepareCommands(root: string, commandsDirectory: string, client: Client): Promise<void> {
		const commandsFolderPath = this.#createDirectoryPath(root, commandsDirectory);
		const commandLoader = new CommandLoader(commandsFolderPath, client);

		await commandLoader.registerCommands();
	}

	async #prepareEvents(root: string, eventsDirectory: string, client: Client): Promise<void> {
		const eventsFolderPath = this.#createDirectoryPath(root, eventsDirectory);
		const eventLoader = new EventLoader(eventsFolderPath, client);

		await eventLoader.registerEvents();
	}

	protected async init(client: Client): Promise<void> {
		await loadConfigurationFile();

		const { locations } = getOptions();
		const { commands, events, root } = locations;

		await Promise.all([
			this.#prepareCommands(root, commands, client),
			this.#prepareEvents(root, events, client),
		]);
	}
}
