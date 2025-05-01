import type { APISoundboardSound } from "#payloads";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-soundboard-sound-create
 */
export interface GatewayDispatchGuildSoundboardSoundCreateEvent
  extends GatewayDispatchEventBase<
    GatewayDispatchEvents.GuildSoundboardSoundCreate,
    GatewayDispatchGuildSoundboardSoundCreateEventData
  > {}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-soundboard-sound-create
 */
export interface GatewayDispatchGuildSoundboardSoundCreateEventData extends APISoundboardSound {}
