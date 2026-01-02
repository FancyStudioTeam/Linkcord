import { InteractionType } from '#types/index.js';
import { InteractionBase } from './InteractionBase.js';

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure
 */
// @ts-expect-error
export class ChatInputCommandInteraction extends InteractionBase {
	/** The type of the interaction. */
	readonly type: InteractionType.ApplicationCommand = InteractionType.ApplicationCommand;

	get commandName(): string {
		// @ts-expect-error
		return this.data.name;
	}
}
