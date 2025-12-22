import type {
	APIGatewayBot,
	APIGatewayBotSessionStartLimit,
	GatewayBot,
	GatewayBotSessionStartLimit,
} from "#types/index.js";

export function deserializeGatewayBot(serializedGatewayBot: APIGatewayBot): GatewayBot {
	const { session_start_limit: sessionStartLimit, shards, url } = serializedGatewayBot;

	const deserializedGatewayBot: GatewayBot = {
		sessionStartLimit: deserializeGatewayBotSessionStartLimit(sessionStartLimit),
		shards,
		url,
	};

	return deserializedGatewayBot;
}

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
