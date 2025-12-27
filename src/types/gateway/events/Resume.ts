import type { GatewayOpcodes } from '../enums.js';
import type { GatewayEventBase } from './Base.js';

/**
 * @see https://discord.com/developers/docs/events/gateway-events#resume-resume-structure
 */
export interface GatewayResumeEventPayload {
	seq: number;
	session_id: string;
	token: string;
}

/**
 * @see https://discord.com/developers/docs/events/gateway-events#resume
 */
export type GatewayResumeEvent = GatewayEventBase<GatewayOpcodes.Resume, GatewayResumeEventPayload>;
