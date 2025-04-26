import type { Snowflake } from "#shared";
import type { GatewayEventBase } from "../base/event.js";
import type { GatewayOpcodes } from "../event.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#request-guild-members
 */
export interface GatewayRequestGuildMembersEvent
  extends GatewayEventBase<GatewayOpcodes.RequestGuildMembers, GatewayRequestGuildMembersPayload> {}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#request-guild-members-request-guild-members-structure
 */
export interface GatewayRequestGuildMembersPayload {
  guild_id: Snowflake;
  limit: number;
  nonce?: string;
  presences?: boolean;
  query?: string;
  user_ids: Snowflake[];
}
