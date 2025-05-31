import { type GatewayEvent, GatewayOpcodes } from "@fancystudioteam/linkcord-types";
import type { GatewayShard } from "../GatewayShard.js";
import { DISPATCH } from "./events/DISPATCH.js";
import { HELLO } from "./events/HELLO.js";
import { INVALID_SESSION } from "./events/INVALID_SESSION.js";

/**
 * @internal
 */
export const handlers: Partial<Handlers> = {
  [GatewayOpcodes.Dispatch]: DISPATCH,
  [GatewayOpcodes.Hello]: HELLO,
  [GatewayOpcodes.InvalidSession]: INVALID_SESSION,
};

/**
 * @internal
 */
export type Handler<Data> = (gatewayShard: GatewayShard, data: Data) => void;

/**
 * @internal
 */
type Handlers = {
  [Event in GatewayEvent as Event["op"]]: Handler<Event>;
};
