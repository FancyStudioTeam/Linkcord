/**
 * @see https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes
 */
export enum OAuth2Scopes {
  ActivitiesRead = "activities.read",
  ActivitiesWrite = "activities.write",
  ApplicationsBuildsRead = "applications.builds.read",
  ApplicationsBuildsUpload = "applications.builds.upload",
  ApplicationsCommands = "applications.commands",
  ApplicationsCommandsPermissionsUpdate = "applications.commands.permissions.update",
  ApplicationsCommandsUpdate = "applications.commands.update",
  ApplicationsEntitlements = "applications.entitlements",
  ApplicationsStoreUpdate = "applications.store.update",
  Bot = "bot",
  Connections = "connections",
  DMChannelsRead = "dm_channels.read",
  Email = "email",
  GroupDMJoin = "gdm.join",
  Guilds = "guilds",
  GuildsJoin = "guilds.join",
  GuildsMembersRead = "guilds.members.read",
  Identify = "identify",
  MessagesRead = "messages.read",
  RelationshipsRead = "relationships.read",
  RoleConnectionsWrite = "role_connections.write",
  // biome-ignore lint/style/useNamingConvention:
  RPC = "rpc",
  RPCActivitiesWrite = "rpc.activities.write",
  RPCNotificationsRead = "rpc.notifications.read",
  RPCVoiceRead = "rpc.voice.read",
  RPCVoiceWrite = "rpc.voice.write",
  Voice = "voice",
  WebhookIncoming = "webhook.incoming",
}
