import { Endpoints } from "#rest/endpoints/Endpoints.js";
import { GatewayTransformer } from "#transformers/GatewayTransformer.js";
import type { Gateway, GatewayBot, RESTGetGateway, RESTGetGatewayBot } from "#types/index.js";
import { BaseAPI } from "./BaseAPI.js";

/** API class that handles all request related to `/gateway` endpoints. */
export class GatewayAPI extends BaseAPI {
	/**
	 * Gets the gateway object.
	 * @returns The {@link Gateway | `Gateway`} object.
	 */
	async getGateway(): Promise<Gateway> {
		const gatewayResponseData = await super.get<RESTGetGateway>(Endpoints.gateway(), {
			withAuthorization: false,
		});
		const gatewayData = GatewayTransformer.transformGatewayToParsed(gatewayResponseData);

		return gatewayData;
	}

	/**
	 * Gets the gateway bot object.
	 * @returns The {@link GatewayBot | `GatewayBot`} object.
	 */
	async getGatewayBot(): Promise<GatewayBot> {
		const gatewayBotResponseData = await super.get<RESTGetGatewayBot>(Endpoints.gatewayBot());
		const gatewayBotData =
			GatewayTransformer.transformGatewayBotToParsed(gatewayBotResponseData);

		return gatewayBotData;
	}
}
