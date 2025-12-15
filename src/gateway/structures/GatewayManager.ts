import { type Client, ClientEvents } from "#client/index.js";
import { GatewayShardStatus } from "#gateway/types/index.js";
import { defineImmutableProperty } from "#utils/functions/defineImmutableProperty.js";
import { GatewayShard } from "./GatewayShard.js";

export class GatewayManager {
	#shardsToSpawn = 0;

	declare readonly client: Client;
	declare readonly shards: Map<number, GatewayShard>;

	constructor(client: Client) {
		defineImmutableProperty(this, "client", client);
		defineImmutableProperty(this, "shards", new Map());
	}

	static GATEWAY_URL_BASE = "wss://gateway.discord.gg" as const;
	static GATEWAY_VERSION = 10 as const;

	get shardCount(): Readonly<number> {
		return this.#shardsToSpawn;
	}

	#create(shardId: number): GatewayShard {
		const { shards } = this;
		const shard = new GatewayShard(shardId, this);

		shard.init();
		shards.set(shardId, shard);

		return shard;
	}

	#shouldTriggerReady(): boolean {
		const shardsToSpawn = this.#shardsToSpawn;

		const { shards } = this;
		const { size: shardsSize } = shards;

		const shardsArray = Array.from(shards.values());

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
		const { gateway } = rest;

		const { sessionStartLimit, shards: shardCount } = await gateway.getGatewayBot();
		const { remaining, total } = sessionStartLimit;

		this.#shardsToSpawn = shardCount;

		client.debug(
			`Fetched Discord gateway information:\n\tShards:   ${shardCount}\n\tSessions: ${remaining}/${total}`,
			{
				label: "Gateway Manager",
			},
		);

		for (let shardId = 0; shardId < shardCount; shardId++) {
			this.#create(shardId);
		}
	}
}
