import type { Snowflake } from "#shared";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../dispatch.js";

/**
 * @see https://discord.com/developers/docs/events/gateway-events#message-poll-vote-remove
 */
export interface GatewayDispatchMessagePollVoteRemoveEvent
  extends GatewayDispatchEventBase<
    GatewayDispatchEvents.MessagePollVoteRemove,
    GatewayDispatchMessagePollVoteRemoveEventData
  > {}

/**
 * @see https://discord.com/developers/docs/events/gateway-events#message-poll-vote-remove-message-poll-vote-remove-fields
 */
export interface GatewayDispatchMessagePollVoteRemoveEventData {
  answer_id: number;
  channel_id: Snowflake;
  guild_id?: Snowflake;
  message_id: Snowflake;
  user_id: Snowflake;
}
