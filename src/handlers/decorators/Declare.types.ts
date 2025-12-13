import type {
	ChatInputCommandHandlerConstructor,
	ChatInputCommandHandlerDeclareOptions,
} from "#handlers/commands/index.js";

export type DeclarableCommandConstructor = ChatInputCommandHandlerConstructor;
export type DeclarableConstructor = DeclarableCommandConstructor;

export type DeclareOptions<Target extends DeclarableConstructor> = Target extends ChatInputCommandHandlerConstructor
	? ChatInputCommandHandlerDeclareOptions
	: never;
