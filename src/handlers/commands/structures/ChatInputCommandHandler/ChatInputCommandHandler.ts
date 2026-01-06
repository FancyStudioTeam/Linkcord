import { ApplicationCommandType, type CreateChatInputApplicationCommand } from '#types/index.js';
import type { ChatInputCommandContext, ChatInputCommandHandlerDeclareOptions } from './ChatInputCommandHandler.types.js';

export abstract class ChatInputCommandHandler {
	declare readonly declareOptions: ChatInputCommandHandlerDeclareOptions;

	abstract run(context: ChatInputCommandContext): unknown;

	toJSON(): CreateChatInputApplicationCommand {
		const { declareOptions } = this;

		return {
			...declareOptions,
			type: ApplicationCommandType.ChatInput,
		};
	}
}
