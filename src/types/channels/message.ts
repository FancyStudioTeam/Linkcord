import type { If, Optional, Snowflake } from "#types/shared";

/**
 * https://discord.com/developers/docs/resources/message#create-message
 */
export interface CreateMessageOptions {
  /** The message content. */
  content?: string;
}

/**
 * https://discord.com/developers/docs/resources/message#message-object
 */
export interface DiscordMessage {
  /** The channel id where the message was created. */
  // biome-ignore lint/style/useNamingConvention: Discord properties are snake cased.
  channel_id: Snowflake;
  /** The message content. */
  content: string;
  /** The message id. */
  id: Snowflake;
  /** The message type. */
  type: MessageType;
}

/**
 * https://discord.com/developers/docs/resources/message#message-object
 */
export interface Message<InGuild extends boolean = false> {
  /** The channel id where the message was created. */
  channelId: Snowflake;
  /** The message content. */
  content: string;
  /** The guild id where the message was created. */
  guildId: If<InGuild, Snowflake, Optional<Snowflake>>;
  /** The message id. */
  id: Snowflake;
  /** The message type. */
  type: MessageType;
  /** Whether the message was created in a guild. */
  inGuild: () => this is Message<true>;
}

/**
 * https://discord.com/developers/docs/resources/message#message-object-message-types
 */
export enum MessageType {
  Default = 0,
  RecipientAdd = 1,
  RecipientRemove = 2,
  Call = 3,
  ChannelNameChange = 4,
  ChannelIconChange = 5,
  ChannelPinnedMessage = 6,
  UserJoin = 7,
  GuildBoost = 8,
  GuildBoostTier1 = 9,
  GuildBoostTier2 = 10,
  GuildBoostTier3 = 11,
  ChannelFollowAdd = 12,
  GuildDiscoveryDisqualified = 14,
  GuildDiscoveryRequalified = 15,
  GuildDiscoveryGracePeriodInitialWarning = 16,
  GuildDiscoveryGracePeriodFinalWarning = 17,
  ThreadCreated = 18,
  Reply = 19,
  ChatInputCommand = 20,
  ThreadStarterMessage = 21,
  GuildInviteReminder = 22,
  ContextMenuCommand = 23,
  AutoModerationAction = 24,
  RoleSubscriptionPurchase = 25,
  InteractionPremiumUpsell = 26,
  StageStart = 27,
  StageEnd = 28,
  StageSpeaker = 29,
  StageTopic = 31,
  GuildApplicationPremiumSubscription = 32,
  GuildIncidentAlertModeEnabled = 36,
  GuildIncidentAlertModeDisabled = 37,
  GuildIncidentReportRaid = 38,
  GuildIncidentReportFalseAlarm = 39,
  PurchaseNotification = 44,
  PollResult = 46,
}
