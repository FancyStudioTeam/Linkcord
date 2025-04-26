import type { If } from "#types/shared";
import type { GatewayDispatchEvents, GatewayOpcodes } from "../event.js";

/**
 * @internal
 */
export interface GatewayDispatchEventBase<Event extends GatewayDispatchEvents, Data>
  extends GatewayEventBase<GatewayOpcodes.Dispatch, Data> {
  t: Event;
}

/**
 *@internal
 */
export interface GatewayEventBase<Opcode extends GatewayOpcodes, Data> {
  d: Data;
  op: Opcode;
  s: If<IsDispatchEvent<Opcode>, number, null>;
  t: If<IsDispatchEvent<Opcode>, GatewayDispatchEvents, null>;
}

/**
 * @internal
 */
type IsDispatchEvent<Opcode extends GatewayOpcodes> = Opcode extends GatewayOpcodes.Dispatch ? true : false;
