import type { GatewayDispatchEvents } from "#types/gateway";
import type { GatewayDispatchEventBase } from "#types/gateway/base/event";
import type { Snowflake } from "#types/shared";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#message-poll-vote-remove
 */
export interface GatewayDispatchMessagePollVoteRemoveEvent
  extends GatewayDispatchEventBase<
    GatewayDispatchEvents.MessagePollVoteRemove,
    GatewayDispatchMessagePollVoteRemoveEventData
  > {}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#message-poll-vote-remove-message-poll-vote-remove-fields
 */
export interface GatewayDispatchMessagePollVoteRemoveEventData {
  answer_id: number;
  channel_id: Snowflake;
  guild_id?: Snowflake;
  message_id: Snowflake;
  user_id: Snowflake;
}
