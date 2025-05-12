import type {
  VoiceHeartbeatEvent,
  VoiceHelloEvent,
  VoiceIdentifyEvent,
  VoiceSelectProtocolEvent,
  VoiceSpeakingEvent,
} from "./events/index.js";

/**
 * @public
 * @see https://discord.com/developers/docs/topics/voice-connections
 */
export type VoiceEvent = VoiceReceiveEvent | VoiceSendEvent;

/**
 * @public
 * @see https://discord.com/developers/docs/topics/voice-connections
 */
export type VoiceReceiveEvent = VoiceHelloEvent;

/**
 * @public
 * @see https://discord.com/developers/docs/topics/voice-connections
 */
export type VoiceSendEvent = VoiceHeartbeatEvent | VoiceIdentifyEvent | VoiceSelectProtocolEvent | VoiceSpeakingEvent;
