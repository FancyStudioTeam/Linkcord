import type { VoiceOpcodes } from "#voice";
import type { VoiceEventBase } from "../base/index.js";

/**
 * @public
 * @see https://discord.com/developers/docs/topics/voice-connections#heartbeating-example-heartbeat-payload-since-v8
 */
export interface VoiceHeartbeatPayload {
  seq_ack: number;
  t: number;
}

/**
 * @public
 * @see https://discord.com/developers/docs/topics/voice-connections#heartbeating-example-heartbeat-payload-since-v8
 */
export type VoiceHeartbeatEvent = VoiceEventBase<VoiceOpcodes.Heartbeat, VoiceHeartbeatPayload>;
