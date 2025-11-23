import { Endpoints } from "#rest/endpoints/Endpoints.js";
import { parseGatewayBot } from "#transformers/Gateway.js";
import type { Gateway, GatewayBot, RESTGetAPIGateway, RESTGetAPIGatewayBot } from "#types/index.js";
import { BaseAPI } from "./BaseAPI.js";

const { gateway, gatewayBot } = Endpoints;

export class GatewayAPI extends BaseAPI {
	/**
	 * @see https://discord.com/developers/docs/events/gateway#get-gateway
	 */
	async getGateway(): Promise<Gateway> {
		const gatewayResponseData = await super.get<RESTGetAPIGateway>(gateway(), {
			withAuthorization: false,
		});

		return gatewayResponseData;
	}

	/**
	 * @see https://discord.com/developers/docs/events/gateway#get-gateway-bot
	 */
	async getGatewayBot(): Promise<GatewayBot> {
		const gatewayBotResponseData = await super.get<RESTGetAPIGatewayBot>(gatewayBot());
		const gatewayBotData = parseGatewayBot(gatewayBotResponseData);

		return gatewayBotData;
	}
}
