import type { APISoundboardSound } from "#payloads";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../dispatch.js";

/**
 * @see https://discord.com/developers/docs/events/gateway-events#guild-soundboard-sound-update
 */
export interface GatewayDispatchGuildSoundboardSoundUpdateEvent
  extends GatewayDispatchEventBase<
    GatewayDispatchEvents.GuildSoundboardSoundUpdate,
    GatewayDispatchGuildSoundboardSoundUpdateEventData
  > {}

/**
 * @see https://discord.com/developers/docs/events/gateway-events#guild-soundboard-sound-update
 */
export interface GatewayDispatchGuildSoundboardSoundUpdateEventData extends APISoundboardSound {}
