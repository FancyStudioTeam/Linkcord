import type {
	APIGatewayBot,
	APIGatewayBotSessionStartLimit,
	GatewayBot,
	GatewayBotSessionStartLimit,
} from "#types/index.js";

/**
 * Transforms an {@link APIGatewayBot} object into a {@link GatewayBot} object.
 */
export function deserializeGatewayBot(serializedGatewayBot: APIGatewayBot): GatewayBot {
	const { session_start_limit: sessionStartLimit, shards, url } = serializedGatewayBot;
	const deserializedGatewayBot: GatewayBot = {
		sessionStartLimit: deserializeGatewayBotSessionStartLimit(sessionStartLimit),
		shards,
		url,
	};

	return deserializedGatewayBot;
}

/**
 * Transforms an {@link APIGatewayBotSessionStartLimit} object into a {@link GatewayBotSessionStartLimit} object.
 */
export function deserializeGatewayBotSessionStartLimit(
	serializedGatewayBotSessionStartLimit: APIGatewayBotSessionStartLimit,
): GatewayBotSessionStartLimit {
	const {
		max_concurrency: maxConcurrency,
		remaining,
		reset_after: resetAfter,
		total,
	} = serializedGatewayBotSessionStartLimit;
	const deserializedGatewayBotSessionStartLimit: GatewayBotSessionStartLimit = {
		maxConcurrency,
		remaining,
		resetAfter,
		total,
	};

	return deserializedGatewayBotSessionStartLimit;
}
