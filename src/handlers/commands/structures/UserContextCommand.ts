import type { UserContextCommandOptions } from "#handlers/decorators/Declare.js";
import { ApplicationCommandTypes } from "#types/index.js";
import type { CreateUserContextApplicationCommandOptions } from "#types/parsed/ApplicationCommands.js";

/**
 * @public
 */
export abstract class UserContextCommand {
	readonly declareOptions: UserContextCommandOptions | null = null;
	readonly type = ApplicationCommandTypes.User;

	toJSON(): CreateUserContextApplicationCommandOptions {
		const { declareOptions, type } = this;

		if (!declareOptions) {
			throw new Error("Declaration is missing from the user context command instance.");
		}

		return {
			...declareOptions,
			type,
		};
	}
}
