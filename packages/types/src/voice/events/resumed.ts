import type { VoiceOpcodes } from "#voice";
import type { VoiceEventBase } from "../base/event.js";

/**
 * @public
 * @see https://discord.com/developers/docs/topics/voice-connections#resuming-voice-connection-example-resumed-payload
 */
export type VoiceResumedEvent = VoiceEventBase<VoiceOpcodes.Resumed, VoiceResumedPayload>;

/**
 * @public
 * @see https://discord.com/developers/docs/topics/voice-connections#resuming-voice-connection-example-resumed-payload
 */
export type VoiceResumedPayload = null;
