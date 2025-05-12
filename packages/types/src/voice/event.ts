import type {
  VoiceHeartbeatAckEvent,
  VoiceHeartbeatEvent,
  VoiceHelloEvent,
  VoiceIdentifyEvent,
  VoiceReadyEvent,
  VoiceResumeEvent,
  VoiceSelectProtocolEvent,
  VoiceSessionDescriptionEvent,
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
export type VoiceReceiveEvent =
  | VoiceHeartbeatAckEvent
  | VoiceHelloEvent
  | VoiceReadyEvent
  | VoiceSessionDescriptionEvent;

/**
 * @public
 * @see https://discord.com/developers/docs/topics/voice-connections
 */
export type VoiceSendEvent =
  | VoiceHeartbeatEvent
  | VoiceIdentifyEvent
  | VoiceResumeEvent
  | VoiceSelectProtocolEvent
  | VoiceSpeakingEvent;
