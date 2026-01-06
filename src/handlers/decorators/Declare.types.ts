import type {
	ChatInputCommandHandlerConstructor,
	ChatInputCommandHandlerDeclareOptions,
	MessageCommandHandlerConstructor,
	MessageCommandHandlerDeclareOptions,
	UserCommandHandlerConstructor,
} from '#handlers/commands/index.js';

export type DeclarableCommandConstructor =
	| ChatInputCommandHandlerConstructor
	| MessageCommandHandlerConstructor
	| UserCommandHandlerConstructor;
export type DeclarableConstructor = DeclarableCommandConstructor;

export type DeclareOptions<Target extends DeclarableConstructor> = Target extends ChatInputCommandHandlerConstructor
	? ChatInputCommandHandlerDeclareOptions
	: Target extends MessageCommandHandlerConstructor
		? MessageCommandHandlerDeclareOptions
		: Target extends UserCommandHandlerConstructor
			? UserCommandHandlerConstructor
			: never;
