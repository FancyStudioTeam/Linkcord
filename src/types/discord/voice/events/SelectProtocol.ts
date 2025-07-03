import type { VoiceEventBase } from "../base/event.js";
import type { VoiceOpcodes } from "../event.js";
import type { VoiceEncryptionModes } from "./Ready.js";

/**
 * @public
 * @see https://discord.com/developers/docs/topics/voice-connections#establishing-a-voice-udp-connection-example-select-protocol-payload
 */
export interface VoiceSelectProtocolPayload {
	data: VoiceSelectProtocolPayloadData;
	protocol: ProtocolTypes;
}

/**
 * @public
 * @see https://discord.com/developers/docs/topics/voice-connections#establishing-a-voice-udp-connection-example-select-protocol-payload
 */
export interface VoiceSelectProtocolPayloadData {
	address: string;
	mode: VoiceEncryptionModes;
	port: number;
}

/**
 * @public
 * @see https://discord.com/developers/docs/topics/voice-connections#establishing-a-voice-udp-connection-example-select-protocol-payload
 */
export type VoiceSelectProtocol = VoiceEventBase<
	VoiceOpcodes.SelectProtocol,
	VoiceSelectProtocolPayload
>;

/**
 * @public
 * @see https://discord.com/developers/docs/topics/voice-connections#establishing-a-voice-udp-connection-example-select-protocol-payload
 */
export enum ProtocolTypes {
	Udp = "udp",
}
