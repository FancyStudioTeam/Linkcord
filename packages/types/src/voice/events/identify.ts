import type { Snowflake } from "#shared";
import type { VoiceOpcodes } from "#voice";
import type { VoiceEventBase } from "../base/index.js";

/**
 * @public
 * @see https://discord.com/developers/docs/topics/voice-connections#establishing-a-voice-websocket-connection-example-voice-identify-payload
 */
export interface VoiceIdentifyPayload {
  max_dave_protocol_version?: number;
  server_id: Snowflake;
  session: string;
  token: string;
  user_id: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/topics/voice-connections#establishing-a-voice-websocket-connection-example-voice-identify-payload
 */
export type VoiceIdentifyEvent = VoiceEventBase<VoiceOpcodes.Identify, VoiceIdentifyPayload>;
