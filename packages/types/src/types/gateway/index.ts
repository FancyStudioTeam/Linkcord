export * from "./event.js";

/**
 * https://discord.com/developers/docs/events/gateway#list-of-intents
 */
export enum GatewayIntents {
  AutoModerationConfiguration = 1 << 20,
  AutoModerationExecution = 1 << 21,
  DirectMessagePolls = 1 << 25,
  DirectMessageReactions = 1 << 13,
  DirectMessageTyping = 1 << 14,
  DirectMessages = 1 << 12,
  GuildExpressions = 1 << 3,
  GuildIntegrations = 1 << 4,
  GuildInvites = 1 << 6,
  GuildMembers = 1 << 1,
  GuildMessagePolls = 1 << 24,
  GuildMessageReactions = 1 << 10,
  GuildMessageTyping = 1 << 11,
  GuildMessages = 1 << 9,
  GuildModeration = 1 << 2,
  GuildPresences = 1 << 8,
  GuildScheduledEvents = 1 << 16,
  GuildVoiceStates = 1 << 7,
  GuildWebhooks = 1 << 5,
  Guilds = 1 << 0,
  MessageContent = 1 << 15,
}
