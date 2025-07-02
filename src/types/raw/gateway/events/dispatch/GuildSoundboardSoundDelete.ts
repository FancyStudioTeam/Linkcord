import type { Snowflake } from "#types/raw/shared/discord.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../Dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-soundboard-sound-delete
 */
export interface GatewayDispatchGuildSoundboardSoundDeletePayload {
	guild_id: Snowflake;
	sound_id: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-soundboard-sound-delete
 */
export type GatewayDispatchGuildSoundboardSoundDelete = GatewayDispatchEventBase<
	GatewayDispatchEvents.GuildSoundboardSoundDelete,
	GatewayDispatchGuildSoundboardSoundDeletePayload
>;
