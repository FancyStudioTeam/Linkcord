import { GatewayOpcodes } from "#types/index.js";

/**
 * @public
 */
export const GATEWAY_VERSION = 10;

/**
 * @public
 */
export const SENDABLE_OPCODES = [
  GatewayOpcodes.Heartbeat,
  GatewayOpcodes.Identify,
  GatewayOpcodes.PresenceUpdate,
  GatewayOpcodes.Resume,
  GatewayOpcodes.RequestGuildMembers,
  GatewayOpcodes.RequestSoundboardSounds,
  GatewayOpcodes.VoiceStateUpdate,
] as const;
