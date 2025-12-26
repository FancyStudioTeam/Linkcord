import { CacheManager, CommandManager, EventManager } from '#client/managers/index.js';
import { GatewayManager } from '#gateway/index.js';
import { RESTManager } from '#rest/index.js';
import { defineReadonlyProperty } from '#utils/functions/defineReadonlyProperty.js';
import { isUndefined } from '#utils/helpers/AssertionUtils.js';
import { ClientBase } from '../ClientBase.js';
import { type ClientDebugOptions, ClientEvents } from './Client.types.js';

const BRACKETS_REGEX = /^\[*(.*?)\]*$/;

export class Client extends ClientBase {
	declare readonly cache: CacheManager;
	declare readonly commands: CommandManager;
	declare readonly events: EventManager;
	declare readonly gateway: GatewayManager;
	declare readonly rest: RESTManager;

	constructor() {
		super();

		defineReadonlyProperty(this, 'cache', new CacheManager());
		defineReadonlyProperty(this, 'commands', new CommandManager());
		defineReadonlyProperty(this, 'events', new EventManager());
		defineReadonlyProperty(this, 'gateway', new GatewayManager(this));
		defineReadonlyProperty(this, 'rest', new RESTManager(this));
	}

	#normalizeLabelBrackets(label: string): `[${string}]` {
		const [_, content] = label.match(BRACKETS_REGEX) ?? [];

		return !isUndefined(content) ? `[${content}]` : '[Unknown]';
	}

	debug(message: string, options?: ClientDebugOptions): void {
		const { label = 'Client' } = options ?? {};
		const { events } = this;

		const normalizedLabel = this.#normalizeLabelBrackets(label);
		const debugMessage = `${normalizedLabel} ${message}`;

		events.emit(ClientEvents.Debug, {
			message: debugMessage,
		});
	}

	async init(): Promise<void> {
		const { gateway } = this;

		this.debug('Initializing the client and its dependencies...');

		await super.init(this);
		await gateway.init();
	}
}
