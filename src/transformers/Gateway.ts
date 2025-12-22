import type {
	APIGatewayBot,
	APIGatewayBotSessionStartLimit,
	GatewayBot,
	GatewayBotSessionStartLimit,
} from "#types/index.js";

export function parseGatewayBot(gatewayBot: APIGatewayBot): GatewayBot {
	const { session_start_limit: sessionStartLimit, shards, url } = gatewayBot;
	const parsedGatewayBot: GatewayBot = {
		sessionStartLimit: parseGatewayBotSessionStartLimit(sessionStartLimit),
		shards,
		url,
	};

	return parsedGatewayBot;
}

export function parseGatewayBotSessionStartLimit(
	sessionStartLimit: APIGatewayBotSessionStartLimit,
): GatewayBotSessionStartLimit {
	const { max_concurrency: maxConcurrency, remaining, reset_after: resetAfter, total } = sessionStartLimit;
	const parsedSessionStartLimit: GatewayBotSessionStartLimit = {
		maxConcurrency,
		remaining,
		resetAfter,
		total,
	};

	return parsedSessionStartLimit;
}
