import type { Snowflake } from "#types/shared";

/**
 * https://discord.com/developers/docs/resources/guild#guild-object
 */
export interface DiscordGuild {
  /** The guild id. */
  id: Snowflake;
  /** The guild name. */
  name: string;
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-object
 */
export interface Guild {
  /** The guild id. */
  id: Snowflake;
  /** The guild name. */
  name: string;
}
