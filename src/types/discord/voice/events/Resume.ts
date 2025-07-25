import type { Snowflake } from "../../shared/discord.js";
import type { VoiceEventBase } from "../base/event.js";
import type { VoiceOpcodes } from "../event.js";

/**
 * @public
 * @see https://discord.com/developers/docs/topics/voice-connections#resuming-voice-connection-example-resume-connection-payload-since-v8
 */
export interface VoiceResumePayload {
	seq_ack: number;
	server_id: Snowflake;
	session_id: string;
	token: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/topics/voice-connections#resuming-voice-connection-example-resume-connection-payload-since-v8
 */
export type VoiceResume = VoiceEventBase<VoiceOpcodes.Resume, VoiceResumePayload>;
