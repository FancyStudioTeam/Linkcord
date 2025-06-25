import type { Snowflake } from "../../shared/discord.js";
import type { GatewayEventBase } from "../base/event.js";
import type { GatewayOpcodes } from "../event.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#update-voice-state-gateway-voice-state-update-structure
 */
export interface GatewayVoiceStateUpdatePayload {
  channel_id: Snowflake | null;
  guild_id: Snowflake;
  self_deaf: boolean;
  self_mute: boolean;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#update-voice-state
 */
export type GatewayVoiceStateUpdate = GatewayEventBase<GatewayOpcodes.VoiceStateUpdate, GatewayVoiceStateUpdatePayload>;
