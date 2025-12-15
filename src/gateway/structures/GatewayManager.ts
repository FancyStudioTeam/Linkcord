import dedent from "string-dedent";
import { type Client, ClientEvents } from "#client/index.js";
import { defineImmutableProperty } from "#utils/functions/defineImmutableProperty.js";
import { Collection } from "#utils/index.js";
import { GatewayShard } from "./GatewayShard.js";
import { GatewayShardStatus } from "./GatewayShard.types.js";

export class GatewayManager {
	#shardsToSpawn = 0;

	declare readonly client: Client;
	declare readonly shards: Collection<number, GatewayShard>;

	constructor(client: Client) {
		defineImmutableProperty(this, "client", client);
		defineImmutableProperty(this, "shards", new Collection());
	}

	static GATEWAY_URL_BASE = "wss://gateway.discord.gg" as const;
	static GATEWAY_VERSION = 10 as const;

	get shardCount(): number {
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
		const { gateway } = rest;

		const { sessionStartLimit, shards: shardCount, url } = await gateway.getGatewayBot();
		const { remaining, total } = sessionStartLimit;

		this.#shardsToSpawn = shardCount;

		const gatewayInformation = dedent`
			Gateway Information:
				Gateway URL:        ${url}
				Recommended Shards: ${shardCount}
		`;
		const sessionStartLimitInformation = dedent`
			Session Start Limit Information:
				Total:     ${total}
				Remaining: ${remaining}
		`;

		client.debug(gatewayInformation, {
			label: "Gateway Manager",
		});
		client.debug(sessionStartLimitInformation, {
			label: "Gateway Manager",
		});

		for (let shardId = 0; shardId < shardCount; shardId++) {
			this.#create(shardId);
		}
	}
}
