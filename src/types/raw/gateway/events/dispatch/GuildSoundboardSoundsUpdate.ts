import type { APISoundboardSound } from "#types/raw/payloads/Soundboards.js";
import type { Snowflake } from "#types/raw/shared/discord.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../Dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-soundboard-sounds-update-guild-soundboard-sounds-update-event-fields
 */
export interface GatewayDispatchGuildSoundboardSoundsUpdatePayload {
  guild_id: Snowflake;
  soundboard_sounds: APISoundboardSound[];
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-soundboard-sounds-update
 */
export type GatewayDispatchGuildSoundboardSoundsUpdate = GatewayDispatchEventBase<
  GatewayDispatchEvents.GuildSoundboardSoundsUpdate,
  GatewayDispatchGuildSoundboardSoundsUpdatePayload
>;
