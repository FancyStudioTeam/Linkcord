import type { ChatInputApplicationCommandInteraction } from '#structures/ChatInputApplicationCommandInteraction.js';
import type { Snowflake } from '#types/miscellaneous/discord.js';
import type { ApplicationCommandType } from '#types/resources/ApplicationCommands/enums.js';
import type { InteractionType } from '../enums.js';

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-callback-interaction-callback-object
 */
export interface InteractionCallback {
	id: Snowflake;
	type: InteractionType;
}

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-callback-interaction-callback-response-object
 */
export interface InteractionCallbackResponse {
	interaction: InteractionCallback;
}

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-application-command-data-structure
 */
export interface ApplicationCommandInteractionDataBase<Type extends ApplicationCommandType> {
	guildId?: Snowflake;
	id: Snowflake;
	name: string;
	type: Type;
}

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure
 */
export type ApplicationCommandInteraction = ChatInputApplicationCommandInteraction;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-application-command-data-structure
 */
export type ApplicationCommandInteractionData = ChatInputApplicationCommandInteractionData;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-application-command-data-structure
 */
export type ChatInputApplicationCommandInteractionData = ApplicationCommandInteractionDataBase<ApplicationCommandType.ChatInput>;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure
 */
export type Interaction = ApplicationCommandInteraction;
