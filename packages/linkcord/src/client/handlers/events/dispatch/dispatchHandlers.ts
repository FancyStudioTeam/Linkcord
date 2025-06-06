import type { GatewayShard } from "@fancystudioteam/linkcord-gateway";
import { type GatewayDispatch, GatewayDispatchEvents } from "@fancystudioteam/linkcord-types";
import type { Client } from "../../../Client.js";
import { READY } from "./handlers/READY.js";

/**
 * @internal
 */
export const dispatchHandlers: Partial<DispatchHandlers> = {
  [GatewayDispatchEvents.Ready]: READY,
};

/**
 * @internal
 */
export type DispatchHandler<Data> = (client: Client, gatewayShard: GatewayShard, data: Data) => void;

/**
 * @internal
 */
type DispatchHandlers = {
  [Event in GatewayDispatch as Event["t"]]: DispatchHandler<Event["d"]>;
};
