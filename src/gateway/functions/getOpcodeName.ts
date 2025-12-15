import { GatewayOpcodes } from "#types/index.js";

const OPCODE_NAMES: Record<GatewayOpcodes, string> = {
	[GatewayOpcodes.Dispatch]: "Dispatch",
	[GatewayOpcodes.Heartbeat]: "Heartbeat",
	[GatewayOpcodes.HeartbeatAck]: "Heartbeat Acknowledge",
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

export function getOpcodeName<Opcode extends GatewayOpcodes>(opcode: Opcode): (typeof OPCODE_NAMES)[Opcode] {
	return OPCODE_NAMES[opcode];
}
