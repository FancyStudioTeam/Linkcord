/**
 * @see https://discord.com/developers/docs/resources/application#get-application-activity-instance-activity-location-kind-enum
 */
export enum ActivityLocationKind {
	GuildChannel = "gc",
	PrivateChannel = "pc",
}

/**
 * @see https://discord.com/developers/docs/resources/application#application-object-application-integration-types
 */
export enum ApplicationIntegrationType {
	GuildInstall = 0,
	UserInstall = 1,
}

/**
 * @see https://discord.com/developers/docs/resources/application#application-object-application-event-webhook-status
 */
export enum ApplicationEventWebhookStatus {
	Disabled = 1,
	DisabledByDiscord = 3,
	Enabled = 2,
}

/**
 * @see https://discord.com/developers/docs/events/webhook-events#event-types
 */
export enum ApplicationEventWebhookType {
	ApplicationAuthorized = "APPLICATION_AUTHORIZED",
	ApplicationDeauthorized = "APPLICATION_DEAUTHORIZED",
	EntitlementCreate = "ENTITLEMENT_CREATE",
	GameDirectMessageCreate = "GAME_DIRECT_MESSAGE_CREATE",
	GameDirectMessageDelete = "GAME_DIRECT_MESSAGE_DELETE",
	GameDirectMessageUpdate = "GAME_DIRECT_MESSAGE_UPDATE",
	LobbyMessageCreate = "LOBBY_MESSAGE_CREATE",
	LobbyMessageDelete = "LOBBY_MESSAGE_DELETE",
	LobbyMessageUpdate = "LOBBY_MESSAGE_UPDATE",
	QuestUserEnrollment = "QUEST_USER_ENROLLMENT",
}

/**
 * @see https://discord.com/developers/docs/resources/application#application-object-application-flags
 */
export enum ApplicationFlags {
	ApplicationAutoModerationRuleCreateBadge = 1 << 6,
	ApplicationCommandBadge = 1 << 23,
	Embbeded = 1 << 17,
	GatewayGuildMembers = 1 << 14,
	GatewayGuildMembersLimited = 1 << 15,
	GatewayMessageContent = 1 << 18,
	GatewayMessageContentLimited = 1 << 19,
	GatewayPresence = 1 << 12,
	GatewayPresenceLimited = 1 << 13,
	VerificationPendingGuildLimit = 1 << 16,
}
