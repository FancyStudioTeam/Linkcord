import { VoiceCloseEventCodes, VoiceOpcodes } from "@fancystudioteam/linkcord-types";

/**
 * @public
 */
export const BINARY_VOICE_OPCODES = [
  VoiceOpcodes.DaveMLSCommitWelcome,
  VoiceOpcodes.DaveMLSExternalSender,
  VoiceOpcodes.DaveMLSKeyPackage,
  VoiceOpcodes.DaveMLSProposals,
  VoiceOpcodes.DaveMLSWelcome,
] as const;

/**
 * @public
 */
export const CHANNELS = 2;

/**
 * @public
 */
export const FRAME_SIZE = 960;

/**
 * @public
 */
export const RECONNECTABLE_VOICE_CLOSE_CODES = [
  VoiceCloseEventCodes.AlreadyAuthenticated,
  VoiceCloseEventCodes.FailedToDecodePayload,
  VoiceCloseEventCodes.NotAuthenticated,
  VoiceCloseEventCodes.UnknownOpcode,
] as const;

/**
 * @public
 */
export const SAMPLE_RATE = 48000;

/**
 * @public
 */
export const SENDABLE_VOICE_OPCODES = [
  VoiceOpcodes.Heartbeat,
  VoiceOpcodes.Identify,
  VoiceOpcodes.Resume,
  VoiceOpcodes.SelectProtocol,
  VoiceOpcodes.Speaking,
] as const;

/**
 * @public
 */
export const VOICE_GATEWAY_VERSION = 4;

/**
 * @public
 */
export type BinaryVoiceOpcodes = (typeof BINARY_VOICE_OPCODES)[number];

/**
 * @public
 */
export type ReconnectableVoiceCloseCodes = (typeof RECONNECTABLE_VOICE_CLOSE_CODES)[number];

/**
 * @public
 */
export type SendableVoiceOpcodes = (typeof SENDABLE_VOICE_OPCODES)[number];
