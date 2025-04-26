import type { GatewayDispatchEvents } from "#types/gateway";
import type { GatewayDispatchEventBase } from "#types/gateway/base/event";
import type { Snowflake } from "#types/shared";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#message-poll-vote-add
 */
export interface GatewayDispatchMessagePollVoteAddEvent
  extends GatewayDispatchEventBase<
    GatewayDispatchEvents.MessagePollVoteAdd,
    GatewayDispatchMessagePollVoteAddEventData
  > {}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#message-poll-vote-add-message-poll-vote-add-fields
 */
export interface GatewayDispatchMessagePollVoteAddEventData {
  answer_id: number;
  channel_id: Snowflake;
  guild_id?: Snowflake;
  message_id: Snowflake;
  user_id: Snowflake;
}
