import type {
	APIGatewayBot,
	APIGatewayBotSessionStartLimit,
	GatewayBot,
	GatewayBotSessionStartLimit,
} from "#types/index.js";

export function deserializeGatewayBot(serializedGatewayBot: APIGatewayBot): GatewayBot {
	const { session_start_limit, shards, url } = serializedGatewayBot;
	const deserializedGatewayBot: GatewayBot = {
		sessionStartLimit: deserializeGatewayBotSessionStartLimit(session_start_limit),
		shards,
		url,
	};

	return deserializedGatewayBot;
}

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
