import { emitWarning } from 'node:process';
import { ApplicationCommandInteractionBase } from './ApplicationCommandInteractionBase.js';

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure
 */
export class ChatInputApplicationCommandInteraction extends ApplicationCommandInteractionBase {
	protected patch(): void {
		// biome-ignore lint/suspicious/noShadowRestrictedNames: (x)
		const { constructor } = this;
		const { name } = constructor;

		const warningMessage = `All properties of '${name}' are readonly. Calling '${name}.patch()' will have no effect.`;

		emitWarning(warningMessage, {
			code: 'PATCH_METHOD',
			type: 'Patch Method Warning',
		});
	}
}
