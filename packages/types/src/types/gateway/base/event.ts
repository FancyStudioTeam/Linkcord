import type { If } from "#types/shared";
import type { GatewayDispatchEvents, GatewayOpcodes } from "../event.js";

/**
 * https://discord.com/developers/docs/events/gateway-events#payload-structure
 */
export interface GatewayDispatchEventBase<Event extends GatewayDispatchEvents, Data>
  extends GatewayEventBase<GatewayOpcodes.Dispatch, Data> {
  t: Event;
}

/**
 * https://discord.com/developers/docs/events/gateway-events#payload-structure
 */
export interface GatewayEventBase<Opcode extends GatewayOpcodes, Data> {
  d: Data;
  op: Opcode;
  s: If<IsDispatchEvent<Opcode>, number, null>;
  t: If<IsDispatchEvent<Opcode>, GatewayDispatchEvents, null>;
}

type IsDispatchEvent<Opcode extends GatewayOpcodes> = Opcode extends GatewayOpcodes.Dispatch ? true : false;
