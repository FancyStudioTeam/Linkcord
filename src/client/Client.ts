import { LinkcordConfiguration } from "#configuration/structures/LinkcordConfiguration.js";
import { GatewayManager } from "#gateway/index.js";
import { RESTManager } from "#rest/index.js";
import type { Guild, User } from "#structures/index.js";
import type { Snowflake } from "#types/index.js";
import { BaseClient } from "./BaseClient.js";
import { resolveGatewayIntents } from "./functions/resolveGatewayIntents.js";
import { CacheManager } from "./managers/CacheManager.js";

/**
 * @public
 */
export class Client extends BaseClient {
	readonly gateway: GatewayManager;
	readonly guilds = new CacheManager<Snowflake, Guild>();
	readonly rest: RESTManager;
	readonly users = new CacheManager<Snowflake, User>();

	constructor() {
		super();

		this.gateway = new GatewayManager(this);
		this.rest = new RESTManager(this);
	}

	get token(): Readonly<string> {
		const { token } = LinkcordConfiguration.getOptions();

		return token;
	}

	get intents(): Readonly<number> {
		const { intents } = LinkcordConfiguration.getOptions();
		const resolvedIntents = resolveGatewayIntents(intents);

		return resolvedIntents;
	}

	async init(): Promise<void> {
		await LinkcordConfiguration.loadConfigurationFile();
		await super.init();

		const { gateway } = this;

		await gateway.init();
	}
}
