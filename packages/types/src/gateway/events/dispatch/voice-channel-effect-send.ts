import type { APIEmoji } from "#payloads";
import type { Nullable, Snowflake } from "#shared";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../../event.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#voice-channel-effect-send
 */
export interface GatewayDispatchVoiceChannelEffectSendEvent
  extends GatewayDispatchEventBase<
    GatewayDispatchEvents.VoiceChannelEffectSend,
    GatewayDispatchVoiceChannelEffectSendEventData
  > {}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#voice-channel-effect-send-voice-channel-effect-send-event-fields
 */
export interface GatewayDispatchVoiceChannelEffectSendEventData {
  animation_id?: number;
  animation_type?: Nullable<AnimationTypes>;
  channel_id: Snowflake;
  emoji?: Nullable<APIEmoji>;
  guild_id: Snowflake;
  sound_id?: number | Snowflake;
  /**
   * @remarks
   * - This field is a double value between `0` and `1`. Example: `0.75`.
   */
  sound_volume?: number;
  user_id: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#voice-channel-effect-send-animation-types
 */
export enum AnimationTypes {
  Basic = 1,
  Premium = 0,
}
