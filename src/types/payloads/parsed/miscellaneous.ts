/**
 * =============================================================================
 * = Parsed Payloads - Represent the transformed data from the "Raw Payloads". =
 * =============================================================================
 */

/**
 * https://discord.com/developers/docs/events/gateway#get-gateway-example-response
 */
export interface Gateway {
  url: string;
}

/**
 * https://discord.com/developers/docs/events/gateway#get-gateway-bot-json-response
 */
export interface GatewayBot {
  sessionStartLimit: GatewayBotSessionStartLimit;
  shards: number;
  url: string;
}

/**
 * https://discord.com/developers/docs/events/gateway#session-start-limit-object-session-start-limit-structure
 */
export interface GatewayBotSessionStartLimit {
  maxConcurrency: number;
  remaining: number;
  resetAfter: number;
  total: number;
}
