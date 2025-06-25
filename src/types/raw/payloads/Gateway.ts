/**
 * @public
 * @see https://discord.com/developers/docs/topics/gateway#get-gateway
 */
export interface APIGateway {
  url: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway#get-gateway-bot
 */
export interface APIGatewayBot {
  shards: number;
  session_start_limit: APIGatewayBotSessionStartLimit;
  url: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway#session-start-limit-object-session-start-limit-structure
 */
export interface APIGatewayBotSessionStartLimit {
  max_concurrency: number;
  remaining: number;
  reset_after: number;
  total: number;
}
