import { GatewayCloseEventCodes, GatewayOpcodes } from "@fancystudioteam/linkcord-types";

/**
 * @public
 */
export const RECONNECTABLE_CLOSE_CODES = [
  GatewayCloseEventCodes.AlreadyAuthenticated,
  GatewayCloseEventCodes.DecodeError,
  GatewayCloseEventCodes.InvalidSequence,
  GatewayCloseEventCodes.NotAuthenticated,
  GatewayCloseEventCodes.RateLimited,
  GatewayCloseEventCodes.SessionTimedOut,
  GatewayCloseEventCodes.UnknownError,
  GatewayCloseEventCodes.UnknownOpcode,
] as const;

/**
 * @public
 */
export const SENDABLE_OPCODES = [
  GatewayOpcodes.Heartbeat,
  GatewayOpcodes.Identify,
  GatewayOpcodes.PresenceUpdate,
  GatewayOpcodes.RequestGuildMembers,
  GatewayOpcodes.RequestSoundboardSounds,
  GatewayOpcodes.Resume,
  GatewayOpcodes.VoiceStateUpdate,
] as const;

/**
 * @public
 */
export type ReconnectableCloseCodes = (typeof RECONNECTABLE_CLOSE_CODES)[number];

/**
 * @public
 */
export type SendableOpcodes = (typeof SENDABLE_OPCODES)[number];
