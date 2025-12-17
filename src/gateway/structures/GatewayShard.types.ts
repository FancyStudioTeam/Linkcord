import type { SENDABLE_OPCODES } from "#gateway/utils/Constants.js";
import {
	type GatewayHeartbeatEventPayload,
	type GatewayIdentifyEventPayload,
	GatewayOpcodes,
	type GatewayResumeEventPayload,
} from "#types/index.js";

/**
 * @see https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-opcodes
 *
 * @remarks
 * The {@link GatewayOpcodes.Heartbeat} can be sent by both the client and Discord.
 */
export type ReceivableOpcodes = Exclude<GatewayOpcodes, Exclude<SendableOpcodes, GatewayOpcodes.Heartbeat>>;

/**
 * @see https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-opcodes
 */
export type SendableOpcodes = (typeof SENDABLE_OPCODES)[number];

export type SendableOpcodesMap = {
	[GatewayOpcodes.Heartbeat]: GatewayHeartbeatEventPayload;
	[GatewayOpcodes.Identify]: GatewayIdentifyEventPayload;
	[GatewayOpcodes.PresenceUpdate]: never;
	[GatewayOpcodes.Resume]: GatewayResumeEventPayload;
	[GatewayOpcodes.RequestGuildMembers]: never;
	[GatewayOpcodes.RequestSoundboardSounds]: never;
	[GatewayOpcodes.VoiceStateUpdate]: never;
};

export enum GatewayShardStatus {
	Disconnected = "DISCONNECTED",
	Handshaking = "HANDSHAKING",
	Initializing = "INITIALIZING",
	Identifying = "IDENTIFYING",
	Ready = "READY",
	Resuming = "RESUMING",
}
