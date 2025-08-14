import { CacheManager, EventsManager } from "#client/managers/index.js";
import { ClientEvents, type ClientEventsMap } from "#client/types/ClientEvents.js";
import { ConfigurationUtils } from "#configuration/helpers/ConfigurationUtils.js";
import { GatewayManager } from "#gateway/index.js";
import { RESTManager } from "#rest/index.js";
import type { Guild, User } from "#structures/index.js";
import type { Snowflake } from "#types/index.js";
import { BaseClient } from "./BaseClient.js";

/**
 * The main client class for Discord.
 * @group Client/Structures
 * @public
 */
export class Client extends BaseClient {
	/** The events manager of the client. */
	readonly events = new EventsManager();
	/** The gateway manager of the client. */
	readonly gateway: GatewayManager;
	/** The cache manager for guilds of the client. */
	readonly guilds = new CacheManager<Snowflake, Guild>();
	/** The REST manager of the client. */
	readonly rest: RESTManager;
	/** The cache manager for users of the client. */
	readonly users = new CacheManager<Snowflake, User>();

	/** Creates a new {@link Client | `Client`} instance. */
	constructor() {
		super();

		this.gateway = new GatewayManager(this);
		this.rest = new RESTManager(this);
	}

	/**
	 * Sends a debug message to the client.
	 * @param message - The message to send.
	 */
	private __debug__(message: string): void;
	/**
	 * Sends a debug message to the client.
	 * @param label - The label to use in the debug message.
	 * @param message - The message to send.
	 */
	private __debug__(label: `[${string}]`, message: string): void;
	/**
	 * Sends a debug message to the client.
	 * @param labelOrMessage - The label to use in the debug message or the
	 * 	message to send.
	 * @param possibleMessage - The message to send, if any.
	 */
	private __debug__(labelOrMessage: string | `[${string}]`, possibleMessage?: string): void {
		this.__emit__(
			ClientEvents.Debug,
			labelOrMessage && possibleMessage
				? `${labelOrMessage} ${possibleMessage}`
				: `[Client] ${labelOrMessage}`,
		);
	}

	/**
	 * Emits an event with the given data.
	 * @param event - The name of the event to emit.
	 * @param data - The data to emit with the event.
	 */
	private __emit__<Event extends ClientEvents>(
		event: Event,
		...data: ClientEventsMap[Event]
	): void {
		const { events } = this;

		events.emit(event, ...data);
	}

	/** Initializes the client and its dependencies. */
	async init(): Promise<void> {
		this.__debug__("Initializing the client and its dependencies...");

		await ConfigurationUtils.loadConfigurationFile();
		await super.__init__(this);

		const { gateway } = this;

		await gateway.init();
	}
}
