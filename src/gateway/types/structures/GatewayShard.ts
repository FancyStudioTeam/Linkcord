import type { SENDABLE_OPCODES } from "#gateway/utils/Constants.js";
import {
	type ActivityTypes,
	type GatewayHeartbeatPayload,
	type GatewayIdentifyPayload,
	GatewayOpcodes,
	type GatewayPresenceUpdatePayload,
	type GatewayRequestGuildMembersPayload,
	type GatewayRequestSoundboardSoundsPayload,
	type GatewayResumePayload,
	type GatewayVoiceStateUpdatePayload,
	type StatusTypes,
} from "#types/index.js";

/**
 * The activity to include in the presence.
 * @public
 */
export interface ActivityOptions {
	/** The name of the activity. */
	name: string;
	/** The state of the activity. */
	state?: string;
	/** The type of the activity. */
	type: ActivityTypes;
	/** The URL of the stream associated with the activity. */
	url?: string;
}

/**
 * The presence to send to the Discord gateway.
 * @public
 */
export interface PresenceOptions {
	/** The activities to display in the presence. */
	activities: ActivityOptions[];
	/** Whether the client is afk. */
	afk?: boolean;
	/** The timestamp at which the client went afk. */
	since?: number | null;
	/** The status of the presence. */
	status: StatusTypes;
}

/**
 * Represents the opcodes that can be sent to the Discord gateway.
 * @public
 */
export type SendableOpcodes = (typeof SENDABLE_OPCODES)[number];

/**
 * Represents a map of opcodes that can be sent to the Discord gateway with
 * their respective packets.
 * @internal
 */
export type SendableOpcodesPayloadMap = {
	[GatewayOpcodes.Heartbeat]: GatewayHeartbeatPayload;
	[GatewayOpcodes.Identify]: GatewayIdentifyPayload;
	[GatewayOpcodes.PresenceUpdate]: GatewayPresenceUpdatePayload;
	[GatewayOpcodes.Resume]: GatewayResumePayload;
	[GatewayOpcodes.RequestGuildMembers]: GatewayRequestGuildMembersPayload;
	[GatewayOpcodes.RequestSoundboardSounds]: GatewayRequestSoundboardSoundsPayload;
	[GatewayOpcodes.VoiceStateUpdate]: GatewayVoiceStateUpdatePayload;
};

/**
 * The status of the gateway shard.
 * @public
 */
export enum GatewayShardStatus {
	Connecting = "CONNECTING",
	Disconnected = "DISCONNECTED",
	Handshaking = "HANDSHAKING",
	Identifying = "IDENTIFYING",
	Ready = "READY",
	Resuming = "RESUMING",
}
