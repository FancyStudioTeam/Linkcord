import type { APIGateway, APIGatewayBot } from "../structures/raw.js";

/**
 * Represents the response of the {@link RESTGetAPIGateway | `GET /gateway`} endpoint.
 * @see https://discord.com/developers/docs/events/gateway#get-gateway
 */
export type RESTGetAPIGateway = APIGateway;

/**
 * Represents the response of the {@link RESTGetAPIGatewayBot | `GET /gateway/bot`} endpoint.
 * @see https://discord.com/developers/docs/events/gateway#get-gateway-bot
 */
export type RESTGetAPIGatewayBot = APIGatewayBot;
