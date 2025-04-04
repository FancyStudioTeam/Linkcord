import type { Nullable, Snowflake } from "#types/shared";

/**
 * https://discord.com/developers/docs/topics/permissions#role-object-role-structure
 */
export interface APIRole {
  id: Snowflake;
  name: string;
  color: number;
  hoist: boolean;
  icon?: Nullable<string>;
  unicode_emoji?: Nullable<string>;
  position: number;
  permissions: string;
  managed: boolean;
  mentionable: boolean;
  tags: APIRoleTags;
  flags: RoleFlags;
}

/**
 * https://discord.com/developers/docs/topics/permissions#role-object-role-tags-structure
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
 * https://discord.com/developers/docs/topics/permissions#role-object-role-flags
 */
export enum RoleFlags {
  InPrompt = 1 << 0,
}
