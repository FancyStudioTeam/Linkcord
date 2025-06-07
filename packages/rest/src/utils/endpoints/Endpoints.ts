import type { Snowflake } from "@fancystudioteam/linkcord-types";

/**
 * @public
 */
export class Endpoints {
  static application(applicationId: "@me"): string {
    return `applications/${applicationId}`;
  }

  static applicationActivityInstance(applicationId: Snowflake, activityInstance: string): string {
    return `applications/${applicationId}/activity-instances/${activityInstance}`;
  }

  static applicationEmoji(applicationId: Snowflake, emojiId: Snowflake): string {
    return `applications/${applicationId}/emojis/${emojiId}`;
  }

  static applicationEmojis(applicationId: Snowflake): string {
    return `applications/${applicationId}/emojis`;
  }

  static applicationEntitlement(applicationId: Snowflake, entitlementId: Snowflake): string {
    return `applications/${applicationId}/entitlements/${entitlementId}`;
  }

  static applicationEntitlementConsume(applicationId: Snowflake, entitlementId: Snowflake): string {
    return `applications/${applicationId}/entitlements/${entitlementId}/consume`;
  }

  static applicationEntitlements(applicationId: Snowflake): string {
    return `applications/${applicationId}/entitlements`;
  }

  static applicationRoleConnectionMetadata(applicationId: Snowflake): string {
    return `applications/${applicationId}/role-connections/metadata`;
  }

  static applicationSkus(applicationId: Snowflake): string {
    return `applications/${applicationId}/skus`;
  }

  static channel(channelId: Snowflake): string {
    return `channels/${channelId}`;
  }

  static channelFollowers(channelId: Snowflake): string {
    return `channels/${channelId}/followers`;
  }

  static channelInvites(channelId: Snowflake): string {
    return `channels/${channelId}/invites`;
  }

  static channelMessage(channelId: Snowflake, messageId: Snowflake): string {
    return `channels/${channelId}/messages/${messageId}`;
  }

  static channelMessageCrosspost(channelId: Snowflake, messageId: Snowflake): string {
    return `channels/${channelId}/messages/${messageId}/crosspost`;
  }

  static channelMessageReaction(channelId: Snowflake, messageId: Snowflake, emojiId: Snowflake): string {
    return `channels/${channelId}/messages/${messageId}/reactions/${emojiId}`;
  }

  static channelMessageReactionUser(
    channelId: Snowflake,
    messageId: Snowflake,
    emojiId: Snowflake,
    userId: Snowflake | "@me",
  ): string {
    return `channels/${channelId}/messages/${messageId}/reactions/${emojiId}/${userId}`;
  }

  static channelMessageReactions(channelId: Snowflake, messageId: Snowflake): string {
    return `channels/${channelId}/messages/${messageId}/reactions`;
  }

  static channelMessageThreads(channelId: Snowflake, messageId: Snowflake): string {
    return `channels/${channelId}/messages/${messageId}/threads`;
  }

  static channelMessages(channelId: Snowflake): string {
    return `channels/${channelId}/messages`;
  }

  static channelMessagesBulkDelete(channelId: Snowflake): string {
    return `channels/${channelId}/messages/bulk-delete`;
  }

  static channelPermission(channelId: Snowflake, overwriteId: Snowflake): string {
    return `channels/${channelId}/permissions/${overwriteId}`;
  }

  static channelPin(channelId: Snowflake, messageId: Snowflake): string {
    return `channels/${channelId}/pins/${messageId}`;
  }

  static channelPins(channelId: Snowflake): string {
    return `channels/${channelId}/pins`;
  }

  static channelPollAnswer(channelId: Snowflake, messageId: Snowflake, answerId: number): string {
    return `channels/${channelId}/polls/${messageId}/answers/${answerId}`;
  }

  static channelPollExpire(channelId: Snowflake, messageId: Snowflake): string {
    return `channels/${channelId}/polls/${messageId}/expire`;
  }

  static channelRecipient(channelId: Snowflake, userId: Snowflake): string {
    return `channels/${channelId}/recipients/${userId}`;
  }

  static channelSendSoundboardSound(channelId: Snowflake): string {
    return `channels/${channelId}/send-soundboard-sound`;
  }

  static channelThreadMember(channelId: Snowflake, userId: Snowflake | "@me"): string {
    return `channels/${channelId}/thread-members/${userId}`;
  }

  static channelThreadMembers(channelId: Snowflake): string {
    return `channels/${channelId}/thread-members`;
  }

  static channelThreads(channelId: Snowflake): string {
    return `channels/${channelId}/threads`;
  }

  static channelThreadsArchivedPrivate(channelId: Snowflake): string {
    return `channels/${channelId}/threads/archived/private`;
  }

  static channelThreadsArchivedPublic(channelId: Snowflake): string {
    return `channels/${channelId}/threads/archived/public`;
  }

  static channelTyping(channelId: Snowflake): string {
    return `channels/${channelId}/typing`;
  }

  static channelUserThreadsArchivedPrivate(channelId: Snowflake, userId: "@me"): string {
    return `channels/${channelId}/users/${userId}/threads/archived/private`;
  }

  static channelWebhooks(channelId: Snowflake): string {
    return `channels/${channelId}/webhooks`;
  }

  static guild(guildId: Snowflake): string {
    return `guilds/${guildId}`;
  }

  static guildAuditLogs(guildId: Snowflake): string {
    return `guilds/${guildId}/audit-logs`;
  }

  static guildAutoModerationRule(guildId: Snowflake, autoModerationRuleId: Snowflake): string {
    return `guilds/${guildId}/auto-moderation/rules/${autoModerationRuleId}`;
  }

  static guildAutoModerationRules(guildId: Snowflake): string {
    return `guilds/${guildId}/auto-moderation/rules`;
  }

  static guildBan(guildId: Snowflake, userId: Snowflake): string {
    return `guilds/${guildId}/bans/${userId}`;
  }

  static guildBans(guildId: Snowflake): string {
    return `guilds/${guildId}/bans`;
  }

  static guildBulkBan(guildId: Snowflake): string {
    return `guilds/${guildId}/bulk-ban`;
  }

  static guildChannels(guildId: Snowflake): string {
    return `guilds/${guildId}/channels`;
  }

  static guildEmoji(guildId: Snowflake, emojiId: Snowflake): string {
    return `guilds/${guildId}/emojis/${emojiId}`;
  }

  static guildEmojis(guildId: Snowflake): string {
    return `guilds/${guildId}/emojis`;
  }

  static guildIncidentActions(guildId: Snowflake): string {
    return `guilds/${guildId}/incident-actions`;
  }

  static guildIntegration(guildId: Snowflake, integrationId: Snowflake): string {
    return `guilds/${guildId}/integrations/${integrationId}`;
  }

  static guildIntegrations(guildId: Snowflake): string {
    return `guilds/${guildId}/integrations`;
  }

  static guildInvites(guildId: Snowflake): string {
    return `guilds/${guildId}/invites`;
  }

  static guildMember(guildId: Snowflake, userId: Snowflake | "@me"): string {
    return `guilds/${guildId}/members/${userId}`;
  }

  static guildMemberRole(guildId: Snowflake, userId: Snowflake | "@me", roleId: Snowflake): string {
    return `guilds/${guildId}/members/${userId}/roles/${roleId}`;
  }

  static guildMembers(guildId: Snowflake): string {
    return `guilds/${guildId}/members`;
  }

  static guildMembersSearch(guildId: Snowflake): string {
    return `guilds/${guildId}/members/search`;
  }

  static guildMfa(guildId: Snowflake): string {
    return `guilds/${guildId}/mfa`;
  }

  static guildOnboarding(guildId: Snowflake): string {
    return `guilds/${guildId}/onboarding`;
  }

  static guildPreview(guildId: Snowflake): string {
    return `guilds/${guildId}/preview`;
  }

  static guildPrune(guildId: Snowflake): string {
    return `guilds/${guildId}/prune`;
  }

  static guildRegions(guildId: Snowflake): string {
    return `guilds/${guildId}/regions`;
  }

  static guildRole(guildId: Snowflake, roleId: Snowflake): string {
    return `guilds/${guildId}/roles/${roleId}`;
  }

  static guildRoles(guildId: Snowflake): string {
    return `guilds/${guildId}/roles`;
  }

  static guildScheduledEvent(guildId: Snowflake, scheduledEventId: Snowflake): string {
    return `guilds/${guildId}/scheduled-events/${scheduledEventId}`;
  }

  static guildScheduledEventUsers(guildId: Snowflake, scheduledEventId: Snowflake): string {
    return `guilds/${guildId}/scheduled-events/${scheduledEventId}/users`;
  }

  static guildScheduledEvents(guildId: Snowflake): string {
    return `guilds/${guildId}/scheduled-events`;
  }

  static guildSoundboardSound(guildId: Snowflake, soundboardSoundId: Snowflake): string {
    return `guilds/${guildId}/soundboard-sounds/${soundboardSoundId}`;
  }

  static guildSoundboardSounds(guildId: Snowflake): string {
    return `guilds/${guildId}/soundboard-sounds`;
  }

  static guildSticker(guildId: Snowflake, stickerId: Snowflake): string {
    return `guilds/${guildId}/stickers/${stickerId}`;
  }

  static guildStickers(guildId: Snowflake): string {
    return `guilds/${guildId}/stickers`;
  }

  static guildTemplate(guildId: Snowflake, templateCode: string): string {
    return `guilds/${guildId}/templates/${templateCode}`;
  }

  static guildTemplates(guildId: Snowflake): string {
    return `guilds/${guildId}/templates`;
  }

  static guildThreadsActive(guildId: Snowflake): string {
    return `guilds/${guildId}/threads/active`;
  }

  static guildVanityUrl(guildId: Snowflake): string {
    return `guilds/${guildId}/vanity-url`;
  }

  static guildVoiceState(guildId: Snowflake, userId: Snowflake | "@me"): string {
    return `guilds/${guildId}/voice-states/${userId}`;
  }

  static guildWelcomeScreen(guildId: Snowflake): string {
    return `guilds/${guildId}/welcome-screen`;
  }

  static guildWidget(guildId: Snowflake): string {
    return `guilds/${guildId}/widget`;
  }

  static guildWidgetJSON(guildId: Snowflake): string {
    return `guilds/${guildId}/widget.json`;
  }

  static guildWidgetPNG(guildId: Snowflake): string {
    return `guilds/${guildId}/widget.png`;
  }

  static guilds(): string {
    return "guilds";
  }

  static invite(inviteCode: string): string {
    return `invites/${inviteCode}`;
  }

  static lobbies(): string {
    return "lobbies";
  }

  static lobby(lobbyId: Snowflake): string {
    return `lobbies/${lobbyId}`;
  }

  static lobbyChannelLinking(lobbyId: Snowflake): string {
    return `lobbies/${lobbyId}/channel-linking`;
  }

  static lobbyMember(lobbyId: Snowflake, userId: Snowflake | "@me"): string {
    return `lobbies/${lobbyId}/members/${userId}`;
  }

  static skuSubscription(skuId: Snowflake, subscriptionId: Snowflake): string {
    return `skus/${skuId}/subscriptions/${subscriptionId}`;
  }

  static skuSubscriptions(skuId: Snowflake): string {
    return `skus/${skuId}/subscriptions`;
  }

  static soundboardDefaultSounds(): string {
    return "soundboard-default-sounds";
  }

  static stageInstance(stageInstanceId: Snowflake): string {
    return `stage-instances/${stageInstanceId}`;
  }

  static stageInstances(): string {
    return "stage-instances";
  }

  static sticker(stickerId: Snowflake): string {
    return `stickers/${stickerId}`;
  }

  static stickerPack(stickerPackId: Snowflake): string {
    return `sticker-packs/${stickerPackId}`;
  }

  static stickerPacks(): string {
    return "sticker-packs";
  }

  static template(templateCode: string): string {
    return `guilds/templates/${templateCode}`;
  }

  static user(userId: Snowflake | "@me"): string {
    return `users/${userId}`;
  }

  static userApplicationRoleConnection(userId: "@me", applicationId: Snowflake): string {
    return `users/${userId}/applications/${applicationId}/role-connections`;
  }

  static userChannels(userId: "@me"): string {
    return `users/${userId}/channels`;
  }

  static userConnections(userId: "@me"): string {
    return `users/${userId}/connections`;
  }

  static userGuildMember(userId: "@me", guildId: Snowflake): string {
    return `users/${userId}/guilds/${guildId}/member`;
  }

  static userGuilds(userId: "@me"): string {
    return `users/${userId}/guilds`;
  }

  static voiceRegions(): string {
    return "voice/regions";
  }

  static webhook(webhookId: Snowflake, webhookToken?: string): string {
    return webhookToken ? `webhooks/${webhookId}/${webhookToken}` : `webhooks/${webhookId}`;
  }

  static webhookGitHub(webhookId: Snowflake, webhookToken: string): string {
    return `webhooks/${webhookId}/${webhookToken}/github`;
  }

  static webhookMessage(webhookId: Snowflake, webhookToken: string, messageId: Snowflake): string {
    return `webhooks/${webhookId}/${webhookToken}/messages/${messageId}`;
  }

  static webhookSlack(webhookId: Snowflake, webhookToken: string): string {
    return `webhooks/${webhookId}/${webhookToken}/slack`;
  }
}
