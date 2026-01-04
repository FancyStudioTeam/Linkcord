import type { GatewayBot, GatewayBotSessionStartLimit, RawGatewayBot, RawGatewayBotSessionStartLimit } from '#types/index.js';

/**
 * @see https://discord.com/developers/docs/events/gateway#get-gateway-bot-json-response
 */
export function deserializeGatewayBot(rawGatewayBot: RawGatewayBot): GatewayBot {
	const { session_start_limit, shards, url } = rawGatewayBot;
	const gatewayBot: GatewayBot = {
		sessionStartLimit: deserializeGatewayBotSessionStartLimit(session_start_limit),
		shards,
		url,
	};

	return gatewayBot;
}

/**
 * @see https://discord.com/developers/docs/events/gateway#session-start-limit-object-session-start-limit-structure
 */
export function deserializeGatewayBotSessionStartLimit(
	rawGatewayBotSessionStartLimit: RawGatewayBotSessionStartLimit,
): GatewayBotSessionStartLimit {
	const { max_concurrency, remaining, reset_after, total } = rawGatewayBotSessionStartLimit;
	const gatewayBotSessionStartLimit: GatewayBotSessionStartLimit = {
		maxConcurrency: max_concurrency,
		remaining,
		resetAfter: reset_after,
		total,
	};

	return gatewayBotSessionStartLimit;
}
