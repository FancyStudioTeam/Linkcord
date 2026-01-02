import type { ChatInputCommandInteraction } from '#structures/ChatInputCommandInteraction.js';
import type { Snowflake } from '#types/miscellaneous/discord.js';
import type { ApplicationCommandType } from '#types/resources/ApplicationCommands/enums.js';

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure
 */
export type Interaction = ChatInputCommandInteraction;

export interface ApplicationCommandInteractionDataBase<Type extends ApplicationCommandType> {
	guildId?: Snowflake;
	id: Snowflake;
	name: string;
	type: Type;
}
