import type { APISoundboardSound } from "../../../payloads/soundboard.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-soundboard-sound-create
 */
export type GatewayDispatchGuildSoundboardSoundCreate = GatewayDispatchEventBase<
  GatewayDispatchEvents.GuildSoundboardSoundCreate,
  GatewayDispatchGuildSoundboardSoundCreatePayload
>;

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-soundboard-sound-create
 */
export type GatewayDispatchGuildSoundboardSoundCreatePayload = APISoundboardSound;
