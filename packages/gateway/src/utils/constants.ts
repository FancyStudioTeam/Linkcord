import { GatewayCloseEventCodes, GatewayOpcodes } from "@fancystudioteam/linkcord-types";

/**
 * @public
 */
export const RECONNECTABLE_CLOSE_CODES = [
  GatewayCloseEventCodes.UnknownError,
  GatewayCloseEventCodes.UnknownOpcode,
  GatewayCloseEventCodes.DecodeError,
  GatewayCloseEventCodes.NotAuthenticated,
  GatewayCloseEventCodes.AlreadyAuthenticated,
  GatewayCloseEventCodes.InvalidSequence,
  GatewayCloseEventCodes.RateLimited,
  GatewayCloseEventCodes.SessionTimedOut,
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
  GatewayOpcodes.VoiceStateUpdate,
  GatewayOpcodes.Resume,
] as const;

/**
 * @public
 */
export type ReconnectableCloseCodes = (typeof RECONNECTABLE_CLOSE_CODES)[number];

/**
 * @public
 */
export type SendableOpcodes = (typeof SENDABLE_OPCODES)[number];
