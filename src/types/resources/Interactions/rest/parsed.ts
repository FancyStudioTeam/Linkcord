import type {
	InteractionMessageComponentResolvable,
	InteractionMessageEmbedResolvable,
	InteractionMessageFlagsResolvable,
	InteractionMessagePollResolvable,
	InteractionModalComponentResolvable,
} from '#types/resolvables/Interactions.js';
import type { ApplicationCommandOptionChoice } from '#types/resources/ApplicationCommands/index.js';
import type { AllowedMentions } from '#types/resources/Messages/index.js';
import type { InteractionCallbackType } from '../enums.js';

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-autocomplete
 */
export interface CreateAutocompleteInteractionCallbackData {
	choices: ApplicationCommandOptionChoice[];
}

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-callback-interaction-callback-response-object
 */
export interface CreateInteractionResponseOptionsBase<Type extends InteractionCallbackType, Data> {
	data: Data;
	type: Type;
}

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-messages
 */
export interface CreateMessageInteractionCallbackData {
	allowedMentions?: AllowedMentions;
	components?: InteractionMessageComponentResolvable[];
	content?: string;
	embeds?: InteractionMessageEmbedResolvable[];
	flags?: InteractionMessageFlagsResolvable;
	poll?: InteractionMessagePollResolvable;
	tts?: boolean;
}

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-modal
 */
export interface CreateModalInteractionCallbackData {
	customId: string;
	components: InteractionModalComponentResolvable[];
	title: string;
}

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-response-structure
 */
export type CreateMessageInteractionResponseOptionsBase<Type extends MessageInteractionCallbackType> = CreateInteractionResponseOptionsBase<
	Type,
	CreateMessageInteractionCallbackData
>;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-response-structure
 */
export type CreateAutocompleteInteractionResponseOptions = CreateInteractionResponseOptionsBase<
	InteractionCallbackType.ApplicationCommandAutocompleteResult,
	CreateAutocompleteInteractionCallbackData
>;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-response-structure
 */
export type CreateChannelMessageWithSourceInteractionResponseOptions =
	CreateMessageInteractionResponseOptionsBase<InteractionCallbackType.ChannelMessageWithSource>;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-response-structure
 */
export type CreateDeferredChannelMessageWithSourceInteractionResponseOptions =
	CreateMessageInteractionResponseOptionsBase<InteractionCallbackType.DeferredChannelMessageWithSource>;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-response-structure
 */
export type CreateDeferredUpdateMessageInteractionResponseOptions =
	CreateMessageInteractionResponseOptionsBase<InteractionCallbackType.DeferredUpdateMessage>;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-response-structure
 */
export type CreateInteractionResponseOptions =
	| CreateAutocompleteInteractionResponseOptions
	| CreateLaunchActivityInteractionResponseOptions
	| CreateMessageInteractionResponseOptions
	| CreateModalInteractionResponseOptions
	| CreatePongInteractionResponseOptions;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-response-structure
 */
export type CreateLaunchActivityInteractionResponseOptions = Omit<
	CreateInteractionResponseOptionsBase<InteractionCallbackType.LaunchActivity, never>,
	'data'
>;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-response-structure
 */
export type CreateMessageInteractionResponseOptions =
	| CreateChannelMessageWithSourceInteractionResponseOptions
	| CreateDeferredChannelMessageWithSourceInteractionResponseOptions
	| CreateDeferredUpdateMessageInteractionResponseOptions
	| CreateUpdateMessageInteractionResponseOptions;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-response-structure
 */
export type CreateModalInteractionResponseOptions = CreateInteractionResponseOptionsBase<
	InteractionCallbackType.Modal,
	CreateModalInteractionCallbackData
>;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-response-structure
 */
export type CreatePongInteractionResponseOptions = Omit<CreateInteractionResponseOptionsBase<InteractionCallbackType.Pong, never>, 'data'>;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-response-structure
 */
export type CreateUpdateMessageInteractionResponseOptions =
	CreateMessageInteractionResponseOptionsBase<InteractionCallbackType.UpdateMessage>;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-callback-type
 */
export type MessageInteractionCallbackType = Exclude<
	InteractionCallbackType,
	| InteractionCallbackType.ApplicationCommandAutocompleteResult
	| InteractionCallbackType.LaunchActivity
	| InteractionCallbackType.Modal
	| InteractionCallbackType.Pong
>;
