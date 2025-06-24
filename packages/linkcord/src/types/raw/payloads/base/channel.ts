import type { ISO8601Date, Snowflake } from "../../shared/discord.js";
import type {
  APIOverwrite,
  APIThreadMember,
  APIThreadMetadata,
  AutoArchiveDuration,
  ChannelTypes,
  VideoQualityModes,
} from "../channel.js";
import type { APIUser } from "../user.js";

/**
 * @public
 */
export interface APIChannelBase<Type extends ChannelTypes> {
  flags?: number;
  id: Snowflake;
  name?: string | null;
  type: Type;
}

/**
 * @public
 */
export interface APIDMChannelBase<Type extends AnyDMChannelType> extends APIChannelBase<Type> {
  recipients?: APIUser[];
  last_message_id?: Snowflake | null;
  last_pin_timestamp?: ISO8601Date | null;
}

/**
 * @public
 */
export interface APIGuildChannelBase<Type extends ChannelTypes> extends Omit<APIChannelBase<Type>, "name"> {
  guild_id: Snowflake;
  name: string;
  nsfw?: boolean;
  parent_id?: Snowflake | null;
  permission_overwrites?: APIOverwrite[];
  position: number;
}

/**
 * @public
 */
export interface APITextChannelBase<Type extends AnyTextChannelType> extends APIGuildChannelBase<Type> {
  default_auto_archive_duration?: AutoArchiveDuration;
  last_message_id: Snowflake | null;
  last_pin_timestamp?: ISO8601Date | null;
  rate_limit_per_user?: number;
  topic: string | null;
}

/**
 * @public
 */
export interface APIThreadChannelBase<Type extends AnyThreadChannelType>
  extends Omit<
    APITextChannelBase<Type>,
    "default_auto_archive_duration" | "nsfw" | "permission_overwrites" | "position" | "topic"
  > {
  applied_tags?: Snowflake[];
  member?: APIThreadMember;
  /**
   * @remarks
   * - This field may be innacurate when it is greather than `50` for threads
   *   created before `July 1st, 2021`.
   */
  member_count?: number;
  message_count?: number;
  owner_id: Snowflake;
  thread_metadata?: APIThreadMetadata;
  total_message_sent?: number;
}

/**
 * @public
 */
export interface APIVoiceChannelBase<Type extends AnyVoiceChannelType>
  extends Omit<APITextChannelBase<Type>, "default_auto_archive_duration" | "last_pin_timestamp" | "topic"> {
  bitrate?: number;
  rtc_region?: string | null;
  user_limit?: number;
  /**
   * @remarks
   * - If this field is not present, the video quality mode will be `AUTO`.
   */
  video_quality_mode?: VideoQualityModes;
}

/**
 * @public
 */
export type AnyDMChannelType = ChannelTypes.DirectMessage | ChannelTypes.GroupDM;

/**
 * @public
 */
export type AnyTextChannelType = Exclude<ChannelTypes, AnyDMChannelType>;

/**
 * @public
 */
export type AnyThreadChannelType =
  | ChannelTypes.AnnouncementThread
  | ChannelTypes.PrivateThread
  | ChannelTypes.PublicThread;

/**
 * @public
 */
export type AnyVoiceChannelType = ChannelTypes.GuildVoice | ChannelTypes.GuildStageVoice;
