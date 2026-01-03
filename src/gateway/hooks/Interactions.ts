/*
 * biome-ignore-all lint/complexity/useLiteralKeys: Accessing private or
 * protected members requires bracket notation in this context.
 *
 * biome-ignore-all lint/style/useNamingConvention: Function names must exactly
 * match Discord dispatch event names.
 */

import { type Client, ClientEvents } from '#client/index.js';
import type { GatewayShard } from '#gateway/structures/GatewayShard.js';
import { ChatInputApplicationCommandInteraction } from '#structures/ChatInputApplicationCommandInteraction.js';
import {
	ApplicationCommandType,
	type GatewayDispatchInteractionCreateEventPayload,
	type Interaction,
	InteractionType,
} from '#types/index.js';

/**
 * @see https://discord.com/developers/docs/events/gateway-events#interaction-create
 */
export async function INTERACTION_CREATE(
	client: Client,
	gatewayShard: GatewayShard,
	interactionCreatePayload: GatewayDispatchInteractionCreateEventPayload,
): Promise<void> {
	const { commands, events } = client;
	const { type } = interactionCreatePayload;

	let interaction: Interaction;

	switch (type) {
		case InteractionType.ApplicationCommand: {
			const { data } = interactionCreatePayload;
			const { type } = data ?? {};

			switch (type) {
				case ApplicationCommandType.ChatInput: {
					interaction = new ChatInputApplicationCommandInteraction(client, interactionCreatePayload);

					const { commandName } = interaction;
					const { chatInput } = commands;

					const chatInputCommand = chatInput.get(commandName);

					if (chatInputCommand) {
						await chatInputCommand.run({
							client,
							context: interaction,
						});
					}

					break;
				}
				default:
					throw new TypeError('Interaction command type not handled');
			}

			break;
		}
		default: {
			throw new TypeError('Interaction type not handled');
		}
	}

	events.emit(ClientEvents.InteractionCreate, {
		gatewayShard,
		interaction,
	});
}
