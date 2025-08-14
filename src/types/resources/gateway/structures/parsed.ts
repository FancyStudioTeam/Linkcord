/**
 * Represents the Discord gateway object.
 * @see https://discord.com/developers/docs/topics/gateway#get-gateway
 */
export interface Gateway {
	/** The URL of the Discord gateway. */
	url: string;
}

/**
 * Represents the Discord gateway bot object.
 * @see https://discord.com/developers/docs/events/gateway#get-gateway-bot-example-response
 */
export interface GatewayBot {
	/** The recommended number of shards to use when connecting to the gateway. */
	shards: number;
	/** The information about the session start limit. */
	sessionStartLimit: GatewayBotSessionStartLimit;
	/** The URL of the Discord gateway. */
	url: string;
}

/**
 * Represents the Discord session start limit object.
 * @see https://discord.com/developers/docs/events/gateway#session-start-limit-object-session-start-limit-structure
 */
export interface GatewayBotSessionStartLimit {
	/** The maximum number of concurrent `IDENTIFY` requests that can be sent to the Discord gateway every 5 seconds. */
	maxConcurrency: number;
	/** The remaining number of sessions that can be started. */
	remaining: number;
	/** The number of milliseconds in which the limit will be reset. */
	resetAfter: number;
	/** The total number of sessions that can be started. */
	total: number;
}
