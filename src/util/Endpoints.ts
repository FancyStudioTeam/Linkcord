import type { Snowflake } from "#types/shared";

const ApplicationRoutes = {
  applicationsActivityInstances: (applicationId: Snowflake, instanceId: string) =>
    `/applications/${applicationId}/activity-instances/${instanceId}`,
  applicationsEmoji: (applicationId: Snowflake, emojiId: Snowflake) =>
    `/applications/${applicationId}/emojis/${emojiId}`,
  applicationsEmojis: (applicationId: Snowflake) => `/applications/${applicationId}/emojis`,
  applicationsEntitlement: (applicationId: Snowflake, entitlementId: Snowflake) =>
    `/applications/${applicationId}/entitlements/${entitlementId}`,
  applicationsEntitlements: (applicationId: Snowflake) => `/applications/${applicationId}/entitlements`,
  applicationsEntitlementsConsume: (applicationId: Snowflake, entitlementId: Snowflake) =>
    `/applications/${applicationId}/entitlements/${entitlementId}/consume`,
  applicationsMe: () => "/applications/@me",
  applicationsRoleConnectionsMetadata: (applicationId: Snowflake) =>
    `/applications/${applicationId}/role-connections/metadata`,
  applicationsSkus: (applicationId: Snowflake) => `/applications/${applicationId}/skus`,
};

const ChannelRoutes = {
  channel: (channelId: Snowflake) => `/channels/${channelId}`,
  channelMessagesReactions: (channelId: Snowflake, messageId: Snowflake) =>
    `/channels/${channelId}/messages/${messageId}/reactions`,
  channelsFollowers: (channelId: Snowflake) => `/channels/${channelId}/followers`,
  channelsInvites: (channelId: Snowflake) => `/channels/${channelId}/invites`,
  channelsMessage: (channelId: Snowflake, messageId: Snowflake) => `/channels/${channelId}/messages/${messageId}`,
  channelsMessages: (channelId: Snowflake) => `/channels/${channelId}/messages`,
  channelsMessagesBulkDelete: (channelId: Snowflake) => `/channels/${channelId}/messages/bulk-delete`,
  channelsMessagesCrosspost: (channelId: Snowflake, messageId: Snowflake) =>
    `/channels/${channelId}/messages/${messageId}/crosspost`,
  channelsMessagesReaction: (channelId: Snowflake, messageId: Snowflake, emoji: string) =>
    `/channels/${channelId}/messages/${messageId}/reactions/${emoji}`,
  channelsMessagesReactionsMe: (channelId: Snowflake, messageId: Snowflake, emoji: string) =>
    `/channels/${channelId}/messages/${messageId}/reactions/${emoji}/@me`,
  channelsMessagesReactionsUser: (channelId: Snowflake, messageId: Snowflake, emoji: string, userId: Snowflake) =>
    `/channels/${channelId}/messages/${messageId}/reactions/${emoji}/${userId}`,
  channelsMessagesThreads: (channelId: Snowflake, messageId: Snowflake) =>
    `/channels/${channelId}/messages/${messageId}/threads`,
  channelsPermissions: (channelId: Snowflake, overwriteId: Snowflake) =>
    `/channels/${channelId}/permissions/${overwriteId}`,
  channelsPin: (channelId: Snowflake, messageId: Snowflake) => `/channels/${channelId}/pins/${messageId}`,
  channelsPins: (channelId: Snowflake) => `/channels/${channelId}/pins`,
  channelsPollsAnswer: (channelId: Snowflake, messageId: Snowflake, answerId: string) =>
    `/channels/${channelId}/polls/${messageId}/answers/${answerId}`,
  channelsPollsExpire: (channelId: Snowflake, messageId: Snowflake) =>
    `/channels/${channelId}/polls/${messageId}/expire`,
  channelsRecipients: (channelId: Snowflake, userId: Snowflake) => `/channels/${channelId}/recipients/${userId}`,
  channelsSendSoundboardSound: (channelId: Snowflake) => `/channels/${channelId}/send-soundboard-sound`,
  channelsThreadMember: (channelId: Snowflake, userId: Snowflake) => `/channels/${channelId}/thread-members/${userId}`,
  channelsThreadMembers: (channelId: Snowflake) => `/channels/${channelId}/thread-members`,
  channelsThreadMembersMe: (channelId: Snowflake) => `/channels/${channelId}/thread-members/@me`,
  channelsThreads: (channelId: Snowflake) => `/channels/${channelId}/threads`,
  channelsThreadsArchivedPrivate: (channelId: Snowflake) => `/channels/${channelId}/threads/archived/private`,
  channelsThreadsArchivedPublic: (channelId: Snowflake) => `/channels/${channelId}/threads/archived/public`,
  channelsTyping: (channelId: Snowflake) => `/channels/${channelId}/typing`,
  channelsUsersMeThreadsArchivedPrivate: (channelId: Snowflake) =>
    `/channels/${channelId}/users/@me/threads/archived/private`,
  channelsWebhooks: (channelId: Snowflake) => `/channels/${channelId}/webhooks`,
};

const GuildRoutes = {
  guild: (guildId: Snowflake) => `/guilds/${guildId}`,
  guilds: () => "/guilds",
  guildsAuditLogs: (guildId: Snowflake) => `/guilds/${guildId}/audit-logs`,
  guildsAutoModerationRule: (guildId: Snowflake, ruleId: Snowflake) =>
    `/guilds/${guildId}/auto-moderation/rules/${ruleId}`,
  guildsAutoModerationRules: (guildId: Snowflake) => `/guilds/${guildId}/auto-moderation/rules`,
  guildsBan: (guildId: Snowflake, userId: Snowflake) => `/guilds/${guildId}/bans/${userId}`,
  guildsBans: (guildId: Snowflake) => `/guilds/${guildId}/bans`,
  guildsBulkBan: (guildId: Snowflake) => `/guilds/${guildId}/bulk-ban`,
  guildsChannels: (guildId: Snowflake) => `/guilds/${guildId}/channels`,
  guildsEmoji: (guildId: Snowflake, emojiId: Snowflake) => `/guilds/${guildId}/emojis/${emojiId}`,
  guildsEmojis: (guildId: Snowflake) => `/guilds/${guildId}/emojis`,
  guildsIncidentActions: (guildId: Snowflake) => `/guilds/${guildId}/incident-actions`,
  guildsIntegration: (guildId: Snowflake, integrationId: Snowflake) =>
    `/guilds/${guildId}/integrations/${integrationId}`,
  guildsIntegrations: (guildId: Snowflake) => `/guilds/${guildId}/integrations`,
  guildsInvites: (guildId: Snowflake) => `/guilds/${guildId}/invites`,
  guildsMember: (guildId: Snowflake, userId: Snowflake) => `/guilds/${guildId}/members/${userId}`,
  guildsMembers: (guildId: Snowflake) => `/guilds/${guildId}/members`,
  guildsMembersMe: (guildId: Snowflake) => `/guilds/${guildId}/members/@me`,
  guildsMembersRoles: (guildId: Snowflake, userId: Snowflake, roleId: Snowflake) =>
    `/guilds/${guildId}/members/${userId}/roles/${roleId}`,
  guildsMembersSearch: (guildId: Snowflake) => `/guilds/${guildId}/members/search`,
  guildsMfa: (guildId: Snowflake) => `/guilds/${guildId}/mfa`,
  guildsOnboarding: (guildId: Snowflake) => `/guilds/${guildId}/onboarding`,
  guildsPreview: (guildId: Snowflake) => `/guilds/${guildId}/preview`,
  guildsPrune: (guildId: Snowflake) => `/guilds/${guildId}/prune`,
  guildsRegions: (guildId: Snowflake) => `/guilds/${guildId}/regions`,
  guildsRole: (guildId: Snowflake, roleId: Snowflake) => `/guilds/${guildId}/roles/${roleId}`,
  guildsRoles: (guildId: Snowflake) => `/guilds/${guildId}/roles`,
  guildsScheduledEvent: (guildId: Snowflake, scheduledEventId: Snowflake) =>
    `/guilds/${guildId}/scheduled-events/${scheduledEventId}`,
  guildsScheduledEvents: (guildId: Snowflake) => `/guilds/${guildId}/scheduled-events`,
  guildsScheduledEventUsers: (guildId: Snowflake, scheduledEventId: Snowflake) =>
    `/guilds/${guildId}/scheduled-events/${scheduledEventId}/users`,
  guildsSoundboardSound: (guildId: Snowflake, soundId: Snowflake) => `/guilds/${guildId}/soundboard-sounds/${soundId}`,
  guildsSoundboardSounds: (guildId: Snowflake) => `/guilds/${guildId}/soundboard-sounds`,
  guildsSticker: (guildId: Snowflake, stickerId: Snowflake) => `/guilds/${guildId}/stickers/${stickerId}`,
  guildsStickers: (guildId: Snowflake) => `/guilds/${guildId}/stickers`,
  guildsTemplate: (guildId: Snowflake, templateCode: string) => `/guilds/${guildId}/templates/${templateCode}`,
  guildsTemplates: (guildId: Snowflake) => `/guilds/${guildId}/templates`,
  guildsThreadsActive: (guildId: Snowflake) => `/guilds/${guildId}/threads/active`,
  guildsVanityUrl: (guildId: Snowflake) => `/guilds/${guildId}/vanity-url`,
  guildsVoiceState: (guildId: Snowflake, userId: Snowflake) => `/guilds/${guildId}/voice-states/${userId}`,
  guildsVoiceStatesMe: (guildId: Snowflake) => `/guilds/${guildId}/voice-states/@me`,
  guildsWebhooks: (guildId: Snowflake) => `/guilds/${guildId}/webhooks`,
  guildsWelcomeScreen: (guildId: Snowflake) => `/guilds/${guildId}/welcome-screen`,
  guildsWidget: (guildId: Snowflake) => `/guilds/${guildId}/widget`,
  guildsWidgetJSON: (guildId: Snowflake) => `/guilds/${guildId}/widget.json`,
  guildsWidgetPNG: (guildId: Snowflake) => `/guilds/${guildId}/widget.png`,
};

const InviteRoutes = {
  invite: (inviteCode: string) => `/invites/${inviteCode}`,
};

const LobbyRoutes = {
  lobbies: () => "/lobbies",
  lobbiesChannelLinking: (lobbyId: Snowflake) => `/lobbies/${lobbyId}/channel-linking`,
  lobbiesLobby: (lobbyId: Snowflake) => `/lobbies/${lobbyId}`,
  lobbiesMembers: (lobbyId: Snowflake) => `/lobbies/${lobbyId}/members`,
};

const MiscellaneousRoutes = {
  gateway: () => "/gateway",
  gatewayBot: () => "/gateway/bot",
  interactionsCallback: (interactionId: Snowflake, interactionToken: string) =>
    `/interactions/${interactionId}/${interactionToken}/callback`,
  soundboardDefaultSounds: () => "/soundboard/default-sounds",
  voiceRegions: () => "/voice/regions",
};

const SkuRoutes = {
  skusSubscription: (skuId: Snowflake, subscriptionId: Snowflake) => `/skus/${skuId}/subscriptions/${subscriptionId}`,
  skusSubscriptions: (skuId: Snowflake) => `/skus/${skuId}/subscriptions`,
};

const StageInstanceRoutes = {
  stageInstance: (stageInstanceId: Snowflake) => `/stage-instances/${stageInstanceId}`,
  stageInstances: () => "/stage-instances",
};

const StickerRoutes = {
  sticker: (stickerId: Snowflake) => `/stickers/${stickerId}`,
  stickerPack: (stickerPackId: Snowflake) => `/sticker-packs/${stickerPackId}`,
  stickerPacks: () => "/sticker-packs",
};

const UserRoutes = {
  user: (userId: Snowflake) => `/users/${userId}`,
  usersMe: () => "/users/@me",
  usersMeApplicationsRoleConnection: (applicationId: Snowflake) =>
    `/users/@me/applications/${applicationId}/role-connection`,
  usersMeChannels: () => "/users/@me/channels",
  usersMeConnections: () => "/users/@me/connections",
  usersMeGuild: (guildId: Snowflake) => `/users/@me/guilds/${guildId}`,
  usersMeGuilds: () => "/users/@me/guilds",
  usersMeGuildsMember: (guildId: Snowflake) => `/users/@me/guilds/${guildId}/member`,
};

const WebhookRoutes = {
  webhook: (webhookId: Snowflake) => `/webhooks/${webhookId}`,
  webhooks: (webhookId: Snowflake, webhookToken: string) => `/webhooks/${webhookId}/${webhookToken}`,
  webhooksGitHub: (webhookId: Snowflake, webhookToken: string) => `/webhooks/${webhookId}/${webhookToken}/github`,
  webhooksMessage: (webhookId: Snowflake, webhookToken: string, messageId: Snowflake) =>
    `/webhooks/${webhookId}/${webhookToken}/messages/${messageId}`,
  webhooksMessagesInteraction: (applicationId: Snowflake, interactionToken: string, messageId: Snowflake) =>
    `/webhooks/${applicationId}/${interactionToken}/messages/${messageId}`,
  webhooksMessagesOriginal: (webhookId: Snowflake, webhookToken: string) =>
    `/webhooks/${webhookId}/${webhookToken}/messages//original`,
  webhooksSlack: (webhookId: Snowflake, webhookToken: string) => `/webhooks/${webhookId}/${webhookToken}/slack`,
};

export const Routes = {
  ...ApplicationRoutes,
  ...ChannelRoutes,
  ...GuildRoutes,
  ...InviteRoutes,
  ...LobbyRoutes,
  ...MiscellaneousRoutes,
  ...SkuRoutes,
  ...StageInstanceRoutes,
  ...StickerRoutes,
  ...UserRoutes,
  ...WebhookRoutes,
};
