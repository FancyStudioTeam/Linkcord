import { ApplicationCommandTypes } from "#types/index.js";

/**
 * @public
 */
export abstract class UserContextCommand {
	readonly declareOptions: UserContextCommandOptions | null = null;
	/** The application command type of the command. */
	private readonly __type__ = ApplicationCommandTypes.User;

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
