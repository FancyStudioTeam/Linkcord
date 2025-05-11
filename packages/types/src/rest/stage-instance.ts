import type { APIStageInstance, StageInstancePrivacyLevel } from "#payloads";
import type { Snowflake } from "#shared";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/stage-instance#create-stage-instance-json-params
 */
export interface RESTCreateStageInstanceJSONParams {
  channel_id: Snowflake;
  guild_scheduled_event_id?: Snowflake;
  privacy_level?: StageInstancePrivacyLevel;
  /**
   * @remarks
   * - The stage moderator must have the `MENTION_EVERYONE` permission.
   */
  send_start_notification?: boolean;
  topic: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/stage-instance#create-stage-instance
 */
export type RESTCreateStageInstance = APIStageInstance;

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
export type RESTModifyStageInstance = APIStageInstance;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/stage-instance#modify-stage-instance-json-params
 */
export type RESTModifyStageInstanceJSONParams = Partial<
  Pick<RESTCreateStageInstanceJSONParams, "topic" | "privacy_level">
>;
