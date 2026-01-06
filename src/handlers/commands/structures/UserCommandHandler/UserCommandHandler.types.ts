import type { Client } from '#client/index.js';
import type { User } from '#structures/User.js';
import type { CreateUserApplicationCommand } from '#types/index.js';
import type { NonAbstractConstructor } from '#utils/index.js';
import type { UserCommandHandler } from './UserCommandHandler.js';

export interface UserCommandContext {
	client: Client;
	targetUser: User;
}

export type UserCommandHandlerConstructor = NonAbstractConstructor<UserCommandHandler>;
export type UserCommandHandlerDeclareOptions = Omit<CreateUserApplicationCommand, 'type'>;
