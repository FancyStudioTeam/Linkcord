import type { If } from "../../shared/custom.js";
import type { GatewayOpcodes } from "../event.js";
import type { GatewayDispatchEvents } from "../events/dispatch.js";

/**
 * @public
 */
export interface GatewayDispatchEventBase<Event extends GatewayDispatchEvents, Data>
  extends GatewayEventBase<GatewayOpcodes.Dispatch, Data> {
  t: Event;
}

/**
 * @public
 */
export interface GatewayEventBase<Opcode extends GatewayOpcodes, Data> {
  d: Data;
  op: Opcode;
  s: If<IsDispatchEvent<Opcode>, number, null>;
  t: If<IsDispatchEvent<Opcode>, GatewayDispatchEvents, null>;
}

/**
 * @public
 */
export type IsDispatchEvent<Opcode extends GatewayOpcodes> = Opcode extends GatewayOpcodes.Dispatch ? true : false;
