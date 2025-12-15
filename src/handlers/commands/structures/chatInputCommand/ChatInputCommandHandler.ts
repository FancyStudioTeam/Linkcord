import { ApplicationCommandType, type CreateChatInputApplicationCommandOptions } from "#types/index.js";
import type {
	ChatInputCommandHandlerDeclareOptions,
	ChatInputCommandRunOptions,
} from "./ChatInputCommandHandler.types.js";

export abstract class ChatInputCommandHandler {
	declare readonly declareOptions: ChatInputCommandHandlerDeclareOptions;

	abstract run(options: ChatInputCommandRunOptions): unknown;

	toJSON(): CreateChatInputApplicationCommandOptions {
		const { declareOptions } = this;

		return {
			...declareOptions,
			type: ApplicationCommandType.ChatInput,
		};
	}
}
