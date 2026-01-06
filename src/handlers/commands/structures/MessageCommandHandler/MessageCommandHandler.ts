import { ApplicationCommandType, type CreateUserApplicationCommand } from '#types/index.js';
import type { MessageCommandContext, MessageCommandHandlerDeclareOptions } from './MessageCommandHandler.types.js';

export abstract class MessageCommandHandler {
	declare readonly declareOptions: MessageCommandHandlerDeclareOptions;

	abstract run(context: MessageCommandContext): unknown;

	toJSON(): CreateUserApplicationCommand {
		const { declareOptions } = this;

		return {
			...declareOptions,
			type: ApplicationCommandType.User,
		};
	}
}
