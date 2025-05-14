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
export type VoiceReadyEvent = VoiceEventBase<VoiceOpcodes.Ready, VoiceReadyPayload>;
