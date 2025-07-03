import type { Snowflake } from "../../shared/discord.js";
import type { VoiceEventBase } from "../base/event.js";
import type { VoiceOpcodes } from "../event.js";

/**
 * @public
 * @see https://discord.com/developers/docs/topics/voice-connections#establishing-a-voice-websocket-connection-example-voice-identify-payload
 */
export interface VoiceIdentifyPayload {
	max_dave_protocol_version?: number;
	server_id: Snowflake;
	session_id: string;
	token: string;
	user_id: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/topics/voice-connections#establishing-a-voice-websocket-connection-example-voice-identify-payload
 */
export type VoiceIdentify = VoiceEventBase<VoiceOpcodes.Identify, VoiceIdentifyPayload>;
