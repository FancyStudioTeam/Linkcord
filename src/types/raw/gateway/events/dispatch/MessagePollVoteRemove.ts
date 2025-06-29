import type { Snowflake } from "#types/raw/shared/discord.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../Dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#message-poll-vote-remove-message-poll-vote-remove-fields
 */
export interface GatewayDispatchMessagePollVoteRemovePayload {
    answer_id: number;
    channel_id: Snowflake;
    guild_id?: Snowflake;
    message_id: Snowflake;
    user_id: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#message-poll-vote-remove
 */
export type GatewayDispatchMessagePollVoteRemove = GatewayDispatchEventBase<
    GatewayDispatchEvents.MessagePollVoteRemove,
    GatewayDispatchMessagePollVoteRemovePayload
>;
