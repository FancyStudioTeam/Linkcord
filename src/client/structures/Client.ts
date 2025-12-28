import { CacheManager, CommandManager, EventManager } from '#client/managers/index.js';
import { GatewayManager } from '#gateway/index.js';
import { RESTManager } from '#rest/index.js';
import type { User } from '#structures/User.js';
import { defineReadonlyProperty } from '#utils/functions/defineReadonlyProperty.js';
import { isUndefined } from '#utils/helpers/AssertionUtils.js';
import { type ClientDebugOptions, type ClientDebugPair, ClientEvents } from './Client.types.js';
import { ClientBase } from './ClientBase.js';

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

	/**
	 * The user associated with the application.
	 *
	 * @remarks
	 * - This getter depends on `applicationId` from {@link ClientBase}.
	 * - This getter throws an error if the application user is not cached.
	 */
	get user(): User {
		const { applicationId, cache } = this;
		const { users } = cache;

		const cachedUser = users.get(applicationId);

		if (!cachedUser) {
			throw new TypeError(`Application user (${applicationId}) is not cached`);
		}

		return cachedUser;
	}

	#formatPairsString(pairs: ClientDebugPair[]): string {
		const largestKeyLengthCallback = (accumulator: number, [{ length }]: ClientDebugPair) => Math.max(accumulator, length);
		const largestKeyLength = pairs.reduce(largestKeyLengthCallback, 0);

		const formattedString = pairs.map(([key, value]) => `\t${key.padEnd(largestKeyLength)} - ${value}`).join('\n');

		return formattedString;
	}

	#normalizeLabelBrackets(label: string): `[${string}]` {
		const [_, content] = label.match(BRACKETS_REGEX) ?? [];

		return !isUndefined(content) ? `[${content}]` : '[Unknown]';
	}

	debug(message: string, options?: ClientDebugOptions): void {
		const { label = 'Client', pairs } = options ?? {};
		const { events } = this;

		const normalizedLabel = this.#normalizeLabelBrackets(label);
		let debugMessage = `${normalizedLabel} ${message}`;

		if (pairs) {
			const formattedPairsString = this.#formatPairsString(pairs);

			debugMessage += `\n${formattedPairsString}`;
		}

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
