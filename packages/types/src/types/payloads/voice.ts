import type { ISO8601Date, Nullable, Snowflake } from "#types/shared";

/**
 * https://discord.com/developers/docs/resources/voice#voice-region-object-voice-region-structure
 */
export interface APIVoiceRegion {
  custom: boolean;
  deprecated: boolean;
  id: string;
  name: string;
  optimal: boolean;
}

/**
 * https://discord.com/developers/docs/resources/voice#voice-state-object-voice-state-structure
 */
export interface APIVoiceState {
  channel_id: Nullable<Snowflake>;
  deaf: boolean;
  guild_id?: Snowflake;
  // TODO: Add "APIGuildMember" type
  // member?: APIGuildMember;
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
