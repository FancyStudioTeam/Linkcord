import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayOpcodes } from "../../event.js";
import type { GatewayDispatchEvents } from "../Dispatch.js";
import type { GatewayRequestGuildMembersPayload } from "../RequestGuildMembers.js";

export interface GatewayDispatchRateLimitedData {
	data: GatewayRequestGuildMembersPayload;
	opcode: GatewayOpcodes.RequestGuildMembers;
	retry_after: number;
}

export type GatewayDispatchRateLimited = GatewayDispatchEventBase<
	GatewayDispatchEvents.RateLimited,
	GatewayDispatchRateLimitedData
>;
