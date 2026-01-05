import type { APIApplicationCommandOptionChoice } from '#types/resources/ApplicationCommands/index.js';
import type { RawMessageChildComponent, RawModalChildComponent } from '#types/resources/Components/index.js';
import type { MessageFlags, RawAllowedMentions, RawEmbed } from '#types/resources/Messages/index.js';
import type { RawMessagePoll } from '#types/resources/Polls/index.js';
import type { InteractionCallbackType } from '../enums.js';

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-autocomplete
 */
export interface RawCreateAutocompleteInteractionCallbackData {
	choices: APIApplicationCommandOptionChoice[];
}

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-callback-interaction-callback-response-object
 */
export interface RawCreateInteractionResponseOptionsBase<Type extends InteractionCallbackType, Data> {
	data: Data;
	type: Type;
}

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-messages
 */
export interface RawCreateMessageInteractionCallbackData {
	allowed_mentions?: RawAllowedMentions;
	components?: RawMessageChildComponent[];
	content?: string;
	embeds?: RawEmbed[];
	flags?: MessageFlags;
	poll?: RawMessagePoll;
	tts?: boolean;
}

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-modal
 */
export interface RawCreateModalInteractionCallbackData {
	custom_id: string;
	components: RawModalChildComponent[];
	title: string;
}

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-response-structure
 */
export type RawCreateMessageInteractionResponseOptionsBase<Type extends RawMessageInteractionCallbackType> =
	RawCreateInteractionResponseOptionsBase<Type, RawCreateMessageInteractionCallbackData>;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-response-structure
 */
export type RawCreateAutocompleteInteractionResponseOptions = RawCreateInteractionResponseOptionsBase<
	InteractionCallbackType.ApplicationCommandAutocompleteResult,
	RawCreateAutocompleteInteractionCallbackData
>;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-response-structure
 */
export type RawCreateChannelMessageWithSourceInteractionResponseOptions =
	RawCreateMessageInteractionResponseOptionsBase<InteractionCallbackType.ChannelMessageWithSource>;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-response-structure
 */
export type RawCreateDeferredChannelMessageWithSourceInteractionResponseOptions =
	RawCreateMessageInteractionResponseOptionsBase<InteractionCallbackType.DeferredChannelMessageWithSource>;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-response-structure
 */
export type RawCreateDeferredUpdateMessageInteractionResponseOptions =
	RawCreateMessageInteractionResponseOptionsBase<InteractionCallbackType.DeferredUpdateMessage>;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-response-structure
 */
export type RawCreateInteractionResponseOptions =
	| RawCreateAutocompleteInteractionResponseOptions
	| RawCreateLaunchActivityInteractionResponseOptions
	| RawCreateMessageInteractionResponseOptions
	| RawCreateModalInteractionResponseOptions
	| RawCreatePongInteractionResponseOptions;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-response-structure
 */
export type RawCreateLaunchActivityInteractionResponseOptions = Omit<
	RawCreateInteractionResponseOptionsBase<InteractionCallbackType.LaunchActivity, never>,
	'data'
>;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-response-structure
 */
export type RawCreateMessageInteractionResponseOptions =
	| RawCreateChannelMessageWithSourceInteractionResponseOptions
	| RawCreateDeferredChannelMessageWithSourceInteractionResponseOptions
	| RawCreateDeferredUpdateMessageInteractionResponseOptions
	| RawCreateUpdateMessageInteractionResponseOptions;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-response-structure
 */
export type RawCreateModalInteractionResponseOptions = RawCreateInteractionResponseOptionsBase<
	InteractionCallbackType.Modal,
	RawCreateModalInteractionCallbackData
>;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-response-structure
 */
export type RawCreatePongInteractionResponseOptions = Omit<
	RawCreateInteractionResponseOptionsBase<InteractionCallbackType.Pong, never>,
	'data'
>;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-response-structure
 */
export type RawCreateUpdateMessageInteractionResponseOptions =
	RawCreateMessageInteractionResponseOptionsBase<InteractionCallbackType.UpdateMessage>;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-callback-type
 */
export type RawMessageInteractionCallbackType = Exclude<
	InteractionCallbackType,
	| InteractionCallbackType.ApplicationCommandAutocompleteResult
	| InteractionCallbackType.LaunchActivity
	| InteractionCallbackType.Modal
	| InteractionCallbackType.Pong
>;
