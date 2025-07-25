import type { Snowflake } from "#types/index.js";
import { encode } from "../functions/encode.js";

function application(applicationId: "@me"): string {
	return encode`applications/${applicationId}`;
}

function applicationActivityInstance(applicationId: Snowflake, activityInstance: string): string {
	return encode`applications/${applicationId}/activity-instances/${activityInstance}`;
}

function applicationEmoji(applicationId: Snowflake, emojiId: Snowflake): string {
	return encode`applications/${applicationId}/emojis/${emojiId}`;
}

function applicationEmojis(applicationId: Snowflake): string {
	return encode`applications/${applicationId}/emojis`;
}

function applicationEntitlement(applicationId: Snowflake, entitlementId: Snowflake): string {
	return encode`applications/${applicationId}/entitlements/${entitlementId}`;
}

function applicationEntitlementConsume(applicationId: Snowflake, entitlementId: Snowflake): string {
	return encode`applications/${applicationId}/entitlements/${entitlementId}/consume`;
}

function applicationEntitlements(applicationId: Snowflake): string {
	return encode`applications/${applicationId}/entitlements`;
}

function applicationRoleConnectionMetadata(applicationId: Snowflake): string {
	return encode`applications/${applicationId}/role-connections/metadata`;
}

function applicationSKUs(applicationId: Snowflake): string {
	return encode`applications/${applicationId}/skus`;
}

function attachmentRefreshURLs(): string {
	return "attachments/refresh-urls";
}

function channel(channelId: Snowflake): string {
	return encode`channels/${channelId}`;
}

function channelFollowers(channelId: Snowflake): string {
	return encode`channels/${channelId}/followers`;
}

function channelInvites(channelId: Snowflake): string {
	return encode`channels/${channelId}/invites`;
}

function channelMessage(channelId: Snowflake, messageId: Snowflake): string {
	return encode`channels/${channelId}/messages/${messageId}`;
}

function channelMessageCrosspost(channelId: Snowflake, messageId: Snowflake): string {
	return encode`channels/${channelId}/messages/${messageId}/crosspost`;
}

function channelMessagePin(channelId: Snowflake, messageId: Snowflake): string {
	return encode`channels/${channelId}/messages/pins/${messageId}`;
}

function channelMessagePins(channelId: Snowflake): string {
	return encode`channels/${channelId}/messages/pins`;
}

function channelMessageReaction(
	channelId: Snowflake,
	messageId: Snowflake,
	emojiId: Snowflake,
): string {
	return encode`channels/${channelId}/messages/${messageId}/reactions/${emojiId}`;
}

function channelMessageReactionUser(
	channelId: Snowflake,
	messageId: Snowflake,
	emojiId: Snowflake,
	userId: Snowflake | "@me",
): string {
	return encode`channels/${channelId}/messages/${messageId}/reactions/${emojiId}/${userId}`;
}

function channelMessageReactions(channelId: Snowflake, messageId: Snowflake): string {
	return encode`channels/${channelId}/messages/${messageId}/reactions`;
}

function channelMessageThreads(channelId: Snowflake, messageId: Snowflake): string {
	return encode`channels/${channelId}/messages/${messageId}/threads`;
}

function channelMessages(channelId: Snowflake): string {
	return encode`channels/${channelId}/messages`;
}

function channelMessagesBulkDelete(channelId: Snowflake): string {
	return encode`channels/${channelId}/messages/bulk-delete`;
}

function channelPermission(channelId: Snowflake, overwriteId: Snowflake): string {
	return encode`channels/${channelId}/permissions/${overwriteId}`;
}

function channelPin(channelId: Snowflake, messageId: Snowflake): string {
	return encode`channels/${channelId}/pins/${messageId}`;
}

function channelPins(channelId: Snowflake): string {
	return encode`channels/${channelId}/pins`;
}

function channelPollAnswer(channelId: Snowflake, messageId: Snowflake, answerId: number): string {
	return encode`channels/${channelId}/polls/${messageId}/answers/${answerId}`;
}

function channelPollExpire(channelId: Snowflake, messageId: Snowflake): string {
	return encode`channels/${channelId}/polls/${messageId}/expire`;
}

function channelRecipient(channelId: Snowflake, userId: Snowflake): string {
	return encode`channels/${channelId}/recipients/${userId}`;
}

function channelSendSoundboardSound(channelId: Snowflake): string {
	return encode`channels/${channelId}/send-soundboard-sound`;
}

function channelThreadMember(channelId: Snowflake, userId: Snowflake | "@me"): string {
	return encode`channels/${channelId}/thread-members/${userId}`;
}

function channelThreadMembers(channelId: Snowflake): string {
	return encode`channels/${channelId}/thread-members`;
}

function channelThreads(channelId: Snowflake): string {
	return encode`channels/${channelId}/threads`;
}

function channelThreadsArchivedPrivate(channelId: Snowflake): string {
	return encode`channels/${channelId}/threads/archived/private`;
}

function channelThreadsArchivedPublic(channelId: Snowflake): string {
	return encode`channels/${channelId}/threads/archived/public`;
}

function channelTyping(channelId: Snowflake): string {
	return encode`channels/${channelId}/typing`;
}

function channelUserThreadsArchivedPrivate(channelId: Snowflake, userId: "@me"): string {
	return encode`channels/${channelId}/users/${userId}/threads/archived/private`;
}

function channelWebhooks(channelId: Snowflake): string {
	return encode`channels/${channelId}/webhooks`;
}

function gateway(): string {
	return "gateway";
}

function gatewayBot(): string {
	return "gateway/bot";
}

function guild(guildId: Snowflake): string {
	return encode`guilds/${guildId}`;
}

function guildAuditLogs(guildId: Snowflake): string {
	return encode`guilds/${guildId}/audit-logs`;
}

function guildAutoModerationRule(guildId: Snowflake, autoModerationRuleId: Snowflake): string {
	return encode`guilds/${guildId}/auto-moderation/rules/${autoModerationRuleId}`;
}

function guildAutoModerationRules(guildId: Snowflake): string {
	return encode`guilds/${guildId}/auto-moderation/rules`;
}

function guildBan(guildId: Snowflake, userId: Snowflake): string {
	return encode`guilds/${guildId}/bans/${userId}`;
}

function guildBans(guildId: Snowflake): string {
	return encode`guilds/${guildId}/bans`;
}

function guildBulkBan(guildId: Snowflake): string {
	return encode`guilds/${guildId}/bulk-ban`;
}

function guildChannels(guildId: Snowflake): string {
	return encode`guilds/${guildId}/channels`;
}

function guildEmoji(guildId: Snowflake, emojiId: Snowflake): string {
	return encode`guilds/${guildId}/emojis/${emojiId}`;
}

function guildEmojis(guildId: Snowflake): string {
	return encode`guilds/${guildId}/emojis`;
}

function guildIncidentActions(guildId: Snowflake): string {
	return encode`guilds/${guildId}/incident-actions`;
}

function guildIntegration(guildId: Snowflake, integrationId: Snowflake): string {
	return encode`guilds/${guildId}/integrations/${integrationId}`;
}

function guildIntegrations(guildId: Snowflake): string {
	return encode`guilds/${guildId}/integrations`;
}

function guildInvites(guildId: Snowflake): string {
	return encode`guilds/${guildId}/invites`;
}

function guildMember(guildId: Snowflake, userId: Snowflake | "@me"): string {
	return encode`guilds/${guildId}/members/${userId}`;
}

function guildMemberRole(guildId: Snowflake, userId: Snowflake | "@me", roleId: Snowflake): string {
	return encode`guilds/${guildId}/members/${userId}/roles/${roleId}`;
}

function guildMembers(guildId: Snowflake): string {
	return encode`guilds/${guildId}/members`;
}

function guildMembersSearch(guildId: Snowflake): string {
	return encode`guilds/${guildId}/members/search`;
}

function guildMfa(guildId: Snowflake): string {
	return encode`guilds/${guildId}/mfa`;
}

function guildOnboarding(guildId: Snowflake): string {
	return encode`guilds/${guildId}/onboarding`;
}

function guildPreview(guildId: Snowflake): string {
	return encode`guilds/${guildId}/preview`;
}

function guildPrune(guildId: Snowflake): string {
	return encode`guilds/${guildId}/prune`;
}

function guildRegions(guildId: Snowflake): string {
	return encode`guilds/${guildId}/regions`;
}

function guildRole(guildId: Snowflake, roleId: Snowflake): string {
	return encode`guilds/${guildId}/roles/${roleId}`;
}

function guildRoles(guildId: Snowflake): string {
	return encode`guilds/${guildId}/roles`;
}

function guildScheduledEvent(guildId: Snowflake, scheduledEventId: Snowflake): string {
	return encode`guilds/${guildId}/scheduled-events/${scheduledEventId}`;
}

function guildScheduledEventUsers(guildId: Snowflake, scheduledEventId: Snowflake): string {
	return encode`guilds/${guildId}/scheduled-events/${scheduledEventId}/users`;
}

function guildScheduledEvents(guildId: Snowflake): string {
	return encode`guilds/${guildId}/scheduled-events`;
}

function guildSoundboardSound(guildId: Snowflake, soundboardSoundId: Snowflake): string {
	return encode`guilds/${guildId}/soundboard-sounds/${soundboardSoundId}`;
}

function guildSoundboardSounds(guildId: Snowflake): string {
	return encode`guilds/${guildId}/soundboard-sounds`;
}

function guildSticker(guildId: Snowflake, stickerId: Snowflake): string {
	return encode`guilds/${guildId}/stickers/${stickerId}`;
}

function guildStickers(guildId: Snowflake): string {
	return encode`guilds/${guildId}/stickers`;
}

function guildTemplate(guildId: Snowflake, templateCode: string): string {
	return encode`guilds/${guildId}/templates/${templateCode}`;
}

function guildTemplates(guildId: Snowflake): string {
	return encode`guilds/${guildId}/templates`;
}

function guildThreadsActive(guildId: Snowflake): string {
	return encode`guilds/${guildId}/threads/active`;
}

function guildVanityURL(guildId: Snowflake): string {
	return encode`guilds/${guildId}/vanity-url`;
}

function guildVoiceState(guildId: Snowflake, userId: Snowflake | "@me"): string {
	return encode`guilds/${guildId}/voice-states/${userId}`;
}

function guildWebhooks(guildId: Snowflake): string {
	return encode`guilds/${guildId}/webhooks`;
}

function guildWelcomeScreen(guildId: Snowflake): string {
	return encode`guilds/${guildId}/welcome-screen`;
}

function guildWidget(guildId: Snowflake): string {
	return encode`guilds/${guildId}/widget`;
}

function guildWidgetJSON(guildId: Snowflake): string {
	return encode`guilds/${guildId}/widget.json`;
}

function guildWidgetPNG(guildId: Snowflake): string {
	return encode`guilds/${guildId}/widget.png`;
}

function guilds(): string {
	return "guilds";
}

function interactionCallback(interactionId: Snowflake, interactionToken: string): string {
	return encode`interactions/${interactionId}/${interactionToken}/callback`;
}

function invite(inviteCode: string): string {
	return encode`invites/${inviteCode}`;
}

function lobbies(): string {
	return "lobbies";
}

function lobby(lobbyId: Snowflake): string {
	return encode`lobbies/${lobbyId}`;
}

function lobbyChannelLinking(lobbyId: Snowflake): string {
	return encode`lobbies/${lobbyId}/channel-linking`;
}

function lobbyMember(lobbyId: Snowflake, userId: Snowflake | "@me"): string {
	return encode`lobbies/${lobbyId}/members/${userId}`;
}

function skuSubscription(skuId: Snowflake, subscriptionId: Snowflake): string {
	return encode`skus/${skuId}/subscriptions/${subscriptionId}`;
}

function skuSubscriptions(skuId: Snowflake): string {
	return encode`skus/${skuId}/subscriptions`;
}

function soundboardDefaultSounds(): string {
	return "soundboard-default-sounds";
}

function stageInstance(stageInstanceId: Snowflake): string {
	return encode`stage-instances/${stageInstanceId}`;
}

function stageInstances(): string {
	return "stage-instances";
}

function sticker(stickerId: Snowflake): string {
	return encode`stickers/${stickerId}`;
}

function stickerPack(stickerPackId: Snowflake): string {
	return encode`sticker-packs/${stickerPackId}`;
}

function stickerPacks(): string {
	return "sticker-packs";
}

function template(templateCode: string): string {
	return encode`guilds/templates/${templateCode}`;
}

function user(userId: Snowflake | "@me"): string {
	return encode`users/${userId}`;
}

function userApplicationRoleConnection(userId: "@me", applicationId: Snowflake): string {
	return encode`users/${userId}/applications/${applicationId}/role-connections`;
}

function userChannels(userId: "@me"): string {
	return encode`users/${userId}/channels`;
}

function userConnections(userId: "@me"): string {
	return encode`users/${userId}/connections`;
}

function userGuild(userId: "@me", guildId: Snowflake): string {
	return encode`users/${userId}/guilds/${guildId}`;
}

function userGuildMember(userId: "@me", guildId: Snowflake): string {
	return encode`users/${userId}/guilds/${guildId}/member`;
}

function userGuilds(userId: "@me"): string {
	return encode`users/${userId}/guilds`;
}

function voiceRegions(): string {
	return "voice/regions";
}

function webhook(webhookId: Snowflake, webhookToken?: string): string {
	return webhookToken
		? encode`webhooks/${webhookId}/${webhookToken}`
		: encode`webhooks/${webhookId}`;
}

function webhookGitHub(webhookId: Snowflake, webhookToken: string): string {
	return encode`webhooks/${webhookId}/${webhookToken}/github`;
}

function webhookMessage(webhookId: Snowflake, webhookToken: string, messageId: Snowflake): string {
	return encode`webhooks/${webhookId}/${webhookToken}/messages/${messageId}`;
}

function webhookSlack(webhookId: Snowflake, webhookToken: string): string {
	return encode`webhooks/${webhookId}/${webhookToken}/slack`;
}

/**
 * Endpoints for Discord requests.
 *
 * @public
 */
export const Endpoints = Object.freeze({
	application,
	applicationActivityInstance,
	applicationEmoji,
	applicationEmojis,
	applicationEntitlement,
	applicationEntitlementConsume,
	applicationEntitlements,
	applicationRoleConnectionMetadata,
	applicationSKUs,
	attachmentRefreshURLs,
	channel,
	channelFollowers,
	channelInvites,
	channelMessage,
	channelMessageCrosspost,
	channelMessagePin,
	channelMessagePins,
	channelMessageReaction,
	channelMessageReactions,
	channelMessageReactionUser,
	channelMessages,
	channelMessagesBulkDelete,
	channelMessageThreads,
	channelPermission,
	channelPin,
	channelPins,
	channelPollAnswer,
	channelPollExpire,
	channelRecipient,
	channelSendSoundboardSound,
	channelThreadMember,
	channelThreadMembers,
	channelThreads,
	channelThreadsArchivedPrivate,
	channelThreadsArchivedPublic,
	channelTyping,
	channelUserThreadsArchivedPrivate,
	channelWebhooks,
	gateway,
	gatewayBot,
	guild,
	guildAuditLogs,
	guildAutoModerationRule,
	guildAutoModerationRules,
	guildBan,
	guildBans,
	guildBulkBan,
	guildChannels,
	guildEmoji,
	guildEmojis,
	guildIncidentActions,
	guildIntegration,
	guildIntegrations,
	guildInvites,
	guildMember,
	guildMemberRole,
	guildMembers,
	guildMembersSearch,
	guildMfa,
	guildOnboarding,
	guildPreview,
	guildPrune,
	guildRegions,
	guildRole,
	guildRoles,
	guildScheduledEvent,
	guildScheduledEvents,
	guildScheduledEventUsers,
	guildSoundboardSound,
	guildSoundboardSounds,
	guildSticker,
	guildStickers,
	guilds,
	guildTemplate,
	guildTemplates,
	guildThreadsActive,
	guildVanityURL,
	guildVoiceState,
	guildWebhooks,
	guildWelcomeScreen,
	guildWidget,
	guildWidgetJSON,
	guildWidgetPNG,
	interactionCallback,
	invite,
	lobbies,
	lobby,
	lobbyChannelLinking,
	lobbyMember,
	skuSubscription,
	skuSubscriptions,
	soundboardDefaultSounds,
	stageInstance,
	stageInstances,
	sticker,
	stickerPack,
	stickerPacks,
	template,
	user,
	userApplicationRoleConnection,
	userChannels,
	userConnections,
	userGuild,
	userGuildMember,
	userGuilds,
	voiceRegions,
	webhook,
	webhookGitHub,
	webhookMessage,
	webhookSlack,
});
