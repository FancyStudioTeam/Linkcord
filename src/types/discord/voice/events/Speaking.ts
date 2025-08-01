import type { VoiceEventBase } from "../base/event.js";
import type { VoiceOpcodes } from "../event.js";

/**
 * @public
 * @see https://discord.com/developers/docs/topics/voice-connections#speaking-example-speaking-payload
 */
export interface VoiceSpeakingPayload {
	delay: number;
	speaking: number;
	ssrc: number;
}

/**
 * @public
 * @see https://discord.com/developers/docs/topics/voice-connections#speaking-example-speaking-payload
 */
export type VoiceSpeaking = VoiceEventBase<VoiceOpcodes.Speaking, VoiceSpeakingPayload>;

/**
 * @public
 * @see https://discord.com/developers/docs/topics/voice-connections#speaking
 */
export enum SpeakingFlags {
	Microphone = 1 << 0,
	Priority = 1 << 2,
	Soundshare = 1 << 1,
}
