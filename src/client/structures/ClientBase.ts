import { EnsureInitialized } from '#client/decorators/EnsureInitialized.js';
import { ClientError } from '#client/errors/ClientError.js';
import { createDirectoryPath } from '#client/functions/createDirectoryPath.js';
import { ConfigurationUtils } from '#configuration/helpers/ConfigurationUtils.js';
import { CommandLoader } from '#handlers/commands/loaders/CommandLoader.js';
import { EventLoader } from '#handlers/events/loaders/EventLoader.js';
import { CLIENT_ALREADY_INITIALIZED, CLIENT_NOT_INITIALIZED } from '#messages/errors.js';
import type { Snowflake } from '#types/index.js';
import { castSnowflake } from '#utils/index.js';
import type { Client } from './Client.js';

export class ClientBase {
	/**
	 * The ID of the application.
	 *
	 * @remarks
	 * This getter depends on `token` from `ClientBase`.
	 *
	 * This value is retrieved by decoding the first segment of the application
	 * token which contains the application ID encoded in Base64.
	 *
	 * This getter throws a `ClientError` if the client is not initialized.
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
	 * This getter throws a `ClientError` if the client is not initialized.
	 */
	@EnsureInitialized()
	get intents(): number {
		return ConfigurationUtils.getIntents();
	}

	/**
	 * The token of the application.
	 *
	 * @remarks
	 * This value is retrieved from the framework configuration.
	 *
	 * This getter throws a `ClientError` if the client is not initialized.
	 */
	@EnsureInitialized()
	get token(): string {
		return ConfigurationUtils.getToken();
	}

	/**
	 * Checks whether the configuration file was initialized or loaded.
	 */
	protected _checkIsInitialized(): void {
		if (!ConfigurationUtils.isConfigurationInitialized()) {
			throw new ClientError(CLIENT_NOT_INITIALIZED());
		}
	}

	protected async _init(client: Client): Promise<void> {
		if (ConfigurationUtils.isConfigurationInitialized()) {
			throw new ClientError(CLIENT_ALREADY_INITIALIZED());
		}

		await ConfigurationUtils.initializeConfigurationOptions();

		const { commands, events, root } = ConfigurationUtils.getLocations();

		await Promise.all([
			this._prepareCommands(root, commands, client),
			this._prepareEvents(root, events, client),
		]);

		return;
	}

	private async _prepareCommands(
		root: string,
		commandsDirectory: string,
		client: Client,
	): Promise<void> {
		const commandsFolderPath = createDirectoryPath(root, commandsDirectory);
		const commandLoader = new CommandLoader(commandsFolderPath, client);

		await commandLoader.registerCommands();

		return;
	}

	private async _prepareEvents(
		root: string,
		eventsDirectory: string,
		client: Client,
	): Promise<void> {
		const eventsFolderPath = createDirectoryPath(root, eventsDirectory);
		const eventLoader = new EventLoader(eventsFolderPath, client);

		await eventLoader.registerEvents();

		return;
	}
}
