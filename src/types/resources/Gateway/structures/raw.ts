/**
 * Represents a Discord gateway object.
 * @see https://discord.com/developers/docs/topics/gateway#get-gateway
 */
export interface APIGateway {
	/** The URL of the Discord gateway. */
	url: string;
}

/**
 * Represents a Discord gateway bot object.
 * @see https://discord.com/developers/docs/events/gateway#get-gateway-bot-example-response
 */
export interface APIGatewayBot {
	/** The recommended number of shards to use when connecting to the gateway. */
	shards: number;
	/** The information about the session start limit. */
	session_start_limit: APIGatewayBotSessionStartLimit;
	/** The URL of the Discord gateway. */
	url: string;
}

/**
 * Represents a Discord gateway bot session start limit object.
 * @see https://discord.com/developers/docs/events/gateway#session-start-limit-object-session-start-limit-structure
 */
export interface APIGatewayBotSessionStartLimit {
	/** The maximum number of concurrent `IDENTIFY` requests that can be sent to the Discord gateway every 5 seconds. */
	max_concurrency: number;
	/** The remaining number of sessions that can be started. */
	remaining: number;
	/** The number of milliseconds in which the limit will be reset. */
	reset_after: number;
	/** The total number of sessions that can be started. */
	total: number;
}
