import type { APIUnavailableGuild } from "#payloads";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-delete
 */
export interface GatewayDispatchGuildDeleteEvent
  extends GatewayDispatchEventBase<GatewayDispatchEvents.GuildDelete, GatewayDispatchGuildDeleteEventData> {}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-delete
 */
export interface GatewayDispatchGuildDeleteEventData extends Omit<APIUnavailableGuild, "unavailable"> {
  unavailable?: boolean;
}
