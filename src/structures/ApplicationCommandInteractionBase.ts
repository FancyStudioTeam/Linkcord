import { InteractionType } from '#types/index.js';
import { InteractionBase } from './InteractionBase.js';

export abstract class ApplicationCommandInteractionBase<InGuild extends boolean = false> extends InteractionBase<InGuild> {
	/** The type of the interaction. */
	readonly type: InteractionType.ApplicationCommand = InteractionType.ApplicationCommand;
}
