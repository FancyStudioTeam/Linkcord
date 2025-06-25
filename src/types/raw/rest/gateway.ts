import type { APIGateway, APIGatewayBot } from "../payloads/Gateway.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway#get-gateway
 */
export type RESTGetGateway = APIGateway;

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway#get-gateway-bot
 */
export type RESTGetGatewayBot = APIGatewayBot;
