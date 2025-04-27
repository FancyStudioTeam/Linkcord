import type { GatewayEventBase } from "../base/event.js";
import type { GatewayOpcodes } from "../event.js";

/**
 * @see https://discord.com/developers/docs/events/gateway-events#resume
 */
export interface GatewayResumeEvent extends GatewayEventBase<GatewayOpcodes.Resume, GatewayResumePayload> {}

/**
 * @see https://discord.com/developers/docs/events/gateway-events#resume-resume-structure
 */
export interface GatewayResumePayload {
  seq: number;
  session_id: string;
  token: string;
}
