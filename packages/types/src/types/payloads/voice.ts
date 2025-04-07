import type { ISO8601Date, Nullable, Snowflake } from "#types/shared";
import type { APIGuildMember } from "./guild.js";

/**
 * Represents a Discord voice region structure.
 * @see https://discord.com/developers/docs/resources/voice#voice-region-object-voice-region-structure
 */
export interface APIVoiceRegion {
  /** Whether the region is a custom region. */
  custom: boolean;
  /**
   * Whether the region is deprecated.
   * @remarks Switching to deprecated regions should be avoided.
   */
  deprecated: boolean;
  /** The unique id of the region. */
  id: string;
  /** The name of the region. */
  name: string;
  /** Whether the region is optimal to be used. */
  optimal: boolean;
}

/**
 * Represents a Discord voice state structure.
 * @see https://discord.com/developers/docs/resources/voice#voice-state-object-voice-state-structure
 */
export interface APIVoiceState {
  /** The id of the channel where the user is connected to. */
  channel_id: Nullable<Snowflake>;
  /** Whether the user is deafened in the guild. */
  deaf: boolean;
  /** The id of the guild of the voice state. */
  guild_id?: Snowflake;
  /** The guild member that is connected to the channel. */
  member?: APIGuildMember;
  /** Whether the user is muted in the guild. */
  mute: boolean;
  /** The time at which the user requested to speak. */
  request_to_speak_timestamp: Nullable<ISO8601Date>;
  /** Whether the user is self deafened. */
  self_deaf: boolean;
  /** Whether the user is self muted. */
  self_mute: boolean;
  /** Whether the user is streaming. */
  self_stream?: boolean;
  /** Whether the user camera is enabled. */
  self_video: boolean;
  /** The session id of the voice state. */
  session_id: string;
  /** Whether the user is suppressed in the stage channel. */
  suppress: boolean;
  /** The id of the user of the voice state. */
  user_id: Snowflake;
}
