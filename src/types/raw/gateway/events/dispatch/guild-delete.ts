import type { APIUnavailableGuild } from "../../../payloads/guild.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-delete
 */
export interface GatewayDispatchGuildDeletePayload extends Omit<APIUnavailableGuild, "unavailable"> {
  unavailable?: boolean;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-delete
 */
export type GatewayDispatchGuildDelete = GatewayDispatchEventBase<
  GatewayDispatchEvents.GuildDelete,
  GatewayDispatchGuildDeletePayload
>;
