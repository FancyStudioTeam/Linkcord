import type { ChatInputCommandHandlerDeclareOptions } from "./ChatInputCommandHandler.types.js";

export abstract class ChatInputCommandHandler {
	declare declareOptions: ChatInputCommandHandlerDeclareOptions;
}
