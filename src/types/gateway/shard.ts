export interface ShardEvents {
  hello: [heartbeatInterval: number];
  debug: [message: string];
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
