/*
 * biome-ignore-all lint/style/useNamingConvention: Keys inside `DispatchHooks`
 * must exactly match Discord dispatch event names.
 */

import type { Client } from "#client/index.js";
import type { GatewayShard } from "#gateway/structures/GatewayShard.js";
import type { GatewayDispatchEvent } from "#types/index.js";
import type { Awaitable } from "#utils/index.js";
import { MESSAGE_CREATE } from "./Messages.js";
import { READY } from "./Shard.js";

export const DispatchHooks: Partial<DispatchHooksMap> = {
	MESSAGE_CREATE,
	READY,
};

type DispatchHookFunction<Event extends GatewayDispatchEvent> = (client: Client, shard: GatewayShard, data: Event["d"]) => Awaitable<void>;

type DispatchHooksMap = {
	[Dispatch in GatewayDispatchEvent as Dispatch["t"]]: DispatchHookFunction<Dispatch>;
};
