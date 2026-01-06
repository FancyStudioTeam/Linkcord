import { ApplicationCommandType, type CreateUserApplicationCommand } from '#types/index.js';
import type { UserCommandContext, UserCommandHandlerDeclareOptions } from './UserCommandHandler.types.js';

export abstract class UserCommandHandler {
	declare readonly declareOptions: UserCommandHandlerDeclareOptions;

	abstract run(context: UserCommandContext): unknown;

	toJSON(): CreateUserApplicationCommand {
		const { declareOptions } = this;

		return {
			...declareOptions,
			type: ApplicationCommandType.User,
		};
	}
}
