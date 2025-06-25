import type { Snowflake } from "#types/raw/shared/discord.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../Dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#message-poll-vote-add-message-poll-vote-add-fields
 */
export interface GatewayDispatchMessagePollVoteAddPayload {
  answer_id: number;
  channel_id: Snowflake;
  guild_id?: Snowflake;
  message_id: Snowflake;
  user_id: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#message-poll-vote-add
 */
export type GatewayDispatchMessagePollVoteAdd = GatewayDispatchEventBase<
  GatewayDispatchEvents.MessagePollVoteAdd,
  GatewayDispatchMessagePollVoteAddPayload
>;
