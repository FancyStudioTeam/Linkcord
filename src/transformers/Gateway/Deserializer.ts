import type { APIGatewayBot, APIGatewayBotSessionStartLimit, GatewayBot, GatewayBotSessionStartLimit } from '#types/index.js';

/**
 * @see https://discord.com/developers/docs/events/gateway#get-gateway-bot-json-response
 */
export function deserializeGatewayBot(gatewayBot: APIGatewayBot): GatewayBot {
	return {
		sessionStartLimit: deserializeGatewayBotSessionStartLimit(gatewayBot.session_start_limit),
		shards: gatewayBot.shards,
		url: gatewayBot.url,
	};
}

/**
 * @see https://discord.com/developers/docs/events/gateway#session-start-limit-object-session-start-limit-structure
 */
export function deserializeGatewayBotSessionStartLimit(
	gatewayBotSessionStartLimit: APIGatewayBotSessionStartLimit,
): GatewayBotSessionStartLimit {
	return {
		maxConcurrency: gatewayBotSessionStartLimit.max_concurrency,
		remaining: gatewayBotSessionStartLimit.remaining,
		resetAfter: gatewayBotSessionStartLimit.reset_after,
		total: gatewayBotSessionStartLimit.total,
	};
}
