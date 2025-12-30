import { ResourceBase } from './ResourceBase.js';

export class InteractionsResource extends ResourceBase {
	/**
	 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#create-interaction-response
	 */
	createInteractionResponse(): Promise<void> {}
}
