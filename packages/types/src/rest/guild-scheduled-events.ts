import type {
  APIGuildScheduledEvent,
  APIGuildScheduledEventEntityMetadata,
  APIGuildScheduledEventRecurrenceRule,
  APIGuildScheduledEventUser,
  GuildScheduledEventEntityTypes,
  GuildScheduledEventPrivacyLevel,
  GuildScheduledEventStatus,
} from "#payloads";
import type { ISO8601Date, ImageDataUri, Nullable, Snowflake } from "#shared";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild-scheduled-event#create-guild-scheduled-event-json-params
 */
export interface RESTCreateGuildScheduledEventJSONParams {
  channel_id?: Snowflake;
  description?: string;
  entity_metadata?: APIGuildScheduledEventEntityMetadata;
  entity_type: GuildScheduledEventEntityTypes;
  image?: ImageDataUri;
  name: string;
  privacy_level: GuildScheduledEventPrivacyLevel;
  recurrence_rule?: APIGuildScheduledEventRecurrenceRule;
  scheduled_end_time?: ISO8601Date;
  scheduled_start_time: ISO8601Date;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild-scheduled-event#list-guild-scheduled-events-query-string-params
 */
export interface RESTListScheduledEventsForGuildStringParams {
  with_user_count?: boolean;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild-scheduled-event#modify-guild-scheduled-event-json-params
 */
export interface RESTModifyGuildScheduledEventJSONParams {
  channel_id?: Nullable<Snowflake>;
  description?: Nullable<string>;
  entity_metadata?: Nullable<APIGuildScheduledEventEntityMetadata>;
  entity_type?: GuildScheduledEventEntityTypes;
  image?: ImageDataUri;
  name?: string;
  privacy_level?: GuildScheduledEventPrivacyLevel;
  recurrence_rule?: Nullable<APIGuildScheduledEventRecurrenceRule>;
  scheduled_end_time?: ISO8601Date;
  scheduled_start_time?: ISO8601Date;
  status?: GuildScheduledEventStatus;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild-scheduled-event#create-guild-scheduled-event
 */
export type RESTCreateGuildScheduledEvent = APIGuildScheduledEvent;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild-scheduled-event#delete-guild-scheduled-event
 */
export type RESTDeleteGuildScheduledEvent = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild-scheduled-event#get-guild-scheduled-event
 */
export type RESTGetGuildScheduledEvent = APIGuildScheduledEvent;

export type RESTGetGuildScheduledEventUsers = APIGuildScheduledEventUser[];
/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild-scheduled-event#list-scheduled-events-for-guild
 */
export type RESTListScheduledEventsForGuild = APIGuildScheduledEvent[];

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild-scheduled-event#modify-guild-scheduled-event
 */
export type RESTModifyGuildScheduledEvent = APIGuildScheduledEvent;
