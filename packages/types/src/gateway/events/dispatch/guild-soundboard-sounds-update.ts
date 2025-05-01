import type { APISoundboardSound } from "#payloads";
import type { Snowflake } from "#shared";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-soundboard-sounds-update
 */
export interface GatewayDispatchGuildSoundboardSoundsUpdateEvent
  extends GatewayDispatchEventBase<
    GatewayDispatchEvents.GuildSoundboardSoundsUpdate,
    GatewayDispatchGuildSoundboardSoundsUpdateEventData
  > {}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-soundboard-sounds-update-guild-soundboard-sounds-update-event-fields
 */
export interface GatewayDispatchGuildSoundboardSoundsUpdateEventData {
  guild_id: Snowflake;
  soundboard_sounds: APISoundboardSound[];
}
