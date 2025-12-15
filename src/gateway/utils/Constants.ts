/** biome-ignore-all lint/style/noMagicNumbers: (x) */

import { GatewayCloseEventCodes, GatewayOpcodes } from "#types/index.js";

/**
 * @see https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-close-event-codes
 */
export const RESUMABLE_CLOSE_EVENT_CODES = [
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
 * @see https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-opcodes
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
 * @see https://discord.com/developers/docs/events/gateway#zlibstream
 */
export const Z_SYNC_FLUSH_SUFFIX = Buffer.from([
	0x00,
	0x00,
	0xff,
	0xff,
]);
