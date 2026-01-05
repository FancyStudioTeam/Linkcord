import type { Client } from '#client/index.js';
import type { GatewayShard } from '#gateway/index.js';
import type { ChatInputApplicationCommandInteraction } from '#structures/ChatInputApplicationCommandInteraction.js';
import type { CreateChatInputApplicationCommandOptions } from '#types/index.js';
import type { NonAbstractConstructor } from '#utils/index.js';
import type { ChatInputCommandHandler } from './ChatInputCommandHandler.js';

export interface ChatInputCommandHandlerRunOptions {
	client: Client;
	gatewayShard: GatewayShard;
	interaction: ChatInputApplicationCommandInteraction;
}

export type ChatInputCommandHandlerConstructor = NonAbstractConstructor<ChatInputCommandHandler>;
export type ChatInputCommandHandlerDeclareOptions = Omit<CreateChatInputApplicationCommandOptions, 'options' | 'type'>;
