export enum GatewayDispatchEventType {
  GuildCreate = "GUILD_CREATE",
  MessageCreate = "MESSAGE_CREATE",
}

export enum GatewayOpcodes {
  Dispatch = 0,
  Heartbeat = 1,
  Identify = 2,
  StatusUpdate = 3,
  Resume = 6,
  Reconnect = 7,
  RequestGuildMembers = 8,
  InvalidSession = 9,
  Hello = 10,
  HeartbeatAck = 11,
  RequestSoundboardSounds = 31,
}

export enum ShardStatus {
  Connecting = "Connecting",
  Disconnected = "Disconnected",
  GatewayOpened = "GatewayOpened",
  Handshaking = "Handshaking",
  Identifying = "Identifying",
  Ready = "Ready",
  Resuming = "Resuming",
}
