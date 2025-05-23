import type { Nullable } from "../../../shared/custom.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#voice-server-update-voice-server-update-event-fields
 */
export interface GatewayDispatchVoiceServerUpdatePayload {
  /**
   * @remarks
   * - This field value may be `null` when the allocated voice server disappears.
   */
  endpoint: Nullable<string>;
  guild_id: string;
  token: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#voice-server-update
 */
export type GatewayDispatchVoiceServerUpdate = GatewayDispatchEventBase<
  GatewayDispatchEvents.VoiceServerUpdate,
  GatewayDispatchVoiceServerUpdatePayload
>;
