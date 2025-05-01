import type { Snowflake } from "#shared";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-soundboard-sound-delete
 */
export interface GatewayDispatchGuildSoundboardSoundDeleteEvent
  extends GatewayDispatchEventBase<
    GatewayDispatchEvents.GuildSoundboardSoundDelete,
    GatewayDispatchGuildSoundboardSoundDeleteEventData
  > {}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-soundboard-sound-delete
 */
export interface GatewayDispatchGuildSoundboardSoundDeleteEventData {
  guild_id: Snowflake;
  sound_id: Snowflake;
}
