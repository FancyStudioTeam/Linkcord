import type { APIStageInstance, StageInstancePrivacyLevel } from "../payloads/StageInstances.js";
import type { Snowflake } from "../shared/discord.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/stage-instance#modify-stage-instance-json-params
 */
export interface RESTPatchStageInstanceJSONParams {
    channel_id?: Snowflake;
    topic?: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/stage-instance#create-stage-instance-json-params
 */
export interface RESTPostStageInstanceJSONParams {
    channel_id: Snowflake;
    guild_scheduled_event_id?: Snowflake;
    privacy_level?: StageInstancePrivacyLevel;
    send_start_notification?: boolean;
    topic: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/stage-instance#delete-stage-instance
 */
export type RESTDeleteStageInstance = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/stage-instance#get-stage-instance
 */
export type RESTGetStageInstance = APIStageInstance;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/stage-instance#modify-stage-instance
 */
export type RESTPatchStageInstance = APIStageInstance;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/stage-instance#create-stage-instance
 */
export type RESTPostStageInstance = APIStageInstance;
