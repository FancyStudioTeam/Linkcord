import { ApplicationCommandType, type CreateChatInputApplicationCommandOptions } from "#types/index.js";
import type { ChatInputCommandHandlerDeclareOptions } from "./ChatInputCommandHandler.types.js";

export abstract class ChatInputCommandHandler {
	declare declareOptions: ChatInputCommandHandlerDeclareOptions;

	toJSON(): CreateChatInputApplicationCommandOptions {
		const { declareOptions } = this;

		return {
			...declareOptions,
			type: ApplicationCommandType.ChatInput,
		};
	}
}
