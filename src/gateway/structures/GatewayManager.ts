/*
 * biome-ignore-all lint/complexity/useLiteralKeys: Allow to use bracket
 * notation when accessing private or protected members from some structures.
 */
/*
 * biome-ignore-all lint/correctness/noUnusedPrivateClassMembers: Biome uses
 * "this" to check if these private members are being used, but we are
 * destructuring them from "this".
 */

import { type Client, ClientEvents } from "#client/index.js";
import type { APIManager } from "#rest/structures/APIManager.js";
import { GatewayShard, GatewayShardStatus } from "./GatewayShard.js";

/**
 * The gateway manager for the client.
 * @group Gateway/Structures
 * @public
 */
export class GatewayManager {
	/** The number of shards to spawn. */
	private __shardsToSpawn__ = 0;

	/** The client of the gateway manager. */
	readonly client: Client;
	/** The shards stored in the gateway manager. */
	readonly shards = new Map<number, GatewayShard>();

	/**
	 * Creates a new {@link GatewayManager | `GatewayManager`} instance.
	 * @param client - The client that instantiated the gateway manager.
	 */
	constructor(client: Client) {
		this.client = client;
	}

	/** The base URL of the Discord gateway. */
	static GATEWAY_URL_BASE = "wss://gateway.discord.gg";

	/** The version of the Discord gateway. */
	static GATEWAY_VERSION = 10;

	/** Gets the API manager from the REST manager. */
	private get __api__(): APIManager {
		const { client } = this;
		const { rest } = client;
		const { api } = rest;

		return api;
	}

	/**
	 * Checks whether the gateway manager should trigger the `Ready` event.
	 * @returns Whether the gateway manager should trigger the `Ready` event.
	 */
	private __shouldTriggerReady__(): boolean {
		const { __shardsToSpawn__: shardsToSpawn, shards } = this;
		const { size: shardsSize } = shards;
		const shardsArray = [...shards.values()];

		const shardCountIsCorrect = shardsSize === shardsToSpawn;
		const allShardsAreReady = shardsArray.every(
			({ status }) => status === GatewayShardStatus.Ready,
		);

		return shardCountIsCorrect && allShardsAreReady;
	}

	/** Triggers the `Ready` event from the client. */
	private __triggerReady__(): void {
		const shouldTriggerReady = this.__shouldTriggerReady__();

		if (!shouldTriggerReady) return;

		const { client } = this;
		const { events } = client;

		events.emit(ClientEvents.Ready);
	}

	/** Spawns the shards of the gateway manager. */
	async init(): Promise<void> {
		const { __api__, client, shards } = this;
		const { sessionStartLimit, shards: shardCount } = await __api__.getGatewayBot();
		const { remaining, total } = sessionStartLimit;

		this.__shardsToSpawn__ = shardCount;

		client["__debug__"](
			"[GatewayManager]",
			`Fetched Discord gateway information:\n\tShards:   ${shardCount}\n\tSessions: ${remaining}/${total}`,
		);

		for (let shardId = 0; shardId < shardCount; shardId++) {
			const shard = new GatewayShard(shardId, this);

			shard.init();
			shards.set(shardId, shard);
		}
	}
}
