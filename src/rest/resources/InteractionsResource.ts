// import type { CreateInteractionResponseOptions, Snowflake } from '#types/index.js';
import { ResourceBase } from './ResourceBase.js';

export class InteractionsResource extends ResourceBase {
	/**
	 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#create-interaction-response
	 */
	/*async createInteractionResponse(
		_interactionId: Snowflake,
		_interactionToken: string,
		options: CreateInteractionResponseOptions,
	): Promise<undefined> {
		const { rest } = this;
		const { type, withResponse } = options;

		const urlSearchParams = new URLSearchParams();

		if (withResponse) {
			urlSearchParams.append('with_response', String(withResponse));
		}

		return;
	}*/
}
