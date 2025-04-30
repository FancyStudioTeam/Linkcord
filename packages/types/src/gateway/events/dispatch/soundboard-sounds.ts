import type { APISoundboardSound } from "#payloads";
import type { Snowflake } from "#shared";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../dispatch.js";

/**
 * @see https://discord.com/developers/docs/events/gateway-events#soundboard-sounds
 */
export interface GatewayDispatchSoundboardSoundsEvent
  extends GatewayDispatchEventBase<GatewayDispatchEvents.SoundboardSounds, GatewayDispatchSoundboardSoundsEventData> {}

/**
 * @see https://discord.com/developers/docs/events/gateway-events#soundboard-sounds-soundboard-sounds-event-fields
 */
export interface GatewayDispatchSoundboardSoundsEventData {
  guild_id: Snowflake;
  soundboard_sounds: APISoundboardSound[];
}
