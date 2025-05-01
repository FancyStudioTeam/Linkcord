import type { Nullable } from "#shared";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#voice-server-update
 */
export interface GatewayDispatchVoiceServerUpdateEvent
  extends GatewayDispatchEventBase<
    GatewayDispatchEvents.VoiceServerUpdate,
    GatewayDispatchVoiceServerUpdateEventData
  > {}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#voice-server-update-voice-server-update-event-fields
 */
export interface GatewayDispatchVoiceServerUpdateEventData {
  /**
   * @remarks
   * - This field may be `null` when the allocated voice server disappears.
   */
  endpoint: Nullable<string>;
  guild_id: string;
  token: string;
}
