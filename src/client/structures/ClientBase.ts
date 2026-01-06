import { join } from 'node:path';
import { cwd } from 'node:process';
import { EnsureInitialized } from '#client/decorators/EnsureInitialized.js';
import { ClientError } from '#client/errors/ClientError.js';
import {
	getConfigurationOptions,
	initializeConfigurationOptions,
	isConfigurationInitialized,
} from '#configuration/helpers/ConfigurationUtils.js';
import { CLIENT_ALREADY_INITIALIZED, CLIENT_NOT_INITIALIZED } from '#errors/messages.js';
import { CommandLoader } from '#handlers/commands/loaders/CommandLoader.js';
import { EventLoader } from '#handlers/events/loaders/EventLoader.js';
import type { Snowflake } from '#types/index.js';
import { castSnowflake } from '#utils/index.js';
import type { Client } from './Client.js';

export class ClientBase {
	/**
	 * The ID of the application.
	 *
	 * @remarks
	 * This getter depends on {@link token} from {@link ClientBase}.
	 *
	 * This value is retrieved by decoding the first segment of the application
	 * token which contains the application ID encoded in Base64.
	 *
	 * This getter throws an error if the client is not initialized.
	 */
	@EnsureInitialized()
	get applicationId(): Snowflake {
		const { token } = this;

		const [encodedApplicationId] = token.split('.');
		const decodedApplicationId = atob(encodedApplicationId);

		return castSnowflake(decodedApplicationId);
	}

	/**
	 * The intents of the application.
	 *
	 * @remarks
	 * This value is retrieved from the framework configuration.
	 *
	 * This getter throws an error if the client is not initialized.
	 */
	@EnsureInitialized()
	get intents(): number {
		return getConfigurationOptions().intents;
	}

	/**
	 * The token of the application.
	 *
	 * @remarks
	 * This value is retrieved from the framework configuration.
	 *
	 * This getter throws an error if the client is not initialized.
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

		return;
	}

	async #prepareEvents(root: string, eventsDirectory: string, client: Client): Promise<void> {
		const eventsFolderPath = this.#createDirectoryPath(root, eventsDirectory);
		const eventLoader = new EventLoader(eventsFolderPath, client);

		await eventLoader.registerEvents();

		return;
	}

	protected checkIsInitialized(): void {
		if (!isConfigurationInitialized()) {
			throw new ClientError(CLIENT_NOT_INITIALIZED());
		}
	}

	protected async init(client: Client): Promise<void> {
		if (isConfigurationInitialized()) {
			throw new ClientError(CLIENT_ALREADY_INITIALIZED());
		}

		await initializeConfigurationOptions();

		const { locations } = getConfigurationOptions();
		const { commands, events, root } = locations;

		await Promise.all([
			this.#prepareCommands(root, commands, client),
			this.#prepareEvents(root, events, client),
		]);

		return;
	}
}
