import type { ISO8601Date, Snowflake } from '#types/miscellaneous/discord.js';
import type { APIAvatarDecorationData, APIUser, GuildMemberFlags } from '#types/resources/index.js';
import type { GatewayDispatchEvents } from '../enums.js';
import type { GatewayDispatchEventBase } from './Dispatch.js';

/**
 * @see https://discord.com/developers/docs/events/gateway-events#guild-member-update-guild-member-update-event-fields
 */
export interface GatewayDispatchGuildMemberUpdateEventPayload {
	avatar: string | null;
	avatar_decoration_data?: APIAvatarDecorationData | null;
	banner: string | null;
	communication_disabled_until?: ISO8601Date | null;
	deaf?: boolean;
	flags?: GuildMemberFlags;
	guild_id: Snowflake;
	joined_at?: ISO8601Date | null;
	mute?: boolean;
	nick?: string | null;
	pending?: boolean;
	premium_since?: ISO8601Date | null;
	roles: Snowflake[];
	user: APIUser;
}

/**
 * @see https://discord.com/developers/docs/events/gateway-events#guild-member-update
 */
export type GatewayDispatchGuildMemberUpdateEvent = GatewayDispatchEventBase<
	GatewayDispatchEvents.GuildMemberUpdate,
	GatewayDispatchGuildMemberUpdateEventPayload
>;
