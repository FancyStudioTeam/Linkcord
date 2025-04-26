import type { Snowflake } from "#types/shared";
import type { GatewayEventBase } from "../base/event.js";
import type { GatewayOpcodes } from "../event.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#request-soundboard-sounds
 */
export interface GatewayRequestSoundboardSoundsEvent
  extends GatewayEventBase<GatewayOpcodes.RequestSoundboardSounds, GatewayRequestSoundboardSoundsPayload> {}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#request-soundboard-sounds-request-soundboard-sounds-structure
 */
export interface GatewayRequestSoundboardSoundsPayload {
  guild_ids: Snowflake[];
}
