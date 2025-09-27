import type {
	APIGatewayBot,
	APIGatewayBotSessionStartLimit,
	GatewayBot,
	GatewayBotSessionStartLimit,
} from "#types/index.js";

/**
 * Parses the given {@link APIGatewayBotSessionStartLimit | `APIGatewayBotSessionStartLimit`} object into a {@link GatewayBotSessionStartLimit | `GatewayBotSessionStartLimit`} object.
 *
 * @param sessionStartLimit - The {@link APIGatewayBotSessionStartLimit | `APIGatewayBotSessionStartLimit`} object to parse.
 * @returns The parsed {@link GatewayBotSessionStartLimit | `GatewayBotSessionStartLimit`} object.
 *
 * @group Transformers/Messages
 */
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

/**
 * Parses the given {@link APIGatewayBot | `APIGatewayBot`} object into a {@link GatewayBot | `GatewayBot`} object.
 *
 * @param gatewayBot - The {@link APIGatewayBot | `APIGatewayBot`} object to parse.
 * @returns The parsed {@link GatewayBot | `GatewayBot`} object.
 *
 * @group Transformers/Messages
 */
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
