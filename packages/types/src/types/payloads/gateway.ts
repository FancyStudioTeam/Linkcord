/**
 * Represents a Discord gateway structure.
 * @see https://discord.com/developers/docs/topics/gateway#get-gateway
 */
export interface APIGateway {
  /** A gateway url which can be used to connect the bot to the gateway. */
  url: string;
}

/**
 * Represents a Discord gateway bot structure.
 * @see https://discord.com/developers/docs/events/gateway#get-gateway-bot
 */
export interface APIGatewayBot extends APIGateway {
  /** The recommended number of shards to use. */
  shards: number;
  /** An object containing information about the session start limit. */
  session_start_limit: APIGatewayBotSessionStartLimit;
}

/**
 * Represents a Discord gateway bot session start limit structure.
 * @see https://discord.com/developers/docs/events/gateway#session-start-limit-object-session-start-limit-structure
 */
export interface APIGatewayBotSessionStartLimit {
  /** The number of `Identify` request allowed per 5 seconds. */
  max_concurrency: number;
  /** The number of remaining sessions the bot can start. */
  remaining: number;
  /** The time in seconds after which the limit resets. */
  reset_after: number;
  /** The total number of sessions the bot can start. */
  total: number;
}
