import type { Snowflake } from "../shared/discord.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/stage-instance#stage-instance-object-stage-instance-structure
 */
export interface APIStageInstance {
    channel_id: Snowflake;
    /**
     * @deprecated
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
     * @deprecated
     */
    Public = 1,
}
