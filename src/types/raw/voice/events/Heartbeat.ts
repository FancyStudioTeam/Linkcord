import type { VoiceEventBase } from "../base/event.js";
import type { VoiceOpcodes } from "../event.js";

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
export type VoiceHeartbeat = VoiceEventBase<VoiceOpcodes.Heartbeat, VoiceHeartbeatPayload>;
