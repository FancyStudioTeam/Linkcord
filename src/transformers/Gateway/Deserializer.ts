import type {
	APIGatewayBot,
	APIGatewayBotSessionStartLimit,
	GatewayBot,
	GatewayBotSessionStartLimit,
} from "#types/index.js";

/**
 * @see https://discord.com/developers/docs/events/gateway#get-gateway-bot-json-response
 */
export function deserializeGatewayBot(serializedGatewayBot: APIGatewayBot): GatewayBot {
	const { session_start_limit, shards, url } = serializedGatewayBot;
	const deserializedGatewayBot: GatewayBot = {
		sessionStartLimit: deserializeGatewayBotSessionStartLimit(session_start_limit),
		shards,
		url,
	};

	return deserializedGatewayBot;
}

/**
 * @see https://discord.com/developers/docs/events/gateway#session-start-limit-object-session-start-limit-structure
 */
export function deserializeGatewayBotSessionStartLimit(
	serializedGatewayBotSessionStartLimit: APIGatewayBotSessionStartLimit,
): GatewayBotSessionStartLimit {
	const { max_concurrency, remaining, reset_after, total } = serializedGatewayBotSessionStartLimit;
	const deserializedGatewayBotSessionStartLimit: GatewayBotSessionStartLimit = {
		maxConcurrency: max_concurrency,
		remaining,
		resetAfter: reset_after,
		total,
	};

	return deserializedGatewayBotSessionStartLimit;
}
