import type { Nullable, Snowflake } from "#shared";
import type { GatewayEventBase } from "../base/event.js";
import type { GatewayOpcodes } from "../event.js";

/**
 * @see https://discord.com/developers/docs/events/gateway-events#update-voice-state
 */
export interface GatewayVoiceStateUpdateEvent
  extends GatewayEventBase<GatewayOpcodes.VoiceStateUpdate, GatewayVoiceStateUpdatePayload> {}

/**
 * @see https://discord.com/developers/docs/events/gateway-events#update-voice-state-gateway-voice-state-update-structure
 */
export interface GatewayVoiceStateUpdatePayload {
  /**
   * @remarks
   * - This field may be `null` to disconnect the client from the voice channel.
   */
  channel: Nullable<Snowflake>;
  guild_id: Snowflake;
  self_deaf: boolean;
  self_mute: boolean;
}
