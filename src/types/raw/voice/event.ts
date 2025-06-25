import type { VoiceClientsConnect } from "./events/ClientsConnect.js";
import type { VoiceHeartbeat } from "./events/Heartbeat.js";
import type { VoiceHeartbeatAck } from "./events/HeartbeatAck.js";
import type { VoiceHello } from "./events/Hello.js";
import type { VoiceIdentify } from "./events/Identify.js";
import type { VoiceReady } from "./events/Ready.js";
import type { VoiceResume } from "./events/Resume.js";
import type { VoiceResumed } from "./events/Resumed.js";
import type { VoiceSelectProtocol } from "./events/SelectProtocol.js";
import type { VoiceSessionDescription } from "./events/SessionDescription.js";
import type { VoiceSpeaking } from "./events/Speaking.js";

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
  | VoiceClientsConnect
  | VoiceHeartbeatAck
  | VoiceHello
  | VoiceReady
  | VoiceResumed
  | VoiceSessionDescription;

/**
 * @public
 * @see https://discord.com/developers/docs/topics/voice-connections
 */
export type VoiceSendEvent = VoiceHeartbeat | VoiceIdentify | VoiceResume | VoiceSelectProtocol | VoiceSpeaking;

/**
 * @public
 * @see https://discord.com/developers/docs/topics/opcodes-and-status-codes#voice-voice-close-event-codes
 */
export enum VoiceCloseEventCodes {
  AlreadyAuthenticated = 4005,
  AuthenticationFailed = 4004,
  BadRequest = 4017,
  CallTerminated = 4022,
  Disconnected = 4014,
  FailedToDecodePayload = 4002,
  NotAuthenticated = 4003,
  RateLimited = 4021,
  ServerNotFound = 4011,
  SessionNoLongerValid = 4006,
  SessionTimeout = 4009,
  UnknownEncryptionMode = 4016,
  UnknownOpcode = 4001,
  UnknownProtocol = 4012,
  VoiceServerCrashed = 4015,
}

/**
 * @public
 * @see https://discord.com/developers/docs/topics/opcodes-and-status-codes#voice-voice-opcodes
 */
export enum VoiceOpcodes {
  ClientDisconnect = 12,
  ClientsConnect = 11,
  DaveExecuteTransition = 22,
  DaveMLSAnnounceCommitTransition = 29,
  DaveMLSCommitWelcome = 28,
  DaveMLSExternalSender = 25,
  DaveMLSInvalidCommitWelcome = 31,
  DaveMLSKeyPackage = 26,
  DaveMLSProposals = 27,
  DaveMLSWelcome = 30,
  DavePrepareTransition = 21,
  DavePrepateEpoch = 24,
  DaveTransitionReady = 23,
  Heartbeat = 3,
  HeartbeatAck = 6,
  Hello = 8,
  Identify = 0,
  Ready = 2,
  Resume = 7,
  Resumed = 9,
  SelectProtocol = 1,
  SessionDescription = 4,
  Speaking = 5,
}
