import type { APIGateway, APIGatewayBot } from "#types/payloads";

/**
 * https://discord.com/developers/docs/events/gateway#get-gateway
 */
export type RESTGetGateway = APIGateway;

/**
 * https://discord.com/developers/docs/events/gateway#get-gateway-bot
 */
export type RESTGetGatewayBot = APIGatewayBot;
