import type { APIGuildMember } from "#payloads";
import type { Snowflake } from "#shared";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../../event.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#typing-start
 */
export interface GatewayDispatchTypingStartEvent
  extends GatewayDispatchEventBase<GatewayDispatchEvents.TypingStart, GatewayDispatchTypingStartEventData> {}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#typing-start-typing-start-event-fields
 */
export interface GatewayDispatchTypingStartEventData {
  channel_id: Snowflake;
  guild_id?: Snowflake;
  member?: APIGuildMember;
  timestamp: number;
  user_id: Snowflake;
}
