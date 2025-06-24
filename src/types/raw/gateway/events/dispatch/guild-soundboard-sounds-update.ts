import type { APISoundboardSound } from "../../../payloads/soundboard.js";
import type { Snowflake } from "../../../shared/discord.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../dispatch.js";

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
