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

	/** Initializes the client and its dependencies. */
	async init(): Promise<void> {
		await ConfigurationUtils.loadConfigurationFile();
		await super.__init__(this);

		const { gateway } = this;

		await gateway.init();
	}
}
