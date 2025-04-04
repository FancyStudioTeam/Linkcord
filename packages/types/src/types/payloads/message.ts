import type { ISO8601Date, Nullable, Snowflake } from "#types/shared";
import type { ChannelTypes } from "./channel.js";
import type { APIPoll } from "./poll.js";
import type { APIStickerItem } from "./sticker.js";
import type { APIUser } from "./user.js";

/**
 * https://discord.com/developers/docs/resources/message#allowed-mentions-object-allowed-mentions-structure
 */
export interface APIAllowedMentions {
  parse?: AllowedMentionTypes[];
  replied_user?: boolean;
  roles?: Snowflake[];
  users?: Snowflake[];
}

/**
 * https://discord.com/developers/docs/resources/message#attachment-object-attachment-structure
 */
export interface APIAttachment {
  // ? This can be an enum. Must approve
  content_type?: string;
  description?: string;
  duration_secs?: number;
  ephemeral?: boolean;
  filename: string;
  flags?: number;
  height?: number;
  id: Snowflake;
  proxy_url: string;
  size: number;
  title?: string;
  url: string;
  waveform?: string;
  width?: number;
}

/**
 * https://discord.com/developers/docs/resources/message#channel-mention-object-channel-mention-structure
 */
export interface APIChannelMention {
  guild_id: Snowflake;
  id: Snowflake;
  name: string;
  type: ChannelTypes;
}

/**
 * https://discord.com/developers/docs/resources/message#embed-object-embed-structure
 */
export interface APIEmbed {
  author?: APIEmbedAuthor;
  color?: number;
  description?: string;
  fields?: APIEmbedField[];
  footer?: APIEmbedFooter;
  image?: APIEmbedImage;
  provider?: APIEmbedProvider;
  thumbnail?: APIEmbedThumbnail;
  timestamp?: ISO8601Date;
  title?: string;
  type: EmbedTypes;
  url?: string;
  video?: APIEmbedVideo;
}

/**
 * https://discord.com/developers/docs/resources/message#embed-object-embed-author-structure
 */
export interface APIEmbedAuthor {
  icon_url?: string;
  name: string;
  proxy_icon_url?: string;
  url?: string;
}

/**
 * https://discord.com/developers/docs/resources/message#embed-object-embed-field-structure
 */
export interface APIEmbedField {
  inline?: boolean;
  name: string;
  value: string;
}

/**
 * https://discord.com/developers/docs/resources/message#embed-object-embed-footer-structure
 */
export interface APIEmbedFooter {
  icon_url?: string;
  name: string;
  proxy_icon_url?: string;
}

/**
 * https://discord.com/developers/docs/resources/message#embed-object-embed-image-structure
 */
export interface APIEmbedImage {
  height?: number;
  proxy_url?: string;
  url: string;
  width?: number;
}

/**
 * https://discord.com/developers/docs/resources/message#embed-object-embed-provider-structure
 */
export interface APIEmbedProvider {
  name?: string;
  url?: string;
}

/**
 * https://discord.com/developers/docs/resources/message#embed-object-embed-thumbnail-structure
 */
export interface APIEmbedThumbnail {
  height?: number;
  proxy_url?: string;
  url: string;
  width?: number;
}

/**
 * https://discord.com/developers/docs/resources/message#embed-object-embed-video-structure
 */
export interface APIEmbedVideo {
  height?: number;
  proxy_url?: string;
  url?: string;
  width?: number;
}

/**
 * https://discord.com/developers/docs/resources/message#message-object-message-structure
 */
export interface APIMessage {
  activity?: APIMessageActivity;
  // TODO: Add "APIPartialApplication" type
  // application?: APIPartialApplication;
  application_id?: Snowflake;
  attachments: APIAttachment[];
  author: APIUser;
  call?: APIMessageCall;
  channel_id: Snowflake;
  // TODO: Add "APIMessageComponent" type
  // components?: APIMessageComponent[];
  content: string;
  edited_timestamp: Nullable<ISO8601Date>;
  embeds: APIEmbed[];
  flags: number;
  id: Snowflake;
  // TODO: Add "APIMessageInteractionMetadata" type
  // interaction_metadata?: APIMessageInteractionMetadata;
  mention_channels?: APIChannelMention[];
  mention_everyone: boolean;
  // TODO: Add "APIRole" type
  // mention_roles: APIRole[];
  mentions: APIUser[];
  message_reference?: APIMessageReference;
  message_snapshots?: APIMessageSnapshot[];
  nonce?: string | number;
  pinned: boolean;
  poll?: APIPoll;
  position?: number;
  reactions?: APIReaction[];
  referenced_message?: Nullable<APIMessage>;
  // TODO: Add "APIResolvedData" type
  // resolved?: APIResolvedData;
  role_subscription_data?: APIRoleSubscriptionData;
  sticker_items?: APIStickerItem[];
  // TODO: Current type is invalid, need to create a better one
  thread?: unknown;
  timestamp: ISO8601Date;
  tts: boolean;
  type: MessageTypes;
  webhook_id?: Snowflake;
}

/**
 * https://discord.com/developers/docs/resources/message#message-object-message-activity-structure
 */
export interface APIMessageActivity {
  type: MessageActivityTypes;
  party_id?: string;
}

/**
 * https://discord.com/developers/docs/resources/message#message-call-object-message-call-object-structure
 */
export interface APIMessageCall {
  participants: Snowflake[];
  ended_timestamp?: Nullable<ISO8601Date>;
}

/**
 * https://discord.com/developers/docs/resources/message#message-reference-structure
 */
export interface APIMessageReference {
  channel_id?: Snowflake;
  fail_if_not_exists?: boolean;
  guild_id?: Snowflake;
  message_id?: Snowflake;
  type?: MessageReferenceTypes;
}

/**
 * https://discord.com/developers/docs/resources/message#message-snapshot-structure
 */
export interface APIMessageSnapshot {
  message: APIMessageSnapshotMessage;
}

/**
 * https://discord.com/developers/docs/resources/message#embed-fields-by-embed-type-poll-result-embed-fields
 */
export interface APIPollResultEmbedFields {
  poll_question_text: string;
  total_votes: number;
  victor_answer_emoji_animated?: boolean;
  victor_answer_emoji_id?: Snowflake;
  victor_answer_emoji_name?: string;
  victor_answer_id?: number;
  victor_answer_text?: string;
  victor_answer_votes: number;
}

/**
 * https://discord.com/developers/docs/resources/message#reaction-object-reaction-structure
 */
export interface APIReaction {
  burst_colors: string[];
  count: number;
  count_details: APIReactionCountDetails;
  // TODO: Add "APIPartialEmoji" type
  // emoji: APIPartialEmoji;
  me: boolean;
  me_burst: boolean;
}

/**
 * https://discord.com/developers/docs/resources/message#role-subscription-data-object-role-subscription-data-object-structure
 */
export interface APIRoleSubscriptionData {
  is_renewal: boolean;
  role_subscription_listing_id: Snowflake;
  tier_name: string;
  total_months_subscribed: number;
}

/**
 * https://discord.com/developers/docs/resources/message#reaction-count-details-object-reaction-count-details-structure
 */
export interface APIReactionCountDetails {
  burst: number;
  normal: number;
}

/**
 * https://discord.com/developers/docs/resources/message#message-object-message-structure
 */
// TODO: Add missing "components" and "mention_roles" fields
export type APIMessageSnapshotMessage = Pick<
  APIMessage,
  | "attachments"
  | "content"
  | "edited_timestamp"
  | "embeds"
  | "flags"
  | "mentions"
  | "sticker_items"
  | "timestamp"
  | "type"
>;

/**
 * https://discord.com/developers/docs/resources/message#allowed-mentions-object-allowed-mention-types
 */
export enum AllowedMentionTypes {
  Everyone = "everyone",
  Roles = "roles",
  Users = "users",
}

/**
 * https://discord.com/developers/docs/resources/message#attachment-object-attachment-flags
 */
export enum AttachmentFlags {
  IsRemix = 1 << 2,
}

/**
 * https://discord.com/developers/docs/resources/message#embed-object-embed-types
 */
export enum EmbedTypes {
  Article = "article",
  GifV = "gifv",
  Image = "image",
  Link = "link",
  PollResult = "poll_result",
  Rich = "rich",
  Video = "video",
}

/**
 * https://discord.com/developers/docs/resources/message#message-object-message-activity-types
 */
export enum MessageActivityTypes {
  Join = 1,
  Spectate = 2,
  Listen = 3,
  JoinRequest = 5,
}

/**
 * https://discord.com/developers/docs/resources/message#message-object-message-flags
 */
export enum MessageFlags {
  Crossposted = 1 << 0,
  Ephemeral = 1 << 6,
  FailedToMentionSomeRolesInThread = 1 << 8,
  HasSnapshot = 1 << 14,
  HasThread = 1 << 5,
  IsCrosspost = 1 << 1,
  IsVoiceMessage = 1 << 13,
  Loading = 1 << 7,
  SourceMessageDeleted = 1 << 3,
  SuppressEmbeds = 1 << 2,
  SupressNotifications = 1 << 12,
  Urgent = 1 << 4,
}

/**
 * https://discord.com/developers/docs/resources/message#message-reference-types
 */
export enum MessageReferenceTypes {
  Default = 0,
  Forward = 1,
}

/**
 * https://discord.com/developers/docs/resources/message#message-object-message-types
 */
export enum MessageTypes {
  AutoModerationAction = 24,
  Call = 3,
  ChannelFollowAdd = 12,
  ChannelIconChange = 5,
  ChannelNameChange = 4,
  ChannelPinnedMessage = 6,
  ChatInputCommand = 20,
  ContextMenuCommand = 23,
  Default = 0,
  GuildApplicationPremiumSubscription = 32,
  GuildBoost = 8,
  GuildBoostTier1 = 9,
  GuildBoostTier2 = 10,
  GuildBoostTier3 = 11,
  GuildDiscoveryDisqualified = 14,
  GuildDiscoveryGracePeriodFinalWarning = 17,
  GuildDiscoveryGracePeriodInitialWarning = 16,
  GuildDiscoveryRequalified = 15,
  GuildIncidentAlertModeDisabled = 37,
  GuildIncidentAlertModeEnabled = 36,
  GuildIncidentFalseAlarm = 39,
  GuildIncidentReportRaid = 38,
  GuildInviteReminder = 22,
  InteractionPremiumUpsell = 26,
  PollResult = 46,
  PurchaseNotification = 44,
  RecipientAdd = 1,
  RecipientRemove = 2,
  Reply = 19,
  RoleSubscriptionPurchase = 25,
  StageEnd = 28,
  StageSpeaker = 29,
  StageStart = 27,
  StageTopic = 31,
  ThreadCreated = 18,
  ThreadStarterMessage = 21,
  UserJoin = 7,
}
