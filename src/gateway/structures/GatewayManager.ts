import { type Client, ClientEvents } from '#client/index.js';
import { defineReadonlyProperty } from '#utils/functions/defineReadonlyProperty.js';
import { Collection } from '#utils/index.js';
import { GatewayShard } from './GatewayShard.js';
import { GatewayShardStatus } from './GatewayShard.types.js';

export class GatewayManager {
	#shardsToSpawn = 0;

	declare readonly client: Client;
	declare readonly shards: Collection<number, GatewayShard>;

	constructor(client: Client) {
		defineReadonlyProperty(this, 'client', client);
		defineReadonlyProperty(this, 'shards', new Collection());
	}

	static GATEWAY_URL_BASE = 'wss://gateway.discord.gg' as const;
	static GATEWAY_VERSION = 10 as const;

	get averageLatency(): number {
		const { shards } = this;
		const { size: shardsSize } = shards;

		if (shardsSize < 1) {
			return 0;
		}

		const shardsArray = shards.toArray();
		const shardsLatencyAccumulator = shardsArray.reduce((accumulator, { latency }) => accumulator + latency, 0);

		return shardsLatencyAccumulator / shardsSize;
	}

	get shardCount(): number {
		return this.#shardsToSpawn;
	}

	#create(shardId: number): GatewayShard {
		const { shards } = this;
		const shard = new GatewayShard(shardId, this);

		shard.connect();
		shards.set(shardId, shard);

		return shard;
	}

	#shouldTriggerReady(): boolean {
		const { shards } = this;
		const { size: shardsSize } = shards;

		const shardsArray = shards.toArray();
		const shardsToSpawn = this.#shardsToSpawn;

		const shardCountIsCorrect = shardsSize === shardsToSpawn;
		const allShardsAreReady = shardsArray.every(({ status }) => status === GatewayShardStatus.Ready);

		return shardCountIsCorrect && allShardsAreReady;
	}

	protected triggerReady(): void {
		const shouldTriggerReady = this.#shouldTriggerReady();

		if (!shouldTriggerReady) return;

		const { client } = this;
		const { events } = client;

		events.emit(ClientEvents.ClientReady);
	}

	async init(): Promise<void> {
		const { client } = this;
		const { rest } = client;
		const {
			resources: { gateway },
		} = rest;

		const { sessionStartLimit, shards: shardCount, url } = await gateway.getBot();
		const { remaining, total } = sessionStartLimit;

		this.#shardsToSpawn = shardCount;

		client.debug('Gateway Information:', {
			label: 'Gateway Manager',
			pairs: [
				[
					'Gateway URL Base',
					url,
				],
				[
					'Recommended Shards',
					String(shardCount),
				],
			],
		});

		client.debug('Session Start Limit Information:', {
			label: 'Gateway Manager',
			pairs: [
				[
					'Total',
					String(total),
				],
				[
					'Remaining',
					String(remaining),
				],
			],
		});

		for (let shardId = 0; shardId < shardCount; shardId++) {
			this.#create(shardId);
		}
	}
}
