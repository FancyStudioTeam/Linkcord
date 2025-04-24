import type { Nullable, Snowflake } from "#types/shared";

/**
 * @see https://discord.com/developers/docs/topics/permissions#role-object-role-structure
 */
export interface APIRole {
  color: number;
  flags: RoleFlags;
  hoist: boolean;
  icon?: Nullable<string>;
  id: Snowflake;
  managed: boolean;
  mentionable: boolean;
  name: string;
  permissions: string;
  position: number;
  tags: APIRoleTags;
  unicode_emoji?: Nullable<string>;
}

/**
 * @see https://discord.com/developers/docs/topics/permissions#role-object-role-tags-structure
 */
export interface APIRoleTags {
  /**
   * @remarks
   * - This field value is `null` but they represent `boolean` values.
   * - If the field is present and its value is `null`, it will be interpreted
   *   as `true`.
   * - Otherwise, if the field is not present, it will be interpreted as `false`.
   */
  available_for_purchase?: null;
  bot_id?: Snowflake;
  /**
   * @remarks
   * - This field value is `null` but they represent `boolean` values.
   * - If the field is present and its value is `null`, it will be interpreted
   *   as `true`.
   * - Otherwise, if the field is not present, it will be interpreted as `false`.
   */
  guild_connections?: null;
  integration_id?: Snowflake;
  /**
   * @remarks
   * - This field value is `null` but they represent `boolean` values.
   * - If the field is present and its value is `null`, it will be interpreted
   *   as `true`.
   * - Otherwise, if the field is not present, it will be interpreted as `false`.
   */
  premium_subscriber?: null;
  subscription_listing_id?: Snowflake;
}

/**
 * @see https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags
 */
export const Permissions = {
  // biome-ignore lint/style/useNamingConvention:
  AddReactions: 1n << 6n,
  // biome-ignore lint/style/useNamingConvention:
  Administrator: 1n << 3n,
  // biome-ignore lint/style/useNamingConvention:
  AttachFiles: 1n << 15n,
  // biome-ignore lint/style/useNamingConvention:
  BanMembers: 1n << 2n,
  // biome-ignore lint/style/useNamingConvention:
  ChangeNickname: 1n << 26n,
  // biome-ignore lint/style/useNamingConvention:
  Connect: 1n << 20n,
  // biome-ignore lint/style/useNamingConvention:
  CreateEvents: 1n << 44n,
  // biome-ignore lint/style/useNamingConvention:
  CreateGuildExpressions: 1n << 43n,
  // biome-ignore lint/style/useNamingConvention:
  CreateInstantInvite: 1n << 0n,
  // biome-ignore lint/style/useNamingConvention:
  CreatePrivateThreads: 1n << 36n,
  // biome-ignore lint/style/useNamingConvention:
  CreatePublicThreads: 1n << 35n,
  // biome-ignore lint/style/useNamingConvention:
  DeafenMembers: 1n << 23n,
  // biome-ignore lint/style/useNamingConvention:
  EmbedLinks: 1n << 14n,
  // biome-ignore lint/style/useNamingConvention:
  KickMembers: 1n << 1n,
  // biome-ignore lint/style/useNamingConvention:
  ManageChannels: 1n << 4n,
  // biome-ignore lint/style/useNamingConvention:
  ManageEvents: 1n << 33n,
  // biome-ignore lint/style/useNamingConvention:
  ManageGuild: 1n << 5n,
  // biome-ignore lint/style/useNamingConvention:
  ManageGuildExpressions: 1n << 30n,
  // biome-ignore lint/style/useNamingConvention:
  ManageMessages: 1n << 13n,
  // biome-ignore lint/style/useNamingConvention:
  ManageNicknames: 1n << 27n,
  /**
   * @remarks
   * - This permission is referred as `Manage Permissions` in the Discord client.
   */
  // biome-ignore lint/style/useNamingConvention:
  ManageRoles: 1n << 28n,
  // biome-ignore lint/style/useNamingConvention:
  ManageThreads: 1n << 34n,
  // biome-ignore lint/style/useNamingConvention:
  ManageWebhooks: 1n << 29n,
  // biome-ignore lint/style/useNamingConvention:
  MentionEveryone: 1n << 17n,
  /**
   * @remarks
   * - This permission is referred as `Timeout Members` in the Discord client.
   */
  // biome-ignore lint/style/useNamingConvention:
  ModerateMembers: 1n << 40n,
  // biome-ignore lint/style/useNamingConvention:
  MoveMembers: 1n << 24n,
  // biome-ignore lint/style/useNamingConvention:
  MuteMembers: 1n << 22n,
  // biome-ignore lint/style/useNamingConvention:
  PrioritySpeaker: 1n << 8n,
  // biome-ignore lint/style/useNamingConvention:
  ReadMessageHistory: 1n << 16n,
  // biome-ignore lint/style/useNamingConvention:
  RequestToSpeak: 1n << 32n,
  // biome-ignore lint/style/useNamingConvention:
  SendMessages: 1n << 11n,
  // biome-ignore lint/style/useNamingConvention:
  SendMessagesInThreads: 1n << 38n,
  // biome-ignore lint/style/useNamingConvention:
  SendPolls: 1n << 49n,
  // biome-ignore lint/style/useNamingConvention:
  SendTTSMessages: 1n << 12n,
  // biome-ignore lint/style/useNamingConvention:
  SendVoiceMessages: 1n << 46n,
  // biome-ignore lint/style/useNamingConvention:
  Speak: 1n << 21n,
  // biome-ignore lint/style/useNamingConvention:
  Stream: 1n << 9n,
  // biome-ignore lint/style/useNamingConvention:
  UseApplicationCommands: 1n << 31n,
  // biome-ignore lint/style/useNamingConvention:
  UseEmbeddedActivities: 1n << 39n,
  // biome-ignore lint/style/useNamingConvention:
  UseExternalApplications: 1n << 50n,
  // biome-ignore lint/style/useNamingConvention:
  UseExternalEmojis: 1n << 18n,
  // biome-ignore lint/style/useNamingConvention:
  UseExternalSounds: 1n << 45n,
  // biome-ignore lint/style/useNamingConvention:
  UseExternalStickers: 1n << 37n,
  // biome-ignore lint/style/useNamingConvention:
  UseSoundboard: 1n << 42n,
  /**
   * @remarks
   * - This permission is referred as `Use Voice Activity` in the Discord client.
   */
  // biome-ignore lint/style/useNamingConvention:
  UseVAD: 1n << 25n,
  // biome-ignore lint/style/useNamingConvention:
  ViewAuditLog: 1n << 7n,
  // biome-ignore lint/style/useNamingConvention:
  ViewChannel: 1n << 10n,
  // biome-ignore lint/style/useNamingConvention:
  ViewCreatorMonetizationAnalytics: 1n << 41n,
  // biome-ignore lint/style/useNamingConvention:
  ViewGuildInsights: 1n << 19n,
};

/**
 * @see https://discord.com/developers/docs/topics/permissions#role-object-role-flags
 */
export enum RoleFlags {
  InPrompt = 1 << 0,
}
