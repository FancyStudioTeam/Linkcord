import type { Client } from "#client/Client.js";
import type { GatewayShard } from "#gateway/structures/GatewayShard.js";
import type { GatewayDispatch } from "#types/index.js";
import { GUILD_CREATE } from "./GUILD_CREATE.js";
import { GUILD_DELETE } from "./GUILD_DELETE.js";
import { GUILD_ROLE_CREATE } from "./GUILD_ROLE_CREATE.js";
import { GUILD_ROLE_DELETE } from "./GUILD_ROLE_DELETE.js";
import { GUILD_ROLE_UPDATE } from "./GUILD_ROLE_UPDATE.js";
import { GUILD_UPDATE } from "./GUILD_UPDATE.js";
import { READY } from "./READY.js";

/**
 * biome-ignore-start lint/style/useNamingConvention: Keys must be exactly the
 * same as the dispatch event name.
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
/**
 * biome-ignore-end lint/style/useNamingConvention: Keys must be exactly the
 * same as the dispatch event name.
 */

/**
 * @internal
 */
type Awaitable<Return> = Promise<Return> | Return;

/**
 * @internal
 */
type DispatchHookFunction<Dispatch extends GatewayDispatch> = (
    client: Client,
    shard: GatewayShard,
    data: Dispatch["d"],
) => Awaitable<void>;

/**
 * @internal
 */
type DispatchHooksMap = {
    [Dispatch in GatewayDispatch as Dispatch["t"]]: DispatchHookFunction<Dispatch>;
};
