import type {
	APIGateway,
	APIGatewayBot,
	APIGatewayBotSessionStartLimit,
	Gateway,
	GatewayBot,
	GatewayBotSessionStartLimit,
} from "#types/index.js";

/**
 * Transforms an {@link APIGatewayBotSessionStartLimit | `APIGatewayBotSessionStartLimit`} object into a {@link GatewayBotSessionStartLimit | `GatewayBotSessionStartLimit`} object.
 * @param sessionStartLimit - The {@link APIGatewayBotSessionStartLimit | `APIGatewayBotSessionStartLimit`} object to transform.
 * @returns The transformed {@link GatewayBotSessionStartLimit | `GatewayBotSessionStartLimit`} object.
 */
function transformGatewayBotSessionStartLimitToParsed(
	sessionStartLimit: APIGatewayBotSessionStartLimit,
): GatewayBotSessionStartLimit {
	const { max_concurrency, remaining, reset_after, total } = sessionStartLimit;

	return {
		maxConcurrency: max_concurrency,
		remaining,
		resetAfter: reset_after,
		total,
	};
}

/**
 * Transforms an {@link APIGatewayBot | `APIGatewayBot`} object into a {@link GatewayBot | `GatewayBot`} object.
 * @param gatewayBot - The {@link APIGatewayBot | `APIGatewayBot`} object to transform.
 * @returns The transformed {@link GatewayBot | `GatewayBot`} object.
 */
function transformGatewayBotToParsed(gatewayBot: APIGatewayBot): GatewayBot {
	const { session_start_limit, shards, url } = gatewayBot;
	const sessionStartLimit = transformGatewayBotSessionStartLimitToParsed(session_start_limit);

	return {
		sessionStartLimit,
		shards,
		url,
	};
}

/**
 * Transforms an {@link APIGateway | `APIGateway`} object into a {@link Gateway | `Gateway`} object.
 * @param gateway - The {@link APIGateway | `APIGateway`} object to transform.
 * @returns The transformed {@link Gateway | `Gateway`} object.
 */
function transformGatewayToParsed(gateway: APIGateway): Gateway {
	const { url } = gateway;

	return {
		url,
	};
}

/** Transformers for gateway objects. */
export const GatewayTransformer = Object.freeze({
	transformGatewayBotSessionStartLimitToParsed,
	transformGatewayBotToParsed,
	transformGatewayToParsed,
});
