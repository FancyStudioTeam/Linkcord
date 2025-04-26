import type { GatewayDispatchEvents } from "#types/gateway";
import type { GatewayDispatchEventBase } from "#types/gateway/base/event";
import type { APIGuildMember } from "#types/payloads";
import type { Snowflake } from "#types/shared";

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
