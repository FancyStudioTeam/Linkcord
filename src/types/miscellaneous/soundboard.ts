import type { Nullable, Optional, Snowflake } from "#types/shared";

/**
 * https://discord.com/developers/docs/resources/soundboard#soundboard-sound-object
 */
export interface DiscordSoundboardSound {
  /** Whether this sound can be used. */
  available: boolean;
  /** The sound emoji id. */
  // biome-ignore lint/style/useNamingConvention: Discord properties are snake cased.
  emoji_id: Nullable<Snowflake>;
  /** The sound emoji name. */
  // biome-ignore lint/style/useNamingConvention: Discord properties are snake cased.
  emoji_name: Nullable<string>;
  /** The guild id from which this sound was created. */
  // biome-ignore lint/style/useNamingConvention: Discord properties are snake cased.
  guild_id?: Snowflake;
  /** The sound name. */
  name: string;
  /** The sound id. */
  // biome-ignore lint/style/useNamingConvention: Discord properties are snake cased.
  sound_id: Snowflake;
  /** The sound volume. From 0 to 1. */
  volume: number;
}

/**
 * https://discord.com/developers/docs/resources/soundboard#soundboard-sound-object
 */
export interface SoundboardSound {
  /** Whether this sound can be used. */
  available: boolean;
  /** The sound emoji id. */
  emojiId: Nullable<Snowflake>;
  /** The sound emoji name. */
  emojiName: Nullable<string>;
  /** The guild id from which this sound was created. */
  guildId: Optional<Snowflake>;
  /** The sound name. */
  name: string;
  /** The sound id. */
  soundId: Snowflake;
  /** The sound volume. From 0 to 1. */
  volume: number;
  /**
   * Sends the soundboard sound to the current voice channel.
   *
   * @param channelId - The voice channel id.
   * @param sourceGuildId - The original soundboard sound guild id.
   */
  sendSoundboardSound(channelId: Snowflake, sourceGuildId?: Snowflake): Promise<void>;
}
