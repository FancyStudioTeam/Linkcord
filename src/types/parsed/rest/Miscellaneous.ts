import type { InteractionCallbackTypes } from "#types/discord/index.js";

/**
 * @public
 */
export interface CreateModalInteractionResponseData {
	customId: string;
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
export type CreateInteractionResponseOptions = CreateModalInteractionResponseOptions;

/**
 * @public
 */
export type CreateModalOptions = CreateModalInteractionResponseData;
