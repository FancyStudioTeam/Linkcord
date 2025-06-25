import type { APISoundboardSound } from "#types/raw/payloads/Soundboards.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../Dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-soundboard-sound-update
 */
export type GatewayDispatchGuildSoundboardSoundUpdate = GatewayDispatchEventBase<
  GatewayDispatchEvents.GuildSoundboardSoundUpdate,
  GatewayDispatchGuildSoundboardSoundUpdatePayload
>;

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-soundboard-sound-update
 */
export type GatewayDispatchGuildSoundboardSoundUpdatePayload = APISoundboardSound;
