import type { Snowflake } from "./shared.js";

export interface DiscordGuild {
  /** The guild id. */
  id: Snowflake;
  /** The guild name. */
  name: string;
}

export interface Guild {
  /** The guild id. */
  id: Snowflake;
  /** The guild name. */
  name: string;
}
