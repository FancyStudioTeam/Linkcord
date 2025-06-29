import type { APIVoiceState } from "#types/raw/payloads/Voice.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../Dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#voice-state-update
 */
export type GatewayDispatchVoiceStateUpdate = GatewayDispatchEventBase<
    GatewayDispatchEvents.VoiceStateUpdate,
    GatewayDispatchVoiceStateUpdatePayload
>;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/voice#voice-state-object-voice-state-structure
 */
export type GatewayDispatchVoiceStateUpdatePayload = APIVoiceState;
