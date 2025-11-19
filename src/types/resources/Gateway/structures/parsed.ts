/**
 * @see https://discord.com/developers/docs/topics/gateway#get-gateway
 */
export interface Gateway {
	url: string;
}

/**
 * @see https://discord.com/developers/docs/events/gateway#get-gateway-bot-example-response
 */
export interface GatewayBot extends Gateway {
	shards: number;
	sessionStartLimit: GatewayBotSessionStartLimit;
}

/**
 * @see https://discord.com/developers/docs/events/gateway#session-start-limit-object-session-start-limit-structure
 */
export interface GatewayBotSessionStartLimit {
	maxConcurrency: number;
	remaining: number;
	resetAfter: number;
	total: number;
}
