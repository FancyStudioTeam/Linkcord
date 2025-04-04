import type { ISO8601Date, Nullable, Snowflake } from "#types/shared";
import type { APIGuild } from "./guild.js";
import type { APIUser } from "./user.js";

/**
 * https://discord.com/developers/docs/resources/guild-template#guild-template-object-guild-template-structure
 */
export interface APIGuildTemplate {
  code: string;
  created_at: ISO8601Date;
  creator: APIUser;
  creator_id: Snowflake;
  description: Nullable<string>;
  is_dirty: Nullable<boolean>;
  name: string;
  serialized_source_guild: APIGuildTemplateSerializedSourceGuild;
  source_guild_id: Snowflake;
  updated_at: ISO8601Date;
  usage_count: number;
}

/**
 * https://discord.com/developers/docs/resources/guild-template#guild-template-object-guild-template-structure
 */
// TODO: Add missing "channels" field
export interface APIGuildTemplateSerializedSourceGuild
  extends Pick<
    APIGuild,
    | "afk_channel_id"
    | "afk_timeout"
    | "default_message_notifications"
    | "description"
    | "explicit_content_filter"
    | "icon_hash"
    | "name"
    | "preferred_locale"
    | "roles"
    | "system_channel_flags"
    | "system_channel_id"
    | "verification_level"
  > {}
