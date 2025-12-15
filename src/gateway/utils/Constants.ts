/** biome-ignore-all lint/style/noMagicNumbers: (x) */

import { GatewayCloseEventCodes, GatewayOpcodes } from "#types/index.js";

/** Represents the names of the opcodes. */
export const OPCODE_NAMES: Record<GatewayOpcodes, string> = {
	[GatewayOpcodes.Dispatch]: "Dispatch",
	[GatewayOpcodes.Heartbeat]: "Heartbeat",
	[GatewayOpcodes.HeartbeatAck]: "Heartbeat Ack",
	[GatewayOpcodes.Hello]: "Hello",
	[GatewayOpcodes.Identify]: "Identify",
	[GatewayOpcodes.InvalidSession]: "Invalid Session",
	[GatewayOpcodes.PresenceUpdate]: "Presence Update",
	[GatewayOpcodes.Reconnect]: "Reconnect",
	[GatewayOpcodes.RequestGuildMembers]: "Request Guild Members",
	[GatewayOpcodes.RequestSoundboardSounds]: "Request Soundboard Sounds",
	[GatewayOpcodes.Resume]: "Resume",
	[GatewayOpcodes.VoiceStateUpdate]: "Voice State Update",
};

/** The close event codes that indicate that the gateway shard session can be resumed. */
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

/** The opcodes that can be sent to the Discord gateway. */
export const SENDABLE_OPCODES = [
	GatewayOpcodes.Heartbeat,
	GatewayOpcodes.Identify,
	GatewayOpcodes.PresenceUpdate,
	GatewayOpcodes.Resume,
	GatewayOpcodes.RequestGuildMembers,
	GatewayOpcodes.RequestSoundboardSounds,
	GatewayOpcodes.VoiceStateUpdate,
] as const;

/** The suffix of the zlib-compressed packet. */
export const ZLIB_SUFFIX = Buffer.from([
	0x00,
	0x00,
	0xff,
	0xff,
]);
