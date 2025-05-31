import type { GatewayShard } from "@fancystudioteam/linkcord-gateway";
import { type GatewayEvent, GatewayOpcodes } from "@fancystudioteam/linkcord-types";
import type { Client } from "../Client.js";
import { DISPATCH } from "./events/DISPATCH.js";

/**
 * @internal
 */
export const handlers: Partial<Handlers> = {
  [GatewayOpcodes.Dispatch]: DISPATCH,
};

/**
 * @internal
 */
export type Handler<Data> = (client: Client, gatewayShard: GatewayShard, data: Data) => void;

/**
 * @internal
 */
type Handlers = {
  [Event in GatewayEvent as Event["op"]]: Handler<Event>;
};
