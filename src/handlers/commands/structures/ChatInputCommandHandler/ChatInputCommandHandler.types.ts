import type { Client } from '#client/index.js';
import type { GatewayShard } from '#gateway/index.js';
import type { OptionData, ParsedOptions } from '#handlers/commands/options/index.js';
import type { ChatInputApplicationCommandInteraction } from '#structures/ChatInputApplicationCommandInteraction.js';
import type { CreateChatInputApplicationCommand } from '#types/index.js';
import type { NonAbstractConstructor } from '#utils/index.js';
import type { ChatInputCommandHandler } from './ChatInputCommandHandler.js';

export interface ChatInputCommandContext<Options extends Record<string, OptionData> = Record<string, never>> {
	client: Client;
	gatewayShard: GatewayShard;
	interaction: ChatInputApplicationCommandInteraction;
	options: ParsedOptions<NormalizeOptions<Options>>;
}

export type ChatInputCommandHandlerConstructor = NonAbstractConstructor<ChatInputCommandHandler>;
export type ChatInputCommandHandlerDeclareOptions = Omit<CreateChatInputApplicationCommand, 'options' | 'type'>;

export type NormalizeOptions<OptionsObject> = OptionsObject extends undefined ? Record<string, never> : OptionsObject;
