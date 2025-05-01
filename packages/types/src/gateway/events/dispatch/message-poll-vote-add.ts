import type { Snowflake } from "#shared";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../dispatch.js";

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
