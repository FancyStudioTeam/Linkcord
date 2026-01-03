import { INTERACTION_CALLBACK } from '#rest/endpoints/Endpoints.js';
import { RESTContentType, RESTMethod } from '#rest/structures/RESTManager.types.js';
import { serializeCreateInteractionResponseOptions } from '#transformers/Interactions/REST.js';
import type { CreateInteractionResponseOptions, Snowflake } from '#types/index.js';
import { ResourceBase } from './ResourceBase.js';

export class InteractionsResource extends ResourceBase {
	/**
	 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#create-interaction-response
	 */
	async createInteractionResponse(
		interactionId: Snowflake,
		interactionToken: string,
		options: CreateInteractionResponseOptions,
	): Promise<void> {
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

		const interactionCallbackResponseData = await rest.makeRequest<void>(endpoint, {
			body: JSON.stringify(serializedOptions),
			contentType: RESTContentType.ApplicationJSON,
			method: RESTMethod.Post,
		});

		return interactionCallbackResponseData;
	}
}
