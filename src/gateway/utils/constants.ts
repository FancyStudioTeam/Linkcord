import { GatewayCloseEventCodes, GatewayOpcodes } from "#types/index.js";

/**
 * @public
 */
export const GATEWAY_URL_BASE = "wss://gateway.discord.gg";

/**
 * @public
 */
export const GATEWAY_VERSION = 10;

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
	GatewayOpcodes.Resume,
	GatewayOpcodes.RequestGuildMembers,
	GatewayOpcodes.RequestSoundboardSounds,
	GatewayOpcodes.VoiceStateUpdate,
] as const;

/**
 * @public
 */
export const ZLIB_SUFFIX = Buffer.from([0x00, 0x00, 0xff, 0xff]);
