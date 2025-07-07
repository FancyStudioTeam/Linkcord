import type { Client } from "#client/Client.js";
import { GatewayShard, GatewayShardStatus } from "./GatewayShard.js";

/**
 * @public
 */
export class GatewayManager {
	readonly client: Client;
	readonly shards = new Map<number, GatewayShard>();

	ready = false;
	shardCount = 0;

	constructor(client: Client) {
		this.client = client;
	}

	get intents(): Readonly<number> {
		const { client } = this;
		const { intents } = client;

		return intents;
	}

	get token(): Readonly<string> {
		const { client } = this;
		const { token } = client;

		return token;
	}

	/**
	 * @internal
	 */
	protected checkReady(): void {
		const { ready, shardCount, shards } = this;
		const shardsArray = [...shards.values()];

		if (
			shards.size !== shardCount ||
			ready ||
			shardsArray.some(({ status }) => status !== GatewayShardStatus.Ready)
		) {
			return;
		}

		this.triggerReady();
	}

	/**
	 * @internal
	 */
	protected setShardCount(shardCount: number): void {
		this.shardCount = shardCount;
	}

	/**
	 * @internal
	 */
	protected triggerReady(): void {
		const { client, ready } = this;
		const { events } = client;

		this.ready = true;

		if (ready) {
			return;
		}

		events.emit("ready", client);
	}

	async init(): Promise<void> {
		/**
		 * TODO: Fetch shards from gateway information and spawn them.
		 */
		const shard = new GatewayShard(0, this);

		shard.init();

		await Promise.resolve();
	}
}
