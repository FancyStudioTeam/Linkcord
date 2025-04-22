import type { GatewayDispatchEventBase } from "../base/event.js";
import type { GatewayDispatchEvents } from "../event.js";

/**
 * Represents the Discord gateway payload for the `VOICE_SERVER_UPDATE` event.
 * @see https://discord.com/developers/docs/events/gateway-events#voice-server-update
 */
export interface GatewayDispatchVoiceServerUpdateEvent
  extends GatewayDispatchEventBase<
    GatewayDispatchEvents.VoiceServerUpdate,
    GatewayDispatchVoiceServerUpdateEventData
  > {}

/**
 * Represents the Discord gateway payload data for the `VOICE_SERVER_UPDATE` event.
 * @see https://discord.com/developers/docs/events/gateway-events#voice-server-update-voice-server-update-event-fields
 */
export interface GatewayDispatchVoiceServerUpdateEventData {
  /**
   * The voice server that is hoisting.
   * @remarks This may be `null` when the allocated voice server disappears.
   */
  endpoint: string;
  /** The id of the guild at which the voice server was updated. */
  guild_id: string;
  /** The token of the voice connection. */
  token: string;
}
