/**
 * ====================================================================
 * = Raw Payloads - Represent the received data from the Discord API. =
 * ====================================================================
 */

/**
 * https://discord.com/developers/docs/events/gateway#get-gateway-example-response
 */
export interface APIGateway {
  url: string;
}

/**
 * https://discord.com/developers/docs/events/gateway#get-gateway-bot-json-response
 */
export interface APIGatewayBot {
  session_start_limit: APIGatewayBotSessionStartLimit;
  shards: number;
  url: string;
}

/**
 * https://discord.com/developers/docs/events/gateway#session-start-limit-object-session-start-limit-structure
 */
export interface APIGatewayBotSessionStartLimit {
  max_concurrency: number;
  remaining: number;
  reset_after: number;
  total: number;
}
