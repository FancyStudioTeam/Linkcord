import type {
  VoiceClientsConnectEvent,
  VoiceHeartbeatAckEvent,
  VoiceHeartbeatEvent,
  VoiceHelloEvent,
  VoiceIdentifyEvent,
  VoiceReadyEvent,
  VoiceResumeEvent,
  VoiceResumedEvent,
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
  | VoiceClientsConnectEvent
  | VoiceHeartbeatAckEvent
  | VoiceHelloEvent
  | VoiceReadyEvent
  | VoiceResumedEvent
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
