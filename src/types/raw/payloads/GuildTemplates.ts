import type { ISO8601Date, Snowflake } from "../shared/discord.js";
import type { APIGuildChannel } from "./channel.js";
import type { APIGuild } from "./Guilds.js";
import type { APIUser } from "./Users.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild-template#guild-template-object-guild-template-structure
 */
export interface APIGuildTemplate {
  code: string;
  created_at: ISO8601Date;
  creator: APIUser;
  creator_id: Snowflake;
  description: string | null;
  is_dirty: boolean | null;
  name: string;
  serialized_source_guild: APIGuildTemplateSerializedSourceGuild;
  source_guild_id: Snowflake;
  updated_at: ISO8601Date;
  usage_count: number;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild-template#guild-template-object-example-guild-template-object
 */
export interface APIGuildTemplateChannel extends Omit<APIGuildChannel, "id"> {
  id: number;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild-template#guild-template-object-example-guild-template-object
 */
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
  > {
  channels: APIGuildTemplateChannel[];
}
