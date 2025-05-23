import type { VoiceEventBase } from "../base/event.js";
import type { VoiceOpcodes } from "../event.js";
import type { VoiceEncryptionMode } from "./ready.js";

/**
 * @public
 * @see https://discord.com/developers/docs/topics/voice-connections#establishing-a-voice-udp-connection-example-select-protocol-payload
 */
export interface VoiceSelectProtocolPayload {
  data: VoiceSelectProtocolPayloadData;
  protocol: VoiceSelectProtocolPayloadProtocol;
}

/**
 * @public
 * @see https://discord.com/developers/docs/topics/voice-connections#establishing-a-voice-udp-connection-example-select-protocol-payload
 */
export interface VoiceSelectProtocolPayloadData {
  address: string;
  mode: VoiceEncryptionMode;
  port: number;
}

/**
 * @public
 * @see https://discord.com/developers/docs/topics/voice-connections#establishing-a-voice-udp-connection-example-select-protocol-payload
 */
export type VoiceSelectProtocol = VoiceEventBase<VoiceOpcodes.SelectProtocol, VoiceSelectProtocolPayload>;

/**
 * @public
 * @see https://discord.com/developers/docs/topics/voice-connections#establishing-a-voice-udp-connection-example-select-protocol-payload
 */
export type VoiceSelectProtocolPayloadProtocol = "udp";
