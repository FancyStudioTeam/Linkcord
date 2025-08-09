/*
 * biome-ignore-all lint/complexity/useLiteralKeys: Allow to use bracket
 * notation when accessing private or protected members from some structures.
 */

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
import { BaseAPI } from "./BaseAPI.js";

/**
 * API class that handles all API requests related to interactions.
 * @group REST/API
 * @public
 */
export class InteractionsAPI extends BaseAPI {
	/**
	 * Creates an interaction response.
	 * @param interactionId - The ID of the interaction.
	 * @param interactionToken - The token of the interaction.
	 * @param options - The options to use when creating the interaction
	 * 	response.
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
			// @ts-expect-error
			case InteractionCallbackTypes.ApplicationCommandAutocompleteResult: {
				interactionResponse = {
					data: {
						choices: [],
					},
					type,
				};

				break;
			}
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
				throw new Error("Not suported.");
			}
		}

		const interactionResponseData = await super.__post__<
			RESTPostInteraction,
			RESTPostInteractionJSONParams,
			RESTPostInteractionQueryStringParams
		>(Endpoints.interactionCallback(interactionId, interactionToken), {
			json: interactionResponse,
			queryString: {
				with_response: true,
			},
		});

		return void interactionResponseData;
	}
}
