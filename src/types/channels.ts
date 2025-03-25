import type { Snowflake } from "./shared.js";

export interface CreateMessageOptions {
  /** The message content. (Max. 2000 characters) */
  content?: string;
}

export interface DiscordMessage {
  /** The channel id where the message was sent. */
  // biome-ignore lint/style/useNamingConvention: Discord properties are snake cased.
  channel_id: Snowflake;
  /** The message content. */
  content: string;
  /** The message id. */
  id: Snowflake;
}

export interface Message {
  /** The channel id where the message was sent. */
  channelId: Snowflake;
  /** The message content. */
  content: string;
  /** The message id. */
  id: Snowflake;
}
