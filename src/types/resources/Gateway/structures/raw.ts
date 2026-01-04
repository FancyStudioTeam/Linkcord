/**
 * @see https://discord.com/developers/docs/topics/gateway#get-gateway
 */
export interface RawGateway {
	url: string;
}

/**
 * @see https://discord.com/developers/docs/events/gateway#get-gateway-bot-example-response
 */
export interface RawGatewayBot {
	shards: number;
	session_start_limit: RawGatewayBotSessionStartLimit;
	url: string;
}

/**
 * @see https://discord.com/developers/docs/events/gateway#session-start-limit-object-session-start-limit-structure
 */
export interface RawGatewayBotSessionStartLimit {
	max_concurrency: number;
	remaining: number;
	reset_after: number;
	total: number;
}
