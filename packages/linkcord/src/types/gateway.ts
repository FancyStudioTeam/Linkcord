/**
 * Represents a parsed gateway structure.
 * @see https://discord.com/developers/docs/topics/gateway#get-gateway
 */
export interface Gateway {
  /** A gateway url which can be used to connect the bot to the gateway. */
  url: string;
}

/**
 * Represents a parsed gateway bot structure.
 * @see https://discord.com/developers/docs/events/gateway#get-gateway-bot
 */
export interface GatewayBot extends Gateway {
  /** The recommended number of shards to use. */
  shards: number;
  /** An object containing information about the session start limit. */
  sessionStartLimit: GatewayBotSessionStartLimit;
}

/**
 * Represents a parsed gateway bot session start limit structure.
 * @see https://discord.com/developers/docs/events/gateway#session-start-limit-object-session-start-limit-structure
 */
export interface GatewayBotSessionStartLimit {
  /** The number of `Identify` request allowed per 5 seconds. */
  maxConcurrency: number;
  /** The number of remaining sessions the bot can start. */
  remaining: number;
  /** The time in seconds after which the limit resets. */
  resetAfter: number;
  /** The total number of sessions the bot can start. */
  total: number;
}
