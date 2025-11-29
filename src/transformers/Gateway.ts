import type {
	APIGatewayBot,
	APIGatewayBotSessionStartLimit,
	GatewayBot,
	GatewayBotSessionStartLimit,
} from "#types/index.js";

export function parseGatewayBot(gatewayBot: APIGatewayBot): GatewayBot {
	const { session_start_limit: sessionStartLimit, shards, url } = gatewayBot;
	const sessionStartLimitData = parseGatewayBotSessionStartLimit(sessionStartLimit);
	const gatewayBotData: GatewayBot = {
		sessionStartLimit: sessionStartLimitData,
		shards,
		url,
	};

	return gatewayBotData;
}

export function parseGatewayBotSessionStartLimit(
	sessionStartLimit: APIGatewayBotSessionStartLimit,
): GatewayBotSessionStartLimit {
	const { max_concurrency: maxConcurrency, remaining, reset_after: resetAfter, total } = sessionStartLimit;
	const sessionStartLimitData: GatewayBotSessionStartLimit = {
		maxConcurrency,
		remaining,
		resetAfter,
		total,
	};

	return sessionStartLimitData;
}
