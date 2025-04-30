import type { APIGateway, APIGatewayBot } from "#payloads";

/**
 * @see https://discord.com/developers/docs/events/gateway#get-gateway
 */
export type RESTGetGateway = APIGateway;

/**
 * @see https://discord.com/developers/docs/events/gateway#get-gateway-bot
 */
export type RESTGetGatewayBot = APIGatewayBot;
