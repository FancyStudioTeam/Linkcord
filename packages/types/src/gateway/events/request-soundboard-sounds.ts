import type { Snowflake } from "#shared";
import type { GatewayEventBase } from "../base/event.js";
import type { GatewayOpcodes } from "../event.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#request-soundboard-sounds-request-soundboard-sounds-structure
 */
export interface GatewayRequestSoundboardSoundsPayload {
  guild_ids: Snowflake[];
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#request-soundboard-sounds
 */
export type GatewayRequestSoundboardSoundsEvent = GatewayEventBase<
  GatewayOpcodes.RequestSoundboardSounds,
  GatewayRequestSoundboardSoundsPayload
>;
