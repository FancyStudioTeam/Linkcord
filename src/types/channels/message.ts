import type { If, Optional, Snowflake } from "../shared.js";
import type { MessageType } from "./enumerations.js";

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
  /** The message type. */
  type: MessageType;
}

export interface Message<InGuild extends boolean = false> {
  /** The channel id where the message was sent. */
  channelId: Snowflake;
  /** The message content. */
  content: string;
  /** The guild id where the message was sent. */
  guildId: If<InGuild, Snowflake, Optional<Snowflake>>;
  /** The message id. */
  id: Snowflake;
  /** The message type. */
  type: MessageType;
  /** Whether the message was sent in a guild. */
  inGuild: () => this is Message<true>;
}
