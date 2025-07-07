import type { APIGuildMember } from "#types/discord/payloads/Guilds.js";
import type { Snowflake } from "#types/discord/shared/discord.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../Dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#typing-start-typing-start-event-fields
 */
export interface GatewayDispatchTypingStartPayload {
	channel_id: Snowflake;
	guild_id?: Snowflake;
	member?: APIGuildMember;
	timestamp: number;
	user_id: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#typing-start
 */
export type GatewayDispatchTypingStart = GatewayDispatchEventBase<
	GatewayDispatchEvents.TypingStart,
	GatewayDispatchTypingStartPayload
>;
