import type { APIGateway, APIGatewayBot } from "../structures/raw.js";

/**
 * @see https://discord.com/developers/docs/events/gateway#get-gateway
 */
export type RESTGetAPIGateway = APIGateway;

/**
 * @see https://discord.com/developers/docs/events/gateway#get-gateway-bot
 */
export type RESTGetAPIGatewayBot = APIGatewayBot;
