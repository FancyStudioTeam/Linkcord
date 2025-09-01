import { Endpoints } from "#rest/endpoints/Endpoints.js";
import { GatewayTransformer } from "#transformers/GatewayTransformer.js";
import type { Gateway, GatewayBot, RESTGetAPIGateway, RESTGetAPIGatewayBot } from "#types/index.js";
import { BaseAPI } from "./BaseAPI.js";

/** API class that handles all request related to `/gateway` endpoints. */
export class GatewayAPI extends BaseAPI {
	/**
	 * Performs a {@link RESTGetAPIGateway | `GET /gateway`} request to the Discord API.
	 * @returns The {@link Gateway | `Gateway`} object.
	 * @see https://discord.com/developers/docs/events/gateway#get-gateway
	 */
	async getGateway(): Promise<Gateway> {
		const gatewayResponseData = await super.get<RESTGetAPIGateway>(Endpoints.gateway(), {
			withAuthorization: false,
		});
		const gatewayData = GatewayTransformer.transformGatewayToParsed(gatewayResponseData);

		return gatewayData;
	}

	/**
	 * Performs a {@link RESTGetAPIGatewayBot | `GET /gateway/bot`} request to the Discord API.
	 * @returns The {@link GatewayBot | `GatewayBot`} object.
	 * @see https://discord.com/developers/docs/events/gateway#get-gateway-bot
	 */
	async getGatewayBot(): Promise<GatewayBot> {
		const gatewayBotResponseData = await super.get<RESTGetAPIGatewayBot>(
			Endpoints.gatewayBot(),
		);
		const gatewayBotData =
			GatewayTransformer.transformGatewayBotToParsed(gatewayBotResponseData);

		return gatewayBotData;
	}
}
