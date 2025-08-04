import type { Client } from "#client/index.js";
import type { GatewayShard } from "#gateway/structures/GatewayShard.js";
import type { GatewayDispatch } from "#types/index.js";
import {
	GUILD_CREATE,
	GUILD_DELETE,
	GUILD_ROLE_CREATE,
	GUILD_ROLE_DELETE,
	GUILD_ROLE_UPDATE,
	GUILD_UPDATE,
} from "./Guilds.js";
import { READY } from "./Shard.js";

/*
 * biome-ignore-start lint/style/useNamingConvention: Keys must be the exact
 * name as the dispatch event names.
 */
export const DispatchHooks: Partial<DispatchHooksMap> = {
	GUILD_CREATE,
	GUILD_DELETE,
	GUILD_ROLE_CREATE,
	GUILD_ROLE_DELETE,
	GUILD_ROLE_UPDATE,
	GUILD_UPDATE,
	READY,
};
/*
 * biome-ignore-end lint/style/useNamingConvention: Keys must be the exact
 * name as the dispatch event names.
 */

/**
 * Represents a function that can be synchronously or asynchronously executed.
 * @internal
 */
type Awaitable<Return> = Promise<Return> | Return;

/**
 * Represents a function that handles a dispatch event.
 * @internal
 */
type DispatchHookFunction<Event extends GatewayDispatch> = (
	client: Client,
	shard: GatewayShard,
	data: Event["d"],
) => Awaitable<void>;

/**
 * Represents a map of dispatch event hooks.
 * @internal
 */
type DispatchHooksMap = {
	[Dispatch in GatewayDispatch as Dispatch["t"]]: DispatchHookFunction<Dispatch>;
};
