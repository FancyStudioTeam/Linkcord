import type { InteractionCallbackTypes } from "#types/discord/index.js";

/**
 * @public
 */
export interface CreateMessageInteractionResponseData {
	/**
	 * The content of the message.
	 */
	content?: string;
	/**
	 * The flags of the message.
	 */
	flags?: number;
}

/**
 * @public
 */
export interface CreateMessageInteractionResponseOptions {
	data: CreateMessageInteractionResponseData;
	type:
		| InteractionCallbackTypes.ChannelMessageWithSource
		| InteractionCallbackTypes.DeferredChannelMessageWithSource
		| InteractionCallbackTypes.DeferredUpdateMessage
		| InteractionCallbackTypes.UpdateMessage;
}

/**
 * @public
 */
export interface CreateModalInteractionResponseData {
	/**
	 * The custom ID of the modal.
	 */
	customId: string;
	/**
	 * The title of the modal.
	 */
	title: string;
}

/**
 * @public
 */
export interface CreateModalInteractionResponseOptions {
	data: CreateModalInteractionResponseData;
	type: InteractionCallbackTypes.Modal;
}

/**
 * @public
 */
export type CreateInteractionResponseOptions =
	| CreateMessageInteractionResponseOptions
	| CreateModalInteractionResponseOptions;

/**
 * @public
 */
export type CreateModalOptions = CreateModalInteractionResponseData;
