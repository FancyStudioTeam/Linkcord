import type { APIVoiceState } from "#payloads";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../dispatch.js";

/**
 * @see https://discord.com/developers/docs/events/gateway-events#voice-state-update
 */
export interface GatewayDispatchVoiceStateUpdateEvent
  extends GatewayDispatchEventBase<GatewayDispatchEvents.VoiceStateUpdate, GatewayDispatchVoiceStateUpdateEventData> {}

/**
 * @see https://discord.com/developers/docs/resources/voice#voice-state-object-voice-state-structure
 */
export type GatewayDispatchVoiceStateUpdateEventData = APIVoiceState;
