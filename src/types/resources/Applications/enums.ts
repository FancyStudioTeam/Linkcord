/**
 * The location of an application activity.
 * @see https://discord.com/developers/docs/resources/application#get-application-activity-instance-activity-location-kind-enum
 */
export enum ActivityLocationKind {
	GuildChannel = "gc",
	PrivateChannel = "pc",
}

/**
 * The types of an application command integration.
 * @see https://discord.com/developers/docs/resources/application#application-object-application-integration-types
 */
export enum ApplicationIntegrationTypes {
	GuildInstall = 0,
	UserInstall = 1,
}

/**
 * The status of an application event webhook.
 * @see https://discord.com/developers/docs/resources/application#application-object-application-event-webhook-status
 */
export enum ApplicationEventWebhookStatus {
	Disabled = 1,
	DisabledByDiscord = 3,
	Enabled = 2,
}

/**
 * The types of an application event webhook.
 * @see https://discord.com/developers/docs/events/webhook-events#event-types
 */
export enum ApplicationEventWebhookTypes {
	ApplicationAuthorized = "APPLICATION_AUTHORIZED",
	ApplicationDeauthorized = "APPLICATION_DEAUTHORIZED",
	EntitlementCreate = "ENTITLEMENT_CREATE",
	QuestUserEnrollment = "QUEST_USER_ENROLLMENT",
}

/**
 * The flags of an application.
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
