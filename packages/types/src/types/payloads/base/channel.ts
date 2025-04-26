import type { ISO8601Date, Nullable, Snowflake } from "#types/shared";
import type {
  APIOverwrite,
  APIThreadMember,
  APIThreadMetadata,
  AutoArchiveDuration,
  ChannelTypes,
  VideoQualityModes,
} from "../channel.js";
import type { APIUser } from "../user.js";

export interface APIChannelBase<Type extends ChannelTypes> {
  flags?: number;
  id: Snowflake;
  name?: Nullable<string>;
  type: Type;
}

export interface APIDMChannelBase<Type extends AnyDMChannelType> extends APIChannelBase<Type> {
  recipients?: APIUser[];
  last_message_id?: Nullable<Snowflake>;
  last_pin_timestamp?: Nullable<ISO8601Date>;
}

export interface APIGuildChannelBase<Type extends ChannelTypes> extends Omit<APIChannelBase<Type>, "name"> {
  guild_id: Snowflake;
  name: string;
  nsfw?: boolean;
  parent_id?: Nullable<Snowflake>;
  permission_overwrites?: APIOverwrite[];
  position: number;
}

export interface APITextChannelBase<Type extends AnyTextChannelType> extends APIGuildChannelBase<Type> {
  default_auto_archive_duration?: AutoArchiveDuration;
  last_message_id: Nullable<Snowflake>;
  last_pin_timestamp?: Nullable<ISO8601Date>;
  rate_limit_per_user?: number;
  topic: Nullable<string>;
}

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

export interface APIVoiceChannelBase<Type extends AnyVoiceChannelType>
  extends Omit<APITextChannelBase<Type>, "default_auto_archive_duration" | "last_pin_timestamp" | "topic"> {
  bitrate?: number;
  rtc_region?: Nullable<string>;
  user_limit?: number;
  /**
   * @remarks
   * - If this field is not present, the video quality mode will be
   *   {@link VideoQualityModes.Auto | `AUTO`}.
   */
  video_quality_mode?: VideoQualityModes;
}

type AnyDMChannelType = ChannelTypes.DirectMessage | ChannelTypes.GroupDM;

type AnyTextChannelType = Exclude<ChannelTypes, AnyDMChannelType>;

type AnyThreadChannelType = ChannelTypes.AnnouncementThread | ChannelTypes.PrivateThread | ChannelTypes.PublicThread;

type AnyVoiceChannelType = ChannelTypes.GuildVoice | ChannelTypes.GuildStageVoice;
