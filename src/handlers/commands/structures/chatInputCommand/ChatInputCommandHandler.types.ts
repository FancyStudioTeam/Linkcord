import type { Client } from '#client/index.js';
import type { GatewayShard } from '#gateway/index.js';
import type { ChatInputApplicationCommandInteraction } from '#structures/ChatInputApplicationCommandInteraction.js';
import type { CreateChatInputApplicationCommand } from '#types/index.js';
import type { NonAbstractConstructor } from '#utils/index.js';
import type { ChatInputCommandHandler } from './ChatInputCommandHandler.js';

export interface ChatInputCommandHandlerRunOptions<
	Data extends ChatInputCommandHandlerRunData = {
		options: never;
	},
> {
	client: Client;
	gatewayShard: GatewayShard;
	options: Data['options'];
	interaction: ChatInputApplicationCommandInteraction;
}

export interface ChatInputCommandHandlerRunData {
	options?: unknown;
}

export type ChatInputCommandHandlerConstructor = NonAbstractConstructor<ChatInputCommandHandler>;
export type ChatInputCommandHandlerDeclareOptions = Omit<CreateChatInputApplicationCommand, 'options' | 'type'>;
