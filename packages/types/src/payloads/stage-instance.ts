import type { Snowflake } from "../shared/discord.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/stage-instance#stage-instance-object-stage-instance-structure
 */
export interface APIStageInstance {
  channel_id: Snowflake;
  /**
   * @remarks
   * - This field is currently deprecated by Discord.
   */
  discoverable_disabled: boolean;
  guild_id: Snowflake;
  guild_scheduled_event_id: Snowflake | null;
  id: Snowflake;
  privacy_level: StageInstancePrivacyLevel;
  topic: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/stage-instance#stage-instance-object-privacy-level
 */
export enum StageInstancePrivacyLevel {
  GuildOnly = 2,
  /**
   * @remarks
   * - This privacy level is currently deprecated by Discord.
   */
  Public = 1,
}
