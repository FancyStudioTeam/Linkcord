/**
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

/**
 * @see https://discord.com/developers/docs/topics/opcodes-and-status-codes#voice-voice-close-event-codes
 */
export enum VoiceCloseEventCodes {
  AlreadyAuthenticated = 4005,
  AuthenticationFailed = 4004,
  BadRequest = 4017,
  Disconnect = 4014,
  FailedToDecodePayload = 4002,
  NotAuthenticated = 4003,
  ServerNotFound = 4011,
  SessionNoLongerValid = 4006,
  SessionTimeout = 4009,
  UnknownEncryptionMode = 4016,
  UnknownOpcode = 4001,
  UnknownProtocol = 4012,
  VoiceServerCrashed = 4015,
}
