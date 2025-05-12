import type { VoiceOpcodes } from "#voice";
import type { VoiceEventBase } from "../base/event.js";

/**
 * @public
 * @see https://discord.com/developers/docs/topics/voice-connections#heartbeating-example-hello-payload
 */
export interface VoiceHelloPayload {
  heartbeat_interval: number;
}

/**
 * @public
 * @see https://discord.com/developers/docs/topics/voice-connections#heartbeating-example-hello-payload
 */
export type VoiceHelloEvent = VoiceEventBase<VoiceOpcodes.Hello, VoiceHelloPayload>;
