/**
 * @see https://discord.com/developers/docs/resources/guild#guild-object-explicit-content-filter-level
 */
export enum GuildExplicitContentFilterLevel {
	Disabled = 0,
	MembersWithoutRoles = 1,
	AllMembers = 2,
}

/**
 * @see https://discord.com/developers/docs/resources/guild#guild-object-guild-features
 */
export enum GuildFeatures {
	AnimatedBanner = "ANIMATED_BANNER",
	AnimatedIcon = "ANIMATED_ICON",
	ApplicationCommandPermissionsV2 = "APPLICATION_COMMAND_PERMISSIONS_V2",
	AutoModeration = "AUTO_MODERATION",
	Banner = "BANNER",
	Community = "COMMUNITY",
	CreatorMonetizableProvisional = "CREATOR_MONETIZABLE_PROVISIONAL",
	CreatorStorePage = "CREATOR_STORE_PAGE",
	DeveloperSupportServer = "DEVELOPER_SUPPORT_SERVER",
	Discoverable = "DISCOVERABLE",
	EnhancedRoleColors = "ENHANCED_ROLE_COLORS",
	Featurable = "FEATURABLE",
	GuestsEnabled = "GUESTS_ENABLED",
	GuildTags = "GUILD_TAGS",
	InviteSplash = "INVITE_SPLASH",
	InvitesDisabled = "INVITES_DISABLED",
	MemberVerificationGateEnabled = "MEMBER_VERIFICATION_GATE_ENABLED",
	MoreSoundboard = "MORE_SOUNDBOARD",
	MoreStickers = "MORE_STICKERS",
	News = "NEWS",
	Partnered = "PARTNERED",
	PreviewEnabled = "PREVIEW_ENABLED",
	RoleIcons = "ROLE_ICONS",
	RoleSubscriptionsAvailableForPurchase = "ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE",
	RoleSubscriptionsEnabled = "ROLE_SUBSCRIPTIONS_ENABLED",
	Soundboard = "SOUNDBOARD",
	TicketedEventsEnabled = "TICKETED_EVENTS_ENABLED",
	VanityURL = "VANITY_URL",
	Verified = "VERIFIED",
	VIPRegions = "VIP_REGIONS",
}

/**
 * @see https://discord.com/developers/docs/resources/guild#guild-member-object-guild-member-flags
 */
export enum GuildMemberFlags {
	AutomodQuarantinedGuildTag = 1 << 10,
	AutomodQuarantinedUsername = 1 << 7,
	BypassesVerification = 1 << 2,
	CompletedHomeActions = 1 << 6,
	CompletedOnboarding = 1 << 1,
	DidRejoin = 1 << 0,
	DMSettingsUpsellAcknowledge = 1 << 9,
	IsGuest = 1 << 4,
	StartedHomeActions = 1 << 5,
	StartedOnboarding = 1 << 3,
}

/**
 * @see https://discord.com/developers/docs/resources/guild#guild-object-mfa-level
 */
export enum GuildMFALevel {
	Elevated = 1,
	None = 0,
}

/**
 * @see https://discord.com/developers/docs/resources/guild#guild-object-default-message-notification-level
 */
export enum GuildNotificationLevel {
	AllMessages = 0,
	OnlyMentions = 1,
}

/**
 * @see https://discord.com/developers/docs/resources/guild#guild-object-guild-nsfw-level
 */
export enum GuildNSFWLevel {
	AgeRestricted = 3,
	Default = 0,
	Explicit = 1,
	Safe = 2,
}

/**
 * @see https://discord.com/developers/docs/resources/guild#guild-onboarding-object-onboarding-mode
 */
export enum GuildOnboardingMode {
	OnboardingAdvanced = 1,
	OnboardingDefault = 0,
}

/**
 * @see https://discord.com/developers/docs/resources/guild#guild-onboarding-object-prompt-types
 */
export enum GuildOnboardingPromptType {
	MultipleChoice = 0,
	Dropdown = 1,
}

/**
 * @see https://discord.com/developers/docs/resources/guild#guild-object-premium-tier
 */
export enum GuildPremiumTier {
	None = 0,
	Tier1 = 1,
	Tier2 = 2,
	Tier3 = 3,
}

/**
 * @see https://discord.com/developers/docs/resources/guild#guild-object-verification-level
 */
export enum GuildVerificationLevel {
	High = 3,
	Low = 1,
	Medium = 2,
	None = 0,
	VeryHigh = 4,
}

/**
 * @see https://discord.com/developers/docs/resources/guild#integration-object-integration-expire-behaviors
 */
export enum IntegrationExpireBehavior {
	Kick = 1,
	RemoveRole = 0,
}

/**
 * @see https://discord.com/developers/docs/resources/guild#integration-object-integration-structure
 */
export enum IntegrationType {
	Discord = "discord",
	GuildSubscription = "guild_subscription",
	Twitch = "twitch",
	YouTube = "youtube",
}

/**
 * @see https://discord.com/developers/docs/resources/guild#guild-object-system-channel-flags
 */
export enum SystemChannelFlags {
	SuppressGuildReminderNotifications = 1 << 2,
	SuppressJoinNotifications = 1 << 0,
	SuppressJoinNotificationReplies = 1 << 3,
	SuppressPremiumSubscriptions = 1 << 1,
	SuppressRoleSubscriptionPurchaseNotificationReplies = 1 << 5,
	SuppressRoleSubscriptionPurchaseNotifications = 1 << 4,
}
