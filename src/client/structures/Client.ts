import { CommandManager } from "#client/managers/CommandManager.js";
import { CacheManager, EventManager } from "#client/managers/index.js";
import { loadConfigurationFile } from "#configuration/helpers/ConfigurationUtils.js";
import { GatewayManager } from "#gateway/index.js";
import { RESTManager } from "#rest/index.js";
import { defineImmutableProperty } from "#utils/functions/defineImmutableProperty.js";
import { isUndefined } from "#utils/helpers/AssertionUtils.js";
import { type ClientDebugOptions, type ClientDebugPair, ClientEvents } from "./Client.types.js";
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

	#formatStringPairs(pairs: ClientDebugPair[]): string {
		const keyLengths = pairs.map(([{ length: keyLength }]) => keyLength);
		const largestKeyLength = Math.max(...keyLengths);

		const formattedPairs = pairs.map(([key, value]) => `\t${key.padEnd(largestKeyLength)} - ${value}`);
		const formattedPairsString = formattedPairs.join("\n");

		return formattedPairsString;
	}

	#normalizeLabelBrackets(label: string): `[${string}]` {
		const [_, content] = label.match(BRACKETS_REGEX) ?? [];

		return !isUndefined(content) ? `[${content}]` : `[Unknown]`;
	}

	debug(message: string, options?: ClientDebugOptions): void {
		const { events } = this;
		const { label = "Client", pairs } = options ?? {};

		const normalizedLabel = this.#normalizeLabelBrackets(label);

		let debugMessage = `${normalizedLabel} ${message}`;

		if (pairs) {
			debugMessage += `\n${this.#formatStringPairs(pairs)}`;
		}

		events.emit(ClientEvents.Debug, debugMessage);
	}

	async init(): Promise<void> {
		this.debug("Initializing the client and its dependencies...");

		await loadConfigurationFile();
		await super.init(this);

		const { gateway } = this;

		await gateway.init();
	}
}
