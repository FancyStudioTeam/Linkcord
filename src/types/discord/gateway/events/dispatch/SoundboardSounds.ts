import type { APISoundboardSound } from "#types/raw/payloads/Soundboards.js";
import type { Snowflake } from "#types/raw/shared/discord.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../Dispatch.js";

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
