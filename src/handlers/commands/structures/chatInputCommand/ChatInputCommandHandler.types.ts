import type { Client } from '#client/index.js';
import type { ChatInputCommandInteraction } from '#structures/ChatInputCommandInteraction.js';
import type { CreateChatInputApplicationCommandOptions } from '#types/index.js';
import type { NonAbstractConstructor } from '#utils/index.js';
import type { ChatInputCommandHandler } from './ChatInputCommandHandler.js';

export interface ChatInputCommandRunOptions {
	client: Client;
	context: ChatInputCommandInteraction;
}

export type ChatInputCommandHandlerConstructor = NonAbstractConstructor<ChatInputCommandHandler>;
export type ChatInputCommandHandlerDeclareOptions = Omit<CreateChatInputApplicationCommandOptions, 'options' | 'type'>;
