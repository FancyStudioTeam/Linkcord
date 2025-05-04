import type { APISoundboardSound } from "#payloads";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-soundboard-sound-update
 */
export interface GatewayDispatchGuildSoundboardSoundUpdateEvent
  extends GatewayDispatchEventBase<
    GatewayDispatchEvents.GuildSoundboardSoundUpdate,
    GatewayDispatchGuildSoundboardSoundUpdateEventData
  > {}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-soundboard-sound-update
 */
export type GatewayDispatchGuildSoundboardSoundUpdateEventData = APISoundboardSound;
