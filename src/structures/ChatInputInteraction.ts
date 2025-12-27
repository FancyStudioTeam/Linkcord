import { InteractionType } from '#types/index.js';
import { InteractionBase } from './InteractionBase.js';

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure
 */
// @ts-expect-error
export class ChatInputInteraction extends InteractionBase {
	readonly type: InteractionType.ApplicationCommand = InteractionType.ApplicationCommand;
}
