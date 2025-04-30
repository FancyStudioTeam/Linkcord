import type {
  APIChannel,
  APIDMChannel,
  APIGroupDMChannel,
  APIGuild,
  APIGuildMember,
  APIGuildScheduledEvent,
  APISoundboardSound,
  APIStageInstance,
  APIThreadChannel,
  APIVoiceState,
} from "#payloads";
import type { ISO8601Date } from "#shared";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../dispatch.js";
import type { GatewayPresenceUpdatePayload } from "../presence-update.js";

/**
 * @see https://discord.com/developers/docs/events/gateway-events#guilds
 */
export interface GatewayDispatchGuildCreateEvent
  extends GatewayDispatchEventBase<GatewayDispatchEvents.GuildCreate, GatewayDispatchGuildCreateEventData> {}

/**
 * @see https://discord.com/developers/docs/events/gateway-events#guild-create-guild-create-extra-fields
 */
export interface GatewayDispatchGuildCreateEventData extends APIGuild {
  channels: APIGuildChannel[];
  guild_scheduled_events: APIGuildScheduledEvent[];
  joined_at: ISO8601Date;
  large: boolean;
  member_count: number;
  members: APIGuildMember[];
  presences: GatewayPresenceUpdatePayload[];
  soundboard_sounds: APISoundboardSound[];
  stage_instances: APIStageInstance[];
  threads: APIThreadChannel[];
  unavailable?: boolean;
  voice_states: GatewayGuildVoiceState[];
}

/**
 * @see https://discord.com/developers/docs/events/gateway-events#guild-create-guild-create-extra-fields
 */
export interface GatewayGuildVoiceState extends Omit<APIVoiceState, "guild_id"> {}

/**
 * @see https://discord.com/developers/docs/events/gateway-events#guild-create-guild-create-extra-fields
 */
export type APIGuildChannel = Exclude<APIChannel, APIDMChannel | APIGroupDMChannel>;
