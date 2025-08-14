import type { APIGateway, APIGatewayBot } from "../structures/raw.js";

/**
 * Represents the response of the
 * @see https://discord.com/developers/docs/events/gateway#get-gateway
 */
export type RESTGetGateway = APIGateway;

/**
 * Represents the response of the {@link APIGatewayBot | `GET /gateway/bot`} endpoint.
 * @see https://discord.com/developers/docs/events/gateway#get-gateway-bot
 */
export type RESTGetGatewayBot = APIGatewayBot;
