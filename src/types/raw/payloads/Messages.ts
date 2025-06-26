import type { ISO8601Date, Snowflake } from "../shared/discord.js";
import type { ApplicationCommandTypes } from "./ApplicationCommands.js";
import type { APIPartialApplication } from "./Applications.js";
import type {
  APIEmbedMediaContentBase,
  APIMessageInteractionMetadataBase,
} from "./base/message.js";
import type { APIChannel, ChannelTypes } from "./Channels.js";
import type { APIMessageComponent } from "./Components.js";
import type { APIPartialEmoji } from "./Emojis.js";
import type { APIResolvedData, InteractionTypes } from "./Interactions.js";
import type { APIPoll } from "./Polls.js";
import type { APISoundboardSound } from "./Soundboards.js";
import type { APIStickerItem } from "./Stickers.js";
import type { APIUser } from "./Users.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#allowed-mentions-object-allowed-mentions-structure
 */
export interface APIAllowedMentions {
  parse?: AllowedMentionTypes[];
  replied_user?: boolean;
  roles?: Snowflake[];
  users?: Snowflake[];
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#message-interaction-metadata-object-application-command-interaction-metadata-structure
 */
export interface APIApplicationCommandInteractionMetadata
  extends APIMessageInteractionMetadataBase<
    InteractionTypes.ApplicationCommand | InteractionTypes.ApplicationCommandAutocomplete
  > {
  target_message_id?: Snowflake;
  target_user?: APIUser;

  /**
   * @undocumented
   */
  command_type?: ApplicationCommandTypes;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#attachment-object-attachment-structure
 */
export interface APIAttachment {
  content_type?: string;
  description?: string;
  duration_secs?: number;
  ephemeral?: boolean;
  filename: string;
  flags?: AttachmentFlags;
  height?: number;
  id: Snowflake;
  proxy_url: string;
  size: number;
  title?: string;
  url: string;
  waveform?: string;
  width?: number;

  /**
   * @undocumented
   */
  clip_created_at?: ISO8601Date;
  /**
   * @undocumented
   */
  clip_participants?: APIUser[];
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#channel-mention-object-channel-mention-structure
 */
export interface APIChannelMention {
  guild_id: Snowflake;
  id: Snowflake;
  name: string;
  type: ChannelTypes;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-structure
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

  /**
   * @undocumented
   */
  flags?: number;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-author-structure
 */
export interface APIEmbedAuthor {
  icon_url?: string;
  name: string;
  proxy_icon_url?: string;
  url?: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-field-structure
 */
export interface APIEmbedField {
  inline?: boolean;
  name: string;
  value: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-footer-structure
 */
export interface APIEmbedFooter {
  icon_url?: string;
  name: string;
  proxy_icon_url?: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-provider-structure
 */
export interface APIEmbedProvider {
  name?: string;
  url?: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#start-thread-in-forum-or-media-channel-forum-and-media-thread-message-params-object
 */
export interface APIForumMessage {
  allowed_mentions?: APIAllowedMentions;
  attachments?: APIPartialAttachment[];
  components?: APIMessageComponent[];
  content?: string;
  embeds?: APIEmbed[];
  flags?: number;
  sticker_ids?: Snowflake[];
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#message-object-message-structure
 */
export interface APIMessage {
  activity?: APIMessageActivity;
  application?: APIPartialApplication;
  application_id?: Snowflake;
  attachments: APIAttachment[];
  author: APIUser;
  call?: APIMessageCall;
  channel_id: Snowflake;
  components?: APIMessageComponent[];
  content: string;
  edited_timestamp: ISO8601Date | null;
  embeds: APIEmbed[];
  flags: MessageFlags;
  id: Snowflake;
  interaction_metadata?: APIMessageInteractionMetadata;
  mention_channels?: APIChannelMention[];
  mention_everyone: boolean;
  mention_roles: Snowflake[];
  mentions: APIUser[];
  message_reference?: APIMessageReference;
  message_snapshots?: APIMessageSnapshot[];
  nonce?: string | number;
  pinned: boolean;
  poll?: APIPoll;
  position?: number;
  reactions?: APIReaction[];
  referenced_message?: APIMessage | null;
  resolved?: APIResolvedData;
  role_subscription_data?: APIRoleSubscriptionData;
  sticker_items?: APIStickerItem[];
  thread?: APIChannel;
  timestamp: ISO8601Date;
  tts: boolean;
  type: MessageTypes;
  webhook_id?: Snowflake;

  /**
   * @undocumented
   */
  soundboard_sounds?: APISoundboardSound[];
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#message-object-message-activity-structure
 */
export interface APIMessageActivity {
  type: MessageActivityTypes;
  party_id?: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#message-call-object-message-call-object-structure
 */
export interface APIMessageCall {
  participants: Snowflake[];
  ended_timestamp?: ISO8601Date | null;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#message-interaction-metadata-object-message-component-interaction-metadata-structure
 */
export interface APIMessageComponentInteractionMetadata
  extends APIMessageInteractionMetadataBase<InteractionTypes.MessageComponent> {
  interacted_message_id?: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#message-pin-object-message-pin-object-struture
 */
export interface APIMessagePin {
  message: APIMessage;
  pinned_at: ISO8601Date;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#message-interaction-metadata-object-modal-submit-interaction-metadata-structure
 */
export interface APIModalSubmitInteractionMetadata
  extends APIMessageInteractionMetadataBase<InteractionTypes.ModalSubmit> {
  triggering_interaction_metadata: APIModalSubmitInteractionMetadataTriggeringInteractionMetadata;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#message-reference-structure
 */
export interface APIMessageReference {
  channel_id?: Snowflake;
  fail_if_not_exists?: boolean;
  guild_id?: Snowflake;
  message_id?: Snowflake;
  type?: MessageReferenceTypes;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#message-snapshot-structure
 */
export interface APIMessageSnapshot {
  message: APIMessageSnapshotMessage;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#message-object-message-structure
 */
export interface APIPartialMessage
  extends Pick<
    APIMessage,
    "application_id" | "author" | "channel_id" | "content" | "flags" | "id"
  > {
  channel?: APIChannel;
  recipient_id?: Snowflake;
  type?: MessageTypes;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#attachment-object-attachment-structure
 */
export interface APIPartialAttachment {
  filename?: string;
  id: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#embed-fields-by-embed-type-poll-result-embed-fields
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
 * @public
 * @see https://discord.com/developers/docs/resources/message#reaction-object-reaction-structure
 */
export interface APIReaction {
  burst_colors: string[];
  count: number;
  count_details: APIReactionCountDetails;
  emoji: APIPartialEmoji;
  me: boolean;
  me_burst: boolean;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#reaction-count-details-object-reaction-count-details-structure
 */
export interface APIReactionCountDetails {
  burst: number;
  normal: number;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#role-subscription-data-object-role-subscription-data-object-structure
 */
export interface APIRoleSubscriptionData {
  is_renewal: boolean;
  role_subscription_listing_id: Snowflake;
  tier_name: string;
  total_months_subscribed: number;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-image-structure
 */
export type APIEmbedImage = APIEmbedMediaContentBase;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-thumbnail-structure
 */
export type APIEmbedThumbnail = APIEmbedMediaContentBase;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-video-structure
 */
export type APIEmbedVideo = APIEmbedMediaContentBase;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#message-interaction-metadata-object
 */
export type APIModalSubmitInteractionMetadataTriggeringInteractionMetadata =
  | APIApplicationCommandInteractionMetadata
  | APIMessageComponentInteractionMetadata;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#message-interaction-metadata-object
 */
export type APIMessageInteractionMetadata =
  | APIApplicationCommandInteractionMetadata
  | APIMessageComponentInteractionMetadata
  | APIModalSubmitInteractionMetadata;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#message-object-message-structure
 */
export type APIMessageSnapshotMessage = Pick<
  APIMessage,
  | "attachments"
  | "components"
  | "content"
  | "edited_timestamp"
  | "embeds"
  | "flags"
  | "mention_roles"
  | "mentions"
  | "soundboard_sounds"
  | "sticker_items"
  | "timestamp"
  | "type"
>;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#allowed-mentions-object-allowed-mention-types
 */
export enum AllowedMentionTypes {
  Everyone = "everyone",
  Roles = "roles",
  Users = "users",
}

/**
 * @undocumented
 */
export enum ContentScanFlags {
  Explicit = 1 << 0,
  Gore = 1 << 1,
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#attachment-object-attachment-flags
 */
export enum AttachmentFlags {
  IsRemix = 1 << 2,

  /**
   * @undocumented
   */
  ContainsExplicitMedia = 1 << 4,
  /**
   * @undocumented
   */
  ContainsGoreContent = 1 << 6,
  /**
   * @undocumented
   */
  IsAnimated = 1 << 5,
  /**
   * @undocumented
   */
  IsClip = 1 << 0,
  /**
   * @undocumented
   */
  IsSpoiler = 1 << 3,
  /**
   * @undocumented
   */
  IsThumbnail = 1 << 1,
}

/**
 * @undocumented
 */
export enum EmbedFlags {
  ContainsExplicitMedia = 1 << 4,
  ContainsGoreContent = 1 << 6,
  ContentInventoryEntry = 1 << 5,
}

/**
 * @undocumented
 */
export enum EmbedMediaFlags {
  IsAnimated = 1 << 5,
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-types
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
 * @public
 * @see https://discord.com/developers/docs/resources/message#message-object-message-activity-types
 */
export enum MessageActivityTypes {
  Join = 1,
  JoinRequest = 5,
  Listen = 3,
  Spectate = 2,
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#message-object-message-flags
 */
export enum MessageFlags {
  Crossposted = 1 << 0,
  Ephemeral = 1 << 6,
  FailedToMentionSomeRolesInThread = 1 << 8,
  HasSnapshot = 1 << 14,
  HasThread = 1 << 5,
  IsComponentsV2 = 1 << 15,
  IsCrosspost = 1 << 1,
  IsVoiceMessage = 1 << 13,
  Loading = 1 << 7,
  SourceMessageDeleted = 1 << 3,
  SuppressEmbeds = 1 << 2,
  SupressNotifications = 1 << 12,
  Urgent = 1 << 4,
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#message-reference-types
 */
export enum MessageReferenceTypes {
  Default = 0,
  Forward = 1,
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#message-object-message-types
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

  /**
   * @undocumented
   */
  EmojiAdded = 63,
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#get-reactions-reaction-types
 */
export enum ReactionTypes {
  Burst = 1,
  Normal = 0,
}
