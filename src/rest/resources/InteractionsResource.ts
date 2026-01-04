import { INTERACTION_CALLBACK } from '#rest/endpoints/Endpoints.js';
import { RESTContentType, RESTMethod } from '#rest/structures/RESTManager.types.js';
import { deserializeInteractionCallbackResponse } from '#transformers/Interactions/Deserializer.js';
import { serializeCreateInteractionResponseOptions } from '#transformers/Interactions/REST.js';
import type {
	CreateInteractionResponseOptions,
	InteractionCallbackResponse,
	RawInteractionCallbackResponse,
	Snowflake,
} from '#types/index.js';
import { isObject } from '#utils/helpers/AssertionUtils.js';
import { ResourceBase } from './ResourceBase.js';

export class InteractionsResource extends ResourceBase {
	/**
	 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#create-interaction-response
	 */
	async createInteractionResponse(
		interactionId: Snowflake,
		interactionToken: string,
		options: CreateInteractionResponseOptions & {
			withResponse: true;
		},
	): Promise<InteractionCallbackResponse>;

	/**
	 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#create-interaction-response
	 */
	async createInteractionResponse(
		interactionId: Snowflake,
		interactionToken: string,
		options: CreateInteractionResponseOptions & {
			withResponse?: false;
		},
	): Promise<void>;

	/**
	 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#create-interaction-response
	 */
	async createInteractionResponse(
		interactionId: Snowflake,
		interactionToken: string,
		options: CreateInteractionResponseOptions & {
			withResponse?: boolean;
		},
	): Promise<InteractionCallbackResponse | void> {
		const { rest } = this;
		const { withResponse } = options;

		const urlSearchParams = new URLSearchParams();
		const { size: urlSearchParamsSize } = urlSearchParams;

		if (withResponse) {
			urlSearchParams.append('with_response', String(withResponse));
		}

		const serializedOptions = serializeCreateInteractionResponseOptions(options);
		let endpoint = INTERACTION_CALLBACK(interactionId, interactionToken);

		if (urlSearchParamsSize > 0) {
			endpoint += `/?${urlSearchParams.toString()}`;
		}

		const interactionCallbackResponseData = await rest.makeRequest<RawInteractionCallbackResponse | undefined>(endpoint, {
			body: JSON.stringify(serializedOptions),
			contentType: RESTContentType.ApplicationJSON,
			method: RESTMethod.Post,
		});

		if (isObject(interactionCallbackResponseData)) {
			return deserializeInteractionCallbackResponse(interactionCallbackResponseData);
		}

		return;
	}
}
