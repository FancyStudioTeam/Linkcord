/**
 * https://discord.com/developers/docs/events/gateway#get-gateway-bot
 */
export interface DiscordGatewayBot {
  /** The session start limit object. */
  // biome-ignore lint/style/useNamingConvention: Discord properties are snake cased.
  session_start_limit: DiscordGatewayBotSessionStartLimit;
  /** The recommended number of shards to spawn. */
  shards: number;
  /** A Discord gateway url that can be used to connect the shards. */
  url: string;
}

/**
 * https://discord.com/developers/docs/events/gateway#session-start-limit-object
 */
export interface DiscordGatewayBotSessionStartLimit {
  /** The amount of "Identify" payloads allowed per 5 seconds. */
  // biome-ignore lint/style/useNamingConvention: Discord properties are snake cased.
  max_concurrency: number;
  /** The maximum amount of sessions that the bot can start. */
  total: number;
  /** The remaining amount of sessions that the bot can start. */
  remaining: number;
  /** The time in milliseconds until the session start limit resets. */
  // biome-ignore lint/style/useNamingConvention: Discord properties are snake cased.
  reset_after: number;
}

/**
 * https://discord.com/developers/docs/events/gateway#get-gateway-bot
 */
export interface GatewayBot {
  /** The session start limit object. */
  sessionStartLimit: GatewayBotSessionStartLimit;
  /** The recommended number of shards to spawn. */
  shards: number;
  /** A Discord gateway url that can be used to connect the shards. */
  url: string;
}

/**
 * https://discord.com/developers/docs/events/gateway#session-start-limit-object
 */
export interface GatewayBotSessionStartLimit {
  /** The amount of "Identify" payloads allowed per 5 seconds. */
  maxConcurrency: number;
  /** The maximum amount of sessions that the bot can start. */
  total: number;
  /** The remaining amount of sessions that the bot can start. */
  remaining: number;
  /** The time in milliseconds until the session start limit resets. */
  resetAfter: number;
}
