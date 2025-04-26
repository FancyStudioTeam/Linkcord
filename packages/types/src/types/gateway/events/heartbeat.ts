import type { Nullable } from "#types/shared";
import type { GatewayEventBase } from "../base/event.js";
import type { GatewayOpcodes } from "../event.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#heartbeat
 */
export interface GatewayHeartbeatEvent extends GatewayEventBase<GatewayOpcodes.Heartbeat, GatewayHeartbeatPayload> {}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#heartbeat-example-heartbeat
 * @remarks
 * - This may be `null` when the sequence number was not received yet.
 */
export type GatewayHeartbeatPayload = Nullable<number>;
