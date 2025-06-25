import type { VoiceEventBase } from "../base/event.js";
import type { VoiceOpcodes } from "../event.js";

/**
 * @public
 * @see https://discord.com/developers/docs/topics/voice-connections#resuming-voice-connection-example-resumed-payload
 */
export type VoiceResumed = VoiceEventBase<VoiceOpcodes.Resumed, VoiceResumedPayload>;

/**
 * @public
 * @see https://discord.com/developers/docs/topics/voice-connections#resuming-voice-connection-example-resumed-payload
 */
export type VoiceResumedPayload = null;
