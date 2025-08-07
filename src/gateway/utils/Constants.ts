import { GatewayCloseEventCodes, GatewayOpcodes } from "#types/index.js";

/**
 * The close codes that indicate that the gateway shard can resume.
 * @public
 */
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

/**
 * The opcodes that can be sent to the Discord gateway.
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

/**
 * The suffix of the zlib-compressed payload.
 * @public
 */
/*
 * biome-ignore lint/nursery/noMagicNumbers: These values can be magic
 * numbers.
 */
export const ZLIB_SUFFIX = Buffer.from([0x00, 0x00, 0xff, 0xff]);
