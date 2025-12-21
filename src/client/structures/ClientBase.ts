import { join } from "node:path";
import { cwd } from "node:process";
import { EnsureInitialized } from "#client/decorators/EnsureInitialized.js";
import { ClientError } from "#client/errors/ClientError.js";
import {
	getConfigurationOptions,
	initializeConfigurationOptions,
	isConfigurationInitialized,
} from "#configuration/helpers/ConfigurationUtils.js";
import { CommandLoader } from "#handlers/commands/loaders/CommandLoader.js";
import { EventLoader } from "#handlers/events/loaders/EventLoader.js";
import type { Snowflake } from "#types/index.js";
import { SnowflakeUtils } from "#utils/index.js";
import type { Client } from "./Client/Client.js";

const { cast } = SnowflakeUtils;

export class ClientBase {
	/**
	 * @remarks
	 * - This value is retrieved by decoding the first segment of the application
	 * token which contains the application ID encoded in Base64.
	 * - The encoded string is decoded using the `atob` method.
	 * - This getter throws an error if the client is not initialized.
	 */
	@EnsureInitialized()
	get applicationId(): Snowflake {
		const { token } = this;

		const [encodedApplicationId] = token.split(".");
		const decodedApplicationId = atob(encodedApplicationId);

		return cast(decodedApplicationId);
	}

	/**
	 * @remarks
	 * - This value is retrieved from the framework configuration.
	 * - This getter throws an error if the client is not initialized.
	 */
	@EnsureInitialized()
	get intents(): number {
		return getConfigurationOptions().intents;
	}

	/**
	 * @remarks
	 * - This value is retrieved from the framework configuration.
	 * - This getter throws an error if the client is not initialized.
	 */
	@EnsureInitialized()
	get token(): string {
		return getConfigurationOptions().token;
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

	protected checkIsInitialized(): void {
		const isInitialized = isConfigurationInitialized();

		if (!isInitialized) {
			throw new ClientError("Client has not been initialized yet");
		}
	}

	protected async init(client: Client): Promise<void> {
		const isInitialized = isConfigurationInitialized();

		if (isInitialized) {
			throw new ClientError("Client can be only initialized once");
		}

		await initializeConfigurationOptions();

		const { locations } = getConfigurationOptions();
		const { commands, events, root } = locations;

		await Promise.all([
			this.#prepareCommands(root, commands, client),
			this.#prepareEvents(root, events, client),
		]);
	}
}
