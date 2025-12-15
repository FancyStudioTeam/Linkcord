import type { SENDABLE_OPCODES } from "#gateway/utils/Constants.js";
import {
	type GatewayHeartbeatEventPayload,
	type GatewayIdentifyEventPayload,
	GatewayOpcodes,
	type GatewayResumeEventPayload,
} from "#types/index.js";

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
	Connecting = "CONNECTING",
	Disconnected = "DISCONNECTED",
	Handshaking = "HANDSHAKING",
	Identifying = "IDENTIFYING",
	Ready = "READY",
	Resuming = "RESUMING",
}
