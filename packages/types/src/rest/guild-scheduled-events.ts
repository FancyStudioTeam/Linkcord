import type {
  APIGuildScheduledEvent,
  APIGuildScheduledEventEntityMetadata,
  APIGuildScheduledEventRecurrenceRule,
  APIGuildScheduledEventUser,
  GuildScheduledEventEntityTypes,
  GuildScheduledEventPrivacyLevel,
  GuildScheduledEventStatus,
} from "../payloads/guild-scheduled-event.js";
import type { ImageDataUri, ISO8601Date, Snowflake } from "../shared/discord.js";

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
  channel_id?: Snowflake | null;
  description?: string | null;
  entity_metadata?: APIGuildScheduledEventEntityMetadata | null;
  entity_type?: GuildScheduledEventEntityTypes;
  image?: ImageDataUri;
  name?: string;
  privacy_level?: GuildScheduledEventPrivacyLevel;
  recurrence_rule?: APIGuildScheduledEventRecurrenceRule | null;
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
