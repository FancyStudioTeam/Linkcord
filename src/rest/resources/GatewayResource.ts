import { GATEWAY_BOT_ENDPOINT, GATEWAY_ENDPOINT } from '#rest/endpoints/Endpoints.js';
import { RESTMethod } from '#rest/structures/RESTManager.types.js';
import { deserializeGatewayBot } from '#transformers/Gateway/Deserializer.js';
import type { APIGateway, APIGatewayBot, Gateway, GatewayBot } from '#types/index.js';
import { ResourceBase } from './ResourceBase.js';

export class GatewayResource extends ResourceBase {
	/**
	 * @see https://discord.com/developers/docs/events/gateway#get-gateway
	 */
	async get(): Promise<Gateway> {
		const { rest } = this;
		const gatewayResponseData = await rest.makeRequest<APIGateway>(GATEWAY_ENDPOINT(), {
			method: RESTMethod.Get,
			withAuthorization: false,
		});

		return gatewayResponseData;
	}

	/**
	 * @see https://discord.com/developers/docs/events/gateway#get-gateway-bot
	 */
	async getBot(): Promise<GatewayBot> {
		const { rest } = this;

		const gatewayBotResponseData = await rest.makeRequest<APIGatewayBot>(GATEWAY_BOT_ENDPOINT(), {
			method: RESTMethod.Get,
		});
		const gatewayBotData = deserializeGatewayBot(gatewayBotResponseData);

		return gatewayBotData;
	}
}
