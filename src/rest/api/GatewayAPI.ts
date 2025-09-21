import { Endpoints } from "#rest/endpoints/Endpoints.js";
import { parseGatewayBot } from "#transformers/Gateway.js";
import type { Gateway, GatewayBot, RESTGetAPIGateway, RESTGetAPIGatewayBot } from "#types/index.js";
import { BaseAPI } from "./BaseAPI.js";

/**
 * API class that handles all request related to `/gateway` endpoints.
 * @group REST/API
 */
export class GatewayAPI extends BaseAPI {
	/**
	 * Performs a {@link RESTGetAPIGateway | `GET /gateway`} request to the Discord API.
	 *
	 * @returns The parsed {@link Gateway | `Gateway`} object.
	 * @see https://discord.com/developers/docs/events/gateway#get-gateway
	 */
	async getGateway(): Promise<Gateway> {
		const gatewayResponseData = await super.get<RESTGetAPIGateway>(Endpoints.gateway(), {
			withAuthorization: false,
		});

		return gatewayResponseData;
	}

	/**
	 * Performs a {@link RESTGetAPIGatewayBot | `GET /gateway/bot`} request to the Discord API.
	 *
	 * @returns The parsed {@link GatewayBot | `GatewayBot`} object.
	 * @see https://discord.com/developers/docs/events/gateway#get-gateway-bot
	 */
	async getGatewayBot(): Promise<GatewayBot> {
		const gatewayBotResponseData = await super.get<RESTGetAPIGatewayBot>(Endpoints.gatewayBot());
		const gatewayBotData = parseGatewayBot(gatewayBotResponseData);

		return gatewayBotData;
	}
}
