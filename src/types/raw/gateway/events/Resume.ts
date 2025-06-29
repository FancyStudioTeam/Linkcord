import type { GatewayEventBase } from "../base/event.js";
import type { GatewayOpcodes } from "../event.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#resume-resume-structure
 */
export interface GatewayResumePayload {
    seq: number;
    session_id: string;
    token: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#resume
 */
export type GatewayResume = GatewayEventBase<GatewayOpcodes.Resume, GatewayResumePayload>;
