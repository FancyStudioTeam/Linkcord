import type { APIGateway, APIGatewayBot } from "#types";

/**
 * ==========================================================
 * = Result - Represent the returned data from the request. =
 * ==========================================================
 */

/**
 * https://discord.com/developers/docs/events/gateway#get-gateway-bot
 */
export type RESTGetGatewayBotResult = APIGatewayBot;

/**
 * https://discord.com/developers/docs/events/gateway#get-gateway
 */
export type RESTGetGatewayResult = APIGateway;
