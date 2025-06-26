import type { VoiceEventBase } from "../base/event.js";
import type { VoiceOpcodes } from "../event.js";

/**
 * @public
 * @see https://discord.com/developers/docs/topics/voice-connections#transport-encryption-modes-example-session-description-payload
 */
export interface VoiceSessionDescriptionPayload {
  secret_key: number[];
  mode: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/topics/voice-connections#transport-encryption-modes-example-session-description-payload
 */
export type VoiceSessionDescription = VoiceEventBase<
  VoiceOpcodes.SessionDescription,
  VoiceSessionDescriptionPayload
>;
