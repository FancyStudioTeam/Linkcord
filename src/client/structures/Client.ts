import { CacheManager, EventsManager } from "#client/managers/index.js";
import { ConfigurationUtils } from "#configuration/helpers/ConfigurationUtils.js";
import { GatewayManager } from "#gateway/index.js";
import { RESTManager } from "#rest/index.js";
import type { User } from "#structures/index.js";
import type { Snowflake } from "#types/index.js";
import { AssertionUtils } from "#utils/helpers/AssertionUtils.js";
import { type ClientDebugOptions, ClientEvents } from "./Client.types.js";
import { ClientBase } from "./ClientBase.js";

const { isUndefined } = AssertionUtils;

const BRACKETS_REGEX = /^\[*(.*?)\]*$/;

export class Client extends ClientBase {
	readonly events = new EventsManager();
	readonly gateway: GatewayManager;
	readonly rest: RESTManager;
	readonly users = new CacheManager<Snowflake, User>();

	constructor() {
		super();

		this.gateway = new GatewayManager(this);
		this.rest = new RESTManager(this);
	}

	/**
	 * Normalizes a label wrapped in one or multiple pairs of brackets,
	 * ensuring the result contains exactly one outer pair of `[]`.
	 *
	 * @param label - The label to normalize.
	 */
	#checkForBrackets(label: string): `[${string}]` {
		const [_, content] = label.match(BRACKETS_REGEX) ?? [];

		return !isUndefined(content) ? `[${content}]` : `[Unknown]`;
	}

	debug(message: string, options?: ClientDebugOptions): void {
		const { events } = this;
		const { label: labelOption } = options ?? {};

		const label = this.#checkForBrackets(labelOption ?? "Client");

		events.emit(ClientEvents.Debug, `${label} ${message}`);
	}

	async init(): Promise<void> {
		this.debug("Initializing the client and its dependencies...");

		await ConfigurationUtils.loadConfigurationFile();
		await super.init(this);

		const { gateway } = this;

		await gateway.init();
	}
}
