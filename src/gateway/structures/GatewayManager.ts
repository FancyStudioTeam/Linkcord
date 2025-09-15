/* biome-ignore-all lint/complexity/useLiteralKeys: Allow to use bracket notation when accessing private or protected members from some structures. */
/* biome-ignore-all lint/correctness/noUnusedPrivateClassMembers: Biome uses "this" to check if these private members are being used, but we are destructuring them from "this". */

import { type Client, ClientEvents } from "#client/index.js";
import { GatewayShardStatus } from "#gateway/types/index.js";
import type { APIManager } from "#rest/structures/APIManager.js";
import { defineImmutableProperty } from "#utils/functions/defineImmutableProperty.js";
import { GatewayShard } from "./GatewayShard.js";

/** The gateway manager for the client. */
export class GatewayManager {
	/** The number of shards to spawn. */
	#shardsToSpawn = 0;

	/** The client of the gateway manager. */
	declare readonly client: Client;
	/** The shards stored in the gateway manager. */
	declare readonly shards: Map<number, GatewayShard>;

	/**
	 * Creates a new {@link GatewayManager | `GatewayManager`} instance.
	 * @param client - The client that instantiated the gateway manager.
	 */
	constructor(client: Client) {
		defineImmutableProperty(this, "client", client);
		defineImmutableProperty(this, "shards", new Map());
	}

	/** The base URL of the Discord gateway. */
	static GATEWAY_URL_BASE = "wss://gateway.discord.gg" as const;

	/** The version of the Discord gateway. */
	static GATEWAY_VERSION = 10 as const;

	/** The API manager from the REST manager. */
	get #api(): APIManager {
		const { client } = this;
		const { rest } = client;
		const { api } = rest;

		return api;
	}

	/** The number of shards of the gateway manager to spawn. */
	get shardCount(): Readonly<number> {
		const shardsToSpawn = this.#shardsToSpawn;

		return shardsToSpawn;
	}

	/**
	 * Creates and initializes an instance of {@link GatewayShard | `GatewayShard`}.
	 * @param shardId - The ID of the {@link GatewayShard | `GatewayShard`} to create.
	 * @returns The created {@link GatewayShard | `GatewayShard`} instance.
	 */
	#create(shardId: number): GatewayShard {
		const { shards } = this;
		const shard = new GatewayShard(shardId, this);

		shard.init();
		shards.set(shardId, shard);

		return shard;
	}

	/** Checks whether the gateway manager should trigger the {@link ClientEvents.ClientReady | `ClientEvents.ClientReady`} event. */
	#shouldTriggerReady(): boolean {
		const shardsToSpawn = this.#shardsToSpawn;

		const { shards } = this;
		const { size: shardsSize } = shards;
		const shardsArray = [...shards.values()];

		const shardCountIsCorrect = shardsSize === shardsToSpawn;
		const allShardsAreReady = shardsArray.every(({ status }) => status === GatewayShardStatus.Ready);

		return shardCountIsCorrect && allShardsAreReady;
	}

	/** Triggers the {@link ClientEvents.ClientReady | `ClientEvents.ClientReady`} event from the client. */
	protected triggerReady(): void {
		const shouldTriggerReady = this.#shouldTriggerReady();

		if (!shouldTriggerReady) return;

		const { client } = this;
		const { events } = client;

		events.emit(ClientEvents.ClientReady);
	}

	/** Spawns the shards of the gateway manager. */
	async init(): Promise<void> {
		const { client } = this;
		const api = this.#api;

		const { sessionStartLimit, shards: shardCount } = await api.getGatewayBot();
		const { remaining, total } = sessionStartLimit;

		this.#shardsToSpawn = shardCount;

		client.debug(
			"[GatewayManager]",
			`Fetched Discord gateway information:\n\tShards:   ${shardCount}\n\tSessions: ${remaining}/${total}`,
		);

		for (let shardId = 0; shardId < shardCount; shardId++) {
			this.#create(shardId);
		}
	}
}
