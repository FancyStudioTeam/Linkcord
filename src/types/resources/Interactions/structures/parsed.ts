import type { ApplicationCommandOptionChoice } from '#types/resources/ApplicationCommands/index.js';
import type { MessageComponents, ModalComponents } from '#types/resources/Components/index.js';
import type { AllowedMentions, Embed, MessageFlags } from '#types/resources/Messages/index.js';
import type { MessagePoll } from '#types/resources/Polls/index.js';
import type { InteractionCallbackType } from '../enums.js';

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-response-structure
 */
export interface InteractionResponseBase<Type extends InteractionCallbackType, Data extends InteractionCallbackData> {
	data: Data;
	type: Type;
}

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-autocomplete
 */
export interface AutocompleteInteractionCallbackData {
	choices: ApplicationCommandOptionChoice[];
}

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-messages
 */
export interface MessageInteractionCallbackData {
	allowedMentions?: AllowedMentions;
	components?: MessageComponents[];
	content?: string;
	embeds?: Embed[];
	flags?: MessageFlags;
	poll?: MessagePoll;
	tts?: boolean;
}

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-modal
 */
export interface ModalInteractionCallbackData {
	components: ModalComponents[];
	customId: string;
	title: string;
}

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-messages
 */
export type InteractionCallbackData = AutocompleteInteractionCallbackData | MessageInteractionCallbackData | ModalInteractionCallbackData;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-response-structure
 */
export type InteractionResponse = LaunchActivityInteractionResponse | PongInteractionResponse;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-response-structure
 */
export type LaunchActivityInteractionResponse = Omit<InteractionResponseBase<InteractionCallbackType.LaunchActivity, never>, 'data'>;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-response-structure
 */
export type PongInteractionResponse = Omit<InteractionResponseBase<InteractionCallbackType.Pong, never>, 'data'>;
