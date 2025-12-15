/** biome-ignore-all lint/style/noMagicNumbers: (x) */

import { GatewayCloseEventCodes, GatewayOpcodes } from "#types/index.js";

export const RESUMABLE_CLOSE_CODES = [
	GatewayCloseEventCodes.AlreadyAuthenticated,
	GatewayCloseEventCodes.DecodeError,
	GatewayCloseEventCodes.InvalidSequence,
	GatewayCloseEventCodes.NotAuthenticated,
	GatewayCloseEventCodes.RateLimited,
	GatewayCloseEventCodes.SessionTimedOut,
	GatewayCloseEventCodes.UnknownError,
	GatewayCloseEventCodes.UnknownOpcode,
] as const;

export const SENDABLE_OPCODES = [
	GatewayOpcodes.Heartbeat,
	GatewayOpcodes.Identify,
	GatewayOpcodes.PresenceUpdate,
	GatewayOpcodes.Resume,
	GatewayOpcodes.RequestGuildMembers,
	GatewayOpcodes.RequestSoundboardSounds,
	GatewayOpcodes.VoiceStateUpdate,
] as const;

export const ZLIB_SUFFIX = Buffer.from([
	0x00,
	0x00,
	0xff,
	0xff,
]);
