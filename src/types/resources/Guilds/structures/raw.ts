import type { ISO8601Date, Snowflake } from '#types/miscellaneous/discord.js';
import type { OAuth2Scopes } from '#types/resources/OAuth2/enums.js';
import type { RawRole } from '#types/resources/Permissions/index.js';
import type { RawAvatarDecorationData, RawUser } from '#types/resources/Users/index.js';
import type { GuildFeatures, GuildMemberFlags, IntegrationExpireBehavior, IntegrationType } from '../enums.js';

/**
 * @see https://discord.com/developers/docs/resources/guild#guild-object-guild-structure
 */
export interface APIGuild {
	afk_channel_id: Snowflake | null;
	afk_timeout: number;
	discovery_splash: string | null;
	features: GuildFeatures[];
	icon: string | null;
	icon_hash?: string | null;
	incidents_data: APIGuildIncidentsData | null;
	id: Snowflake;
	name: string;
	owner_id: Snowflake;
	roles: RawRole[];
	splash: string | null;
}

/**
 * @see https://discord.com/developers/docs/resources/guild#incidents-data-object-incidents-data-structure
 */
export interface APIGuildIncidentsData {
	dm_spam_detected_at?: ISO8601Date | null;
	dms_disabled_until: ISO8601Date | null;
	invites_disabled_until: ISO8601Date | null;
	raid_detected_at?: ISO8601Date | null;
}

/**
 * @see https://discord.com/developers/docs/resources/guild#guild-member-object-guild-member-structure
 */
export interface APIGuildMember {
	avatar?: string | null;
	avatar_decoration_data?: RawAvatarDecorationData | null;
	banner?: string | null;
	communication_disabled_until?: ISO8601Date | null;
	deaf: boolean;
	flags: GuildMemberFlags;
	joined_at: ISO8601Date | null;
	mute: boolean;
	nick?: string | null;
	pending?: boolean;
	permissions?: string;
	premium_sinze?: ISO8601Date | null;
	roles: Snowflake[];
	user?: RawUser;
}

/**
 * @see https://discord.com/developers/docs/resources/guild#integration-object-integration-structure
 */
export interface APIIntegration {
	account: APIIntegrationAccount;
	enable_emoticons?: boolean;
	enabled: boolean;
	expire_behavior?: IntegrationExpireBehavior;
	expire_grace_period?: number;
	id: Snowflake;
	name: string;
	revoked?: boolean;
	role_id?: Snowflake;
	subscriber_count?: number;
	synced_at?: ISO8601Date;
	syncing?: boolean;
	scopes?: OAuth2Scopes[];
	type: IntegrationType;
	user?: RawUser;
}

/**
 * @see https://discord.com/developers/docs/resources/guild#integration-account-object-integration-account-structure
 */
export interface APIIntegrationAccount {
	id: string;
	name: string;
}

/**
 * @see https://discord.com/developers/docs/resources/guild#unavailable-guild-object-example-unavailable-guild
 */
export interface APIUnavailableGuild {
	id: Snowflake;
	unavailable: boolean;
}

/**
 * @see https://discord.com/developers/docs/resources/guild#guild-object-guild-structure
 */
export type APIPartialGuild = Partial<APIGuild>;

/**
 * @see https://discord.com/developers/docs/resources/guild#integration-object-integration-structure
 */
export type APIPartialIntegration = Partial<APIIntegration>;
