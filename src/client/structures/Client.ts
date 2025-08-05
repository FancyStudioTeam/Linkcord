import { CacheManager, EventsManager } from "#client/managers/index.js";
import { ConfigurationUtils } from "#configuration/utils/ConfigurationUtils.js";
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
export class Client<IsReady extends boolean = boolean> extends BaseClient {
	/**
	 * The events manager of the client.
	 */
	readonly events = new EventsManager();
	/**
	 * The gateway manager of the client.
	 */
	readonly gateway: GatewayManager;
	/**
	 * The guilds cache manager of the client.
	 */
	readonly guilds = new CacheManager<Snowflake, Guild>();
	/**
	 * Whether the client is fully ready.
	 */
	// biome-ignore lint/nursery/useReadonlyClassProperties: TODO.
	ready: IsReady = false as IsReady;
	/**
	 * The REST manager of the client.
	 */
	readonly rest: RESTManager;
	/**
	 * The users cache manager of the client.
	 */
	readonly users = new CacheManager<Snowflake, User>();

	/**
	 * Creates a new {@link Client | `Client`} instance.
	 */
	constructor() {
		super();

		this.gateway = new GatewayManager(this);
		this.rest = new RESTManager(this);
	}

	/**
	 * Initializes the client and its dependencies.
	 */
	async init(): Promise<void> {
		await ConfigurationUtils.loadConfigurationFile();
		await super.__init__(this);

		const { gateway } = this;

		/**
		 * Spawn shards and connect them to the gateway.
		 */
		await gateway.init();
	}

	/**
	 * Checks whether the client is fully ready.
	 * @returns Whether the client is fully ready.
	 */
	isReady(): this is Client<true> {
		const { ready } = this;

		return ready;
	}
}
