import type { Client } from "#client/Client.js";
import type { GatewayShard } from "#gateway/structures/GatewayShard.js";
import type { GatewayDispatch } from "#types/index.js";
import { READY } from "./READY.js";

/**
 * biome-ignore-start lint/style/useNamingConvention: Keys must be exactly the
 * same as the dispatch event name.
 */
export const DispatchHooks: Partial<DispatchHooksMap> = {
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
