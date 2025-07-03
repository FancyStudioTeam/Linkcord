import type { APIEmoji } from "#types/raw/payloads/Emojis.js";
import type { Snowflake } from "#types/raw/shared/discord.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../Dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#voice-channel-effect-send-voice-channel-effect-send-event-fields
 */
export interface GatewayDispatchVoiceChannelEffectSendPayload {
	animation_id?: number;
	animation_type?: AnimationTypes | null;
	channel_id: Snowflake;
	emoji?: APIEmoji | null;
	guild_id: Snowflake;
	sound_id?: number | Snowflake;
	sound_volume?: number;
	user_id: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#voice-channel-effect-send
 */
export type GatewayDispatchVoiceChannelEffectSend = GatewayDispatchEventBase<
	GatewayDispatchEvents.VoiceChannelEffectSend,
	GatewayDispatchVoiceChannelEffectSendPayload
>;

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#voice-channel-effect-send-animation-types
 */
export enum AnimationTypes {
	Basic = 1,
	Premium = 0,
}
