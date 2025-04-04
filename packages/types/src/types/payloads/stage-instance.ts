import type { Nullable, Snowflake } from "#types/shared";

/**
 * https://discord.com/developers/docs/resources/stage-instance#stage-instance-object-stage-instance-structure
 */
export interface APIStageInstance {
  channel_id: Snowflake;
  discoverable_disabled: boolean;
  guild_id: Snowflake;
  guild_scheduled_event_id: Nullable<Snowflake>;
  id: Snowflake;
  privacy_level: PrivacyLevel;
  topic: string;
}

/**
 * https://discord.com/developers/docs/resources/stage-instance#stage-instance-object-privacy-level
 */
export enum PrivacyLevel {
  GuildOnly = 2,
  Public = 1,
}
