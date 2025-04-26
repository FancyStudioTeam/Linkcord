import type { GatewayDispatchEvents } from "#types/gateway";
import type { GatewayDispatchEventBase } from "#types/gateway/base/event";
import type { APIVoiceState } from "#types/payloads";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#voice-state-update
 */
export interface GatewayDispatchVoiceStateUpdateEvent
  extends GatewayDispatchEventBase<GatewayDispatchEvents.VoiceStateUpdate, GatewayDispatchVoiceStateUpdateEventData> {}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/voice#voice-state-object-voice-state-structure
 */
export type GatewayDispatchVoiceStateUpdateEventData = APIVoiceState;
