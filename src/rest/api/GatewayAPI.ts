import { Endpoints } from "#rest/endpoints/Endpoints.js";
import { GatewayTransformer } from "#transformers/index.js";
import type { Gateway, GatewayBot, RESTGetGateway, RESTGetGatewayBot } from "#types/index.js";
import { BaseAPI } from "./base/BaseAPI.js";

/**
 * API class that handles all API requests related to the gateway.
 * @group REST/API
 * @public
 */
export class GatewayAPI extends BaseAPI {
	/**
	 * Gets the gateway object.
	 * @returns The {@link Gateway | `Gateway`} object.
	 */
	async getGateway(): Promise<Gateway> {
		const gatewayData = await super["__get__"]<RESTGetGateway>(Endpoints.gateway(), {
			withAuthorization: false,
		});

		return gatewayData;
	}

	/**
	 * Gets the gateway bot object.
	 * @returns The {@link GatewayBot | `GatewayBot`} object.
	 */
	async getGatewayBot(): Promise<GatewayBot> {
		const gatewayBotData = await super["__get__"]<RESTGetGatewayBot>(Endpoints.gatewayBot());
		const transformedGatewayBot = GatewayTransformer.transformGatewayBot(gatewayBotData);

		return transformedGatewayBot;
	}
}
