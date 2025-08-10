/*
 * biome-ignore-all lint/correctness/noUnusedPrivateClassMembers: Biome uses
 * "this" to check if these private members are being used, but we are
 * destructuring them from "this".
 */

import type { Client, ClientEventsMap, ClientEventsString } from "#client/index.js";
import { ConfigurationUtils } from "#configuration/utils/ConfigurationUtils.js";
import type { APIManager } from "#rest/structures/APIManager.js";
import { GatewayShard, GatewayShardStatus } from "./GatewayShard.js";

/**
 * The gateway manager for the client.
 * @group Gateway/Structures
 * @public
 */
export class GatewayManager {
	/**
	 * The number of shards to spawn.
	 */
	private __shardsToSpawn__ = 0;

	/**
	 * The client of the gateway manager.
	 */
	readonly client: Client;
	/**
	 * The shards stored in the gateway manager.
	 */
	readonly shards = new Map<number, GatewayShard>();

	/**
	 * Creates a new {@link GatewayManager | `GatewayManager`} instance.
	 * @param client - The client that instantiated the gateway manager.
	 */
	constructor(client: Client) {
		this.client = client;
	}

	/**
	 * The base URL of the Discord gateway.
	 */
	static GATEWAY_URL_BASE = "wss://gateway.discord.gg";

	/**
	 * The version of the Discord gateway.
	 */
	static GATEWAY_VERSION = 10;

	/**
	 * Emits an event with the given event name and data.
	 * @param name - The name of the event to emit.
	 * @param data - The data to emit with the event.
	 * @internal
	 */
	private __emit__<Event extends ClientEventsString>(
		name: Event,
		...data: ClientEventsMap[Event]
	): void {
		const { client } = this;
		const { events } = client;

		events.emit(name, ...data);
	}

	/**
	 * Sends a debug message to the client.
	 * @param message - The message to send.
	 * @internal
	 */
	private __debug__(message: string): void {
		this.__emit__("debug", message);
	}

	/**
	 * Checks whether the gateway manager should trigger the `ready` event.
	 * @returns Whether the gateway manager should trigger the `ready` event.
	 * @internal
	 */
	private __shouldTriggerReady__(): boolean {
		const { __shardsToSpawn__, shards } = this;
		const { size: shardsSize } = shards;
		const shardsArray = [...shards.values()];

		const shardCountIsCorrect = shardsSize === __shardsToSpawn__;
		const allShardsAreReady = shardsArray.every(
			({ status }) => status === GatewayShardStatus.Ready,
		);

		return shardCountIsCorrect && allShardsAreReady;
	}

	/**
	 * Triggers the `ready` event from the main client.
	 * @internal
	 */
	private __triggerReady__(): void {
		const shouldTriggerReady = this.__shouldTriggerReady__();

		if (!shouldTriggerReady) return;

		const { client } = this;
		const { events } = client;

		events.emit("ready");
	}

	/**
	 * Gets the API manager of the REST manager.
	 * @internal
	 */
	private get __api__(): APIManager {
		const { client } = this;
		const { rest } = client;
		const { api } = rest;

		return api;
	}

	/**
	 * The intents of the client.
	 */
	get intents(): Readonly<number> {
		return ConfigurationUtils.getIntents();
	}

	/**
	 * The token of the client.
	 */
	get token(): Readonly<string> {
		return ConfigurationUtils.getToken();
	}

	/**
	 * Initializes the gateway manager.
	 */
	async init(): Promise<void> {
		const { __api__, shards } = this;
		const { sessionStartLimit, shards: shardCount } = await __api__.getGatewayBot();
		const { remaining, total } = sessionStartLimit;

		this.__shardsToSpawn__ = shardCount;
		this.__debug__(`[GatewayManager] Fetched Discord gateway information.
			Shards:   ${shardCount}
			Sessions: ${remaining}/${total}
		`);

		for (let shardId = 0; shardId < shardCount; shardId++) {
			const shard = new GatewayShard(shardId, this);

			shard.init();
			shards.set(shardId, shard);
		}
	}
}
