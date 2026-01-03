import { ApplicationCommandInteractionBase } from './ApplicationCommandInteractionBase.js';

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure
 */
export class ChatInputApplicationCommandInteraction<InGuild extends boolean = false> extends ApplicationCommandInteractionBase<InGuild> {
	protected patch(): void {}
}
