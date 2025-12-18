import { CommandManager } from "#client/managers/CommandManager.js";
import { CacheManager, EventManager } from "#client/managers/index.js";
import { GatewayManager } from "#gateway/index.js";
import { RESTManager } from "#rest/index.js";
import { defineImmutableProperty } from "#utils/functions/defineImmutableProperty.js";
import { isUndefined } from "#utils/helpers/AssertionUtils.js";
import { type ClientDebugOptions, ClientEvents } from "./Client.types.js";
import { ClientBase } from "./ClientBase.js";

const BRACKETS_REGEX = /^\[*(.*?)\]*$/;

export class Client extends ClientBase {
	declare readonly cache: CacheManager;
	declare readonly commands: CommandManager;
	declare readonly events: EventManager;
	declare readonly gateway: GatewayManager;
	declare readonly rest: RESTManager;

	constructor() {
		super();

		defineImmutableProperty(this, "cache", new CacheManager());
		defineImmutableProperty(this, "commands", new CommandManager());
		defineImmutableProperty(this, "events", new EventManager());
		defineImmutableProperty(this, "gateway", new GatewayManager(this));
		defineImmutableProperty(this, "rest", new RESTManager(this));
	}

	#normalizeLabelBrackets(label: string): `[${string}]` {
		const [_, content] = label.match(BRACKETS_REGEX) ?? [];

		return !isUndefined(content) ? `[${content}]` : `[Unknown]`;
	}

	debug(message: string, options?: ClientDebugOptions): void {
		const { events } = this;
		const { label = "Client" } = options ?? {};

		const normalizedLabel = this.#normalizeLabelBrackets(label);
		const debugMessage = `${normalizedLabel} ${message}`;

		events.emit(ClientEvents.Debug, debugMessage);
	}

	async init(): Promise<void> {
		this.debug("Initializing the client and its dependencies...");

		await super.init(this);

		const { gateway } = this;

		await gateway.init();
	}
}
