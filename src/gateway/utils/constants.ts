import { GatewayOpcodes } from "#types/index.js";

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
