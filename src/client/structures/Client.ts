import { CacheManager, EventsManager } from "#client/managers/index.js";
import { ClientEvents, type ClientEventsMap } from "#client/types/ClientEvents.js";
import { ConfigurationUtils } from "#configuration/helpers/ConfigurationUtils.js";
import { GatewayManager } from "#gateway/index.js";
import { RESTManager } from "#rest/index.js";
import type { User } from "#structures/index.js";
import type { Snowflake } from "#types/index.js";
import { BaseClient } from "./BaseClient.js";

export class Client extends BaseClient {
	readonly events = new EventsManager();
	readonly gateway: GatewayManager;
	readonly rest: RESTManager;
	readonly users = new CacheManager<Snowflake, User>();

	constructor() {
		super();

		this.gateway = new GatewayManager(this);
		this.rest = new RESTManager(this);
	}

	debug(message: string): void;
	debug(label: `[${string}]`, message: string): void;

	debug(labelOrMessage: string | `[${string}]`, possibleMessage?: string): void {
		let message: string;

		if (labelOrMessage && possibleMessage) {
			message = `${labelOrMessage} ${possibleMessage}`;
		} else {
			message = `[Client] ${labelOrMessage}`;
		}

		this.emit(ClientEvents.Debug, message);
	}

	emit<Event extends ClientEvents>(event: Event, ...data: ClientEventsMap[Event]): void {
		const { events } = this;

		events.emit(event, ...data);
	}

	async init(): Promise<void> {
		this.debug("Initializing the client and its dependencies...");

		await ConfigurationUtils.loadConfigurationFile();
		await super.init(this);

		const { gateway } = this;

		await gateway.init();
	}
}
