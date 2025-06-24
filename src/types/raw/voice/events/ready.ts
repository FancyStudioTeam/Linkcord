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
  modes: VoiceEncryptionModes[];
  port: number;
  ssrc: number;
}

/**
 * @public
 * @see https://discord.com/developers/docs/topics/voice-connections#establishing-a-voice-websocket-connection-example-voice-ready-payload
 */
export type VoiceReady = VoiceEventBase<VoiceOpcodes.Ready, VoiceReadyPayload>;

/**
 * @public
 * @see https://discord.com/developers/docs/topics/voice-connections#transport-encryption-modes
 */
export enum VoiceEncryptionModes {
  /**
   * @remarks
   * - This enum is currently deprecated by Discord.
   */
  AEADAes256GCM = "aead_aes256_gcm",
  AEADAes256GCMRTPSize = "aead_aes256_gcm_rtpsize",
  AEADXChaCha20Poly1305RTPSize = "aead_xchacha20_poly1305_rtpsize",
  /**
   * @remarks
   * - This enum is currently deprecated by Discord.
   */
  XSalsa20Poly1305 = "xsalsa20_poly1305",
  /**
   * @remarks
   * - This enum is currently deprecated by Discord.
   */
  XSalsa20Poly1305Lite = "xsalsa20_poly1305_lite",
  /**
   * @remarks
   * - This mode is currently deprecated by Discord.
   */
  XSalsa20Poly1305LiteRTPSize = "xsalsa20_poly1305_lite_rtpsize",
  /**
   * @remarks
   * - This enum is currently deprecated by Discord.
   */
  XSalsa20Poly1305Suffix = "xsalsa20_poly1305_suffix",
}
