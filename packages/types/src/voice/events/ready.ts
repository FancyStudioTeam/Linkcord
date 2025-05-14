import type { VoiceEventBase } from "../base/event.js";
import type { VoiceOpcodes } from "../event.js";

/**
 * @public
 * @see https://discord.com/developers/docs/topics/voice-connections#establishing-a-voice-websocket-connection-example-voice-ready-payload
 */
export interface VoiceReadyPayload {
  /**
   * @remarks
   * - This field value is incorrect and users should not rely on it.
   */
  heartbeat_interval: number;
  ip: string;
  modes: string[];
  port: number;
  ssrc: number;
}

/**
 * @public
 * @see https://discord.com/developers/docs/topics/voice-connections#establishing-a-voice-websocket-connection-example-voice-ready-payload
 */
export type VoiceEncryptionMode =
  | "aead_aes256_gcm"
  | "aead_aes256_gcm_rtpsize"
  | "aead_xchacha20_poly1305_rtpsize"
  | "xsalsa20_poly1305"
  | "xsalsa20_poly1305_lite"
  | "xsalsa20_poly1305_lite_rtpsize"
  | "xsalsa20_poly1305_suffix";

/**
 * @public
 * @see https://discord.com/developers/docs/topics/voice-connections#establishing-a-voice-websocket-connection-example-voice-ready-payload
 */
export type VoiceReadyEvent = VoiceEventBase<VoiceOpcodes.Ready, VoiceReadyPayload>;
