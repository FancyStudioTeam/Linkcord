import type { Nullable } from "../shared/custom.js";
import type { ISO8601Date, Snowflake } from "../shared/discord.js";
import type { APIGuildMember } from "./guild.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/voice#voice-region-object-voice-region-structure
 */
export interface APIVoiceRegion {
  custom: boolean;
  /**
   * @remarks
   * - Users should avoid switching to deprecated regions.
   */
  deprecated: boolean;
  id: string;
  name: string;
  optimal: boolean;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/voice#voice-state-object-voice-state-structure
 */
export interface APIVoiceState {
  channel_id: Nullable<Snowflake>;
  deaf: boolean;
  guild_id?: Snowflake;
  member?: APIGuildMember;
  mute: boolean;
  request_to_speak_timestamp: Nullable<ISO8601Date>;
  self_deaf: boolean;
  self_mute: boolean;
  self_stream?: boolean;
  self_video: boolean;
  session_id: string;
  suppress: boolean;
  user_id: Snowflake;
}
