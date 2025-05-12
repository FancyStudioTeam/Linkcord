import type { VoiceOpcodes } from "../event.js";

/**
 * @public
 */
export interface VoiceEventBase<Opcode extends VoiceOpcodes, Data> {
  d: Data;
  op: Opcode;
}
