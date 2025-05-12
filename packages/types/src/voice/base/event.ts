import type { VoiceOpcodes } from "#voice";

/**
 * @public
 */
export interface VoiceEventBase<Opcode extends VoiceOpcodes, Data> {
  d: Data;
  op: Opcode;
}
