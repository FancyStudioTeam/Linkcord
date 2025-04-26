import type { ISO8601Date, Nullable, Snowflake } from "#types/shared";
import type { APIUser } from "./user.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-structure
 */
export interface APIGuildScheduledEvent {
  channel_id: Snowflake;
  /**
   * @remarks
   * - This field may be `null` for events created before `October 25th, 2021`.
   */
  creator?: APIUser;
  /**
   * @remarks
   * - This field may be `null` for events created before `October 25th, 2021`.
   */
  creator_id?: Nullable<Snowflake>;
  description?: Nullable<string>;
  entity_id: Snowflake;
  entity_metadata: Nullable<APIGuildScheduledEventEntityMetadata>;
  entity_type: GuildScheduledEventEntityTypes;
  guild_id: Snowflake;
  id: Snowflake;
  name: string;
  privacy_level: GuildScheduledEventPrivacyLevel;
  recurrence_rule: Nullable<APIGuildScheduledEventRecurrenceRule>;
  scheduled_end_time: Nullable<ISO8601Date>;
  scheduled_start_time: ISO8601Date;
  status: GuildScheduledEventStatus;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-entity-metadata
 */
export interface APIGuildScheduledEventEntityMetadata {
  /**
   * @remarks
   * - This field is required when {@link APIGuildScheduledEvent | `type`} is
   *   {@link GuildScheduledEventEntityTypes | `EXTERNAL`}.
   */
  location?: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-recurrence-rule-object-guild-scheduled-event-recurrence-rule-structure
 */
export interface APIGuildScheduledEventRecurrenceRule {
  by_month: Nullable<GuildScheduledEventRecurrenceRuleMonth[]>;
  by_month_day: Nullable<number[]>;
  by_n_weekday: Nullable<APIGuildScheduledEventRecurrenceRuleNWeekday[]>;
  by_weekday: Nullable<GuildScheduledEventRecurrenceRuleWeekday[]>;
  by_year_day: Nullable<number[]>;
  count: Nullable<number>;
  end: Nullable<ISO8601Date>;
  frequency: GuildScheduledEventRecurrenceRuleFrequency;
  interval: number;
  start: ISO8601Date;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-recurrence-rule-object-guild-scheduled-event-recurrence-rule-nweekday-structure
 */
export interface APIGuildScheduledEventRecurrenceRuleNWeekday {
  day: GuildScheduledEventRecurrenceRuleWeekday;
  n: number;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-entity-types
 */
export enum GuildScheduledEventEntityTypes {
  External = 3,
  StageInstance = 1,
  Voice = 2,
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-privacy-level
 */
export enum GuildScheduledEventPrivacyLevel {
  GuildOnly = 2,
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-recurrence-rule-object-guild-scheduled-event-recurrence-rule-frequency
 */
export enum GuildScheduledEventRecurrenceRuleFrequency {
  Daily = 3,
  Monthly = 1,
  Weekly = 2,
  Yearly = 0,
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-recurrence-rule-object-guild-scheduled-event-recurrence-rule-month
 */
export enum GuildScheduledEventRecurrenceRuleMonth {
  April = 4,
  August = 8,
  December = 12,
  February = 2,
  January = 1,
  July = 7,
  June = 6,
  March = 3,
  May = 5,
  November = 11,
  October = 10,
  September = 9,
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-recurrence-rule-object-guild-scheduled-event-recurrence-rule-weekday
 */
export enum GuildScheduledEventRecurrenceRuleWeekday {
  Friday = 4,
  Monday = 0,
  Saturday = 5,
  Sunday = 6,
  Thursday = 3,
  Tuesday = 1,
  Wednesday = 2,
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-status
 */
export enum GuildScheduledEventStatus {
  Active = 2,
  Canceled = 4,
  Completed = 3,
  Scheduled = 1,
}
