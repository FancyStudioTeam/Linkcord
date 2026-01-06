import type { Client } from '#client/index.js';
import type { Message } from '#structures/Message.js';
import type { CreateMessageApplicationCommand } from '#types/index.js';
import type { NonAbstractConstructor } from '#utils/index.js';
import type { MessageCommandHandler } from './MessageCommandHandler.js';

export interface MessageCommandContext {
	client: Client;
	targetMessage: Message;
}

export type MessageCommandHandlerConstructor = NonAbstractConstructor<MessageCommandHandler>;
export type MessageCommandHandlerDeclareOptions = Omit<CreateMessageApplicationCommand, 'type'>;
