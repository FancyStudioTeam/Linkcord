import type { Snowflake } from "../../shared/discord.js";
import type { VoiceEventBase } from "../base/event.js";
import type { VoiceOpcodes } from "../event.js";

/**
 * @public
 * @see https://daveprotocol.com/#clients_connect-11
 */
export interface VoiceClientsConnectPayload {
  user_ids: Snowflake[];
}

/**
 * @public
 * @see https://daveprotocol.com/#clients_connect-11
 */
export type VoiceClientsConnectEvent = VoiceEventBase<VoiceOpcodes.ClientsConnect, VoiceClientsConnectPayload>;
