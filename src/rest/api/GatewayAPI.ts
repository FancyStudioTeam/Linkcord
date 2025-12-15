import { GATEWAY_BOT_ENDPOINT, GATEWAY_ENDPOINT } from "#rest/endpoints/Endpoints.js";
import { parseGatewayBot } from "#transformers/Gateway.js";
import type { Gateway, GatewayBot, RESTGetAPIGateway, RESTGetAPIGatewayBot } from "#types/index.js";
import { BaseAPI } from "./BaseAPI.js";

export class GatewayAPI extends BaseAPI {
	/**
	 * @see https://discord.com/developers/docs/events/gateway#get-gateway
	 */
	async getGateway(): Promise<Gateway> {
		const gatewayResponseData = await super.get<RESTGetAPIGateway>(GATEWAY_ENDPOINT(), {
			withAuthorization: false,
		});

		return gatewayResponseData;
	}

	/**
	 * @see https://discord.com/developers/docs/events/gateway#get-gateway-bot
	 */
	async getGatewayBot(): Promise<GatewayBot> {
		const gatewayBotResponseData = await super.get<RESTGetAPIGatewayBot>(GATEWAY_BOT_ENDPOINT());
		const gatewayBotData = parseGatewayBot(gatewayBotResponseData);

		return gatewayBotData;
	}
}
