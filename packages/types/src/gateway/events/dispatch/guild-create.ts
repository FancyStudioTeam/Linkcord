import type { APIGuildChannel, APIThreadChannel } from "../../../payloads/channel.js";
import type { APIGuildScheduledEvent } from "../../../payloads/guild-scheduled-event.js";
import type { APIGuild, APIGuildMember } from "../../../payloads/guild.js";
import type { APISoundboardSound } from "../../../payloads/soundboard.js";
import type { APIStageInstance } from "../../../payloads/stage-instance.js";
import type { APIVoiceState } from "../../../payloads/voice.js";
import type { ISO8601Date } from "../../../shared/discord.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../dispatch.js";
import type { GatewayPresenceUpdatePayload } from "../presence-update.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-create-guild-create-extra-fields
 */
export interface GatewayDispatchGuildCreatePayload extends APIGuild {
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
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guilds
 */
export type GatewayDispatchGuildCreate = GatewayDispatchEventBase<
  GatewayDispatchEvents.GuildCreate,
  GatewayDispatchGuildCreatePayload
>;

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-create-guild-create-extra-fields
 */
export type GatewayGuildVoiceState = Omit<APIVoiceState, "guild_id">;
