import type { VoiceEventBase } from "../base/event.js";
import type { VoiceOpcodes } from "../event.js";

/**
 * @public
 * @see https://discord.com/developers/docs/topics/voice-connections#heartbeating-example-heartbeat-ack-payload-since-v8
 */
export interface VoiceHeartbeatAckPayload {
    t: number;
}

/**
 * @public
 * @see https://discord.com/developers/docs/topics/voice-connections#heartbeating-example-heartbeat-ack-payload-since-v8
 */
export type VoiceHeartbeatAck = VoiceEventBase<VoiceOpcodes.HeartbeatAck, VoiceHeartbeatAckPayload>;
