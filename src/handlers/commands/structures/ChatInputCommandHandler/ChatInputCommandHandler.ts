import {
	type ApplicationCommandOption,
	ApplicationCommandType,
	type CreateChatInputApplicationCommand,
} from '#types/index.js';
import type {
	ChatInputCommandContext,
	ChatInputCommandHandlerDeclareOptions,
} from './ChatInputCommandHandler.types.js';

export abstract class ChatInputCommandHandler {
	declare readonly declareOptions: ChatInputCommandHandlerDeclareOptions;
	declare readonly options: ApplicationCommandOption[];

	abstract run(context: ChatInputCommandContext): unknown;

	toJSON(): CreateChatInputApplicationCommand {
		const { declareOptions, options } = this;

		return {
			...declareOptions,
			options,
			type: ApplicationCommandType.ChatInput,
		};
	}
}
