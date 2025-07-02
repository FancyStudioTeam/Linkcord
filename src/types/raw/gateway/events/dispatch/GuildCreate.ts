import type { APIGuildChannel, APIThreadChannel } from "#types/raw/payloads/Channels.js";
import type { APIGuildScheduledEvent } from "#types/raw/payloads/GuildScheduledEvents.js";
import type { APIGuild, APIGuildMember } from "#types/raw/payloads/Guilds.js";
import type { APIGuildSoundboardSound } from "#types/raw/payloads/Soundboards.js";
import type { APIStageInstance } from "#types/raw/payloads/StageInstances.js";
import type { APIVoiceState } from "#types/raw/payloads/Voice.js";
import type { ISO8601Date } from "#types/raw/shared/discord.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayPresence } from "../../presence.js";
import type { GatewayDispatchEvents } from "../Dispatch.js";

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
	presences: GatewayPresence[];
	soundboard_sounds: APIGuildSoundboardSound[];
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
