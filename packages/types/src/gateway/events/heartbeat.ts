import type { Nullable } from "../../shared/custom.js";
import type { GatewayEventBase } from "../base/event.js";
import type { GatewayOpcodes } from "../event.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#heartbeat-example-heartbeat
 * @remarks
 * - This field value may be `null` if the sequence number was not received yet.
 */
export type GatewayHeartbeatPayload = Nullable<number>;

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#heartbeat
 */
export type GatewayHeartbeatEvent = GatewayEventBase<GatewayOpcodes.Heartbeat, GatewayHeartbeatPayload>;
