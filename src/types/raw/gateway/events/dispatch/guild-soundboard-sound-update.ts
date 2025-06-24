import type { APISoundboardSound } from "../../../payloads/soundboard.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../dispatch.js";

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
