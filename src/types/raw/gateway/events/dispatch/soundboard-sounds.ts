import type { APISoundboardSound } from "../../../payloads/soundboard.js";
import type { Snowflake } from "../../../shared/discord.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#soundboard-sounds-soundboard-sounds-event-fields
 */
export interface GatewayDispatchSoundboardSoundsPayload {
  guild_id: Snowflake;
  soundboard_sounds: APISoundboardSound[];
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#soundboard-sounds
 */
export type GatewayDispatchSoundboardSounds = GatewayDispatchEventBase<
  GatewayDispatchEvents.SoundboardSounds,
  GatewayDispatchSoundboardSoundsPayload
>;
