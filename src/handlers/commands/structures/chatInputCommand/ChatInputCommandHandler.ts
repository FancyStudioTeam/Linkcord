import { ApplicationCommandType, type CreateChatInputApplicationCommand } from '#types/index.js';
import type { ChatInputCommandHandlerDeclareOptions, ChatInputCommandHandlerRunOptions } from './ChatInputCommandHandler.types.js';

export abstract class ChatInputCommandHandler {
	declare readonly declareOptions: ChatInputCommandHandlerDeclareOptions;

	abstract run(options: ChatInputCommandHandlerRunOptions): unknown;

	toJSON(): CreateChatInputApplicationCommand {
		const { declareOptions } = this;

		return {
			...declareOptions,
			type: ApplicationCommandType.ChatInput,
		};
	}
}
