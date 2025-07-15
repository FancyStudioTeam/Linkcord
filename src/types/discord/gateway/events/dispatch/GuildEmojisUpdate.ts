import type { APIEmoji } from "#types/discord/payloads/Emojis.js";
import type { Snowflake } from "#types/discord/shared/discord.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../Dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-emojis-update-guild-emojis-update-event-fields
 */
export interface GatewayDispatchGuildEmojisUpdatePayload {
	emojis: APIEmoji[];
	guild_id: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-emojis-update
 */
export type GatewayDispatchGuildEmojisUpdate = GatewayDispatchEventBase<
	GatewayDispatchEvents.GuildEmojisUpdate,
	GatewayDispatchGuildEmojisUpdatePayload
>;
