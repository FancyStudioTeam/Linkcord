import type { APISticker } from "#types/discord/payloads/Stickers.js";
import type { Snowflake } from "#types/discord/shared/discord.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../Dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-stickers-update-guild-stickers-update-event-fields
 */
export interface GatewayDispatchGuildStickersUpdatePayload {
	guild_id: Snowflake;
	stickers: APISticker[];
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-stickers-update
 */
export type GatewayDispatchGuildStickersUpdate = GatewayDispatchEventBase<
	GatewayDispatchEvents.GuildStickersUpdate,
	GatewayDispatchGuildStickersUpdatePayload
>;
