import type { Snowflake } from "../shared/discord.js";

/**
 * @public
 * @see https://discord.com/developers/docs/topics/permissions#role-object-role-structure
 */
export interface APIRole {
	/**
	 * @deprecated
	 */
	color: number;
	colors: APIRoleColors;
	flags: RoleFlags;
	hoist: boolean;
	icon?: string | null;
	id: Snowflake;
	managed: boolean;
	mentionable: boolean;
	name: string;
	permissions: string;
	position: number;
	tags?: APIRoleTags;
	unicode_emoji?: string | null;

	/**
	 * @undocumented
	 */
	description: string | null;
}

/**
 * @public
 * @see TBD
 */
export interface APIRoleColors {
	primary_color: number;
	secondary_color: number | null;
	tertiary_color: number | null;
}

/**
 * @public
 * @see https://discord.com/developers/docs/topics/permissions#role-object-role-tags-structure
 */
export interface APIRoleTags {
	available_for_purchase?: null;
	bot_id?: Snowflake;
	guild_connections?: null;
	integration_id?: Snowflake;
	premium_subscriber?: null;
	subscription_listing_id?: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags
 */
/**
 * biome-ignore-start lint/style/useNamingConvention: This should be an enum,
 * but due some limitations with large numeric values, this is a constant
 * using "BigInt" with "Pascal Case".
 */
export const BitwisePermissionFlags = {
	AddReactions: 1n << 6n,
	Administrator: 1n << 3n,
	AttachFiles: 1n << 15n,
	BanMembers: 1n << 2n,
	ChangeNickname: 1n << 26n,
	Connect: 1n << 20n,
	CreateEvents: 1n << 44n,
	CreateGuildExpressions: 1n << 43n,
	CreateInstantInvite: 1n << 0n,
	CreatePrivateThreads: 1n << 36n,
	CreatePublicThreads: 1n << 35n,
	DeafenMembers: 1n << 23n,
	EmbedLinks: 1n << 14n,
	KickMembers: 1n << 1n,
	ManageChannels: 1n << 4n,
	ManageEvents: 1n << 33n,
	ManageGuild: 1n << 5n,
	ManageGuildExpressions: 1n << 30n,
	ManageMessages: 1n << 13n,
	ManageNicknames: 1n << 27n,
	ManageRoles: 1n << 28n,
	ManageThreads: 1n << 34n,
	ManageWebhooks: 1n << 29n,
	MentionEveryone: 1n << 17n,
	ModerateMembers: 1n << 40n,
	MoveMembers: 1n << 24n,
	MuteMembers: 1n << 22n,
	PrioritySpeaker: 1n << 8n,
	ReadMessageHistory: 1n << 16n,
	RequestToSpeak: 1n << 32n,
	SendMessages: 1n << 11n,
	SendMessagesInThreads: 1n << 38n,
	SendPolls: 1n << 49n,
	SendTTSMessages: 1n << 12n,
	SendVoiceMessages: 1n << 46n,
	Speak: 1n << 21n,
	Stream: 1n << 9n,
	UseApplicationCommands: 1n << 31n,
	UseEmbeddedActivities: 1n << 39n,
	UseExternalApplications: 1n << 50n,
	UseExternalEmojis: 1n << 18n,
	UseExternalSounds: 1n << 45n,
	UseExternalStickers: 1n << 37n,
	UseSoundboard: 1n << 42n,
	UseVAD: 1n << 25n,
	ViewAuditLog: 1n << 7n,
	ViewChannel: 1n << 10n,
	ViewCreatorMonetizationAnalytics: 1n << 41n,
	ViewGuildInsights: 1n << 19n,
};
/**
 * biome-ignore-end lint/style/useNamingConvention: This should be an enum,
 * but due some limitations with large numeric values, this is a constant
 * using "BigInt" with "Pascal Case".
 */

/**
 * @public
 * @see https://discord.com/developers/docs/topics/permissions#role-object-role-flags
 */
export enum RoleFlags {
	InPrompt = 1 << 0,
}
