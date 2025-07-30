import { Endpoints } from "#rest/endpoints/Endpoints.js";
import {
	type APIInteractionResponse,
	type CreateInteractionResponseOptions,
	InteractionCallbackTypes,
	type RESTPostInteraction,
	type RESTPostInteractionJSONParams,
	type RESTPostInteractionQueryStringParams,
	type Snowflake,
} from "#types/index.js";
import { BaseAPI } from "./base/BaseAPI.js";

/**
 * Class that handles all API requests related to interactions.
 *
 * @public
 */
export class InteractionsAPI extends BaseAPI {
	/**
	 * Creates an interaction response.
	 *
	 * @param interactionId - The ID of the interaction.
	 * @param interactionToken - The token of the interaction.
	 * @param options - The options to use when creating the interaction
	 * response.
	 *
	 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#create-interaction-response
	 */
	async postInteractionResponse(
		interactionId: Snowflake,
		interactionToken: string,
		options: CreateInteractionResponseOptions,
	): Promise<void> {
		const { data, type } = options;

		let interactionResponse: APIInteractionResponse;

		switch (type) {
			case InteractionCallbackTypes.ChannelMessageWithSource:
			case InteractionCallbackTypes.DeferredChannelMessageWithSource:
			case InteractionCallbackTypes.DeferredUpdateMessage:
			case InteractionCallbackTypes.UpdateMessage: {
				const { content, flags } = data;

				interactionResponse = {
					data: {
						content,
						flags,
					},
					type,
				};

				break;
			}
			case InteractionCallbackTypes.Modal: {
				const { customId, title } = data;

				interactionResponse = {
					data: {
						components: [],
						custom_id: customId,
						title,
					},
					type: InteractionCallbackTypes.Modal,
				};

				break;
			}
			default: {
				throw new Error(`Not implemented yet.`);
			}
		}

		return void (await super.post<
			RESTPostInteraction,
			RESTPostInteractionJSONParams,
			RESTPostInteractionQueryStringParams
		>(Endpoints.interactionCallback(interactionId, interactionToken), {
			json: interactionResponse,
			queryString: {
				with_response: true,
			},
		}));
	}
}
