import type { VoiceOpcodes } from "#voice";
import type { VoiceEventBase } from "../base/index.js";

/**
 * @public
 * @see https://discord.com/developers/docs/topics/voice-connections#speaking-example-speaking-payload
 */
export interface VoiceSpeakingPayload {
  /**
   * @remarks
   * - This field value should be set to `0` for bots that are using the voice
   *   gateway.
   */
  delay: number;
  speaking: number;
  ssrc: number;
}

/**
 * @public
 * @see https://discord.com/developers/docs/topics/voice-connections#speaking-example-speaking-payload
 */
export type VoiceSpeakingEvent = VoiceEventBase<VoiceOpcodes.Speaking, VoiceSpeakingPayload>;
