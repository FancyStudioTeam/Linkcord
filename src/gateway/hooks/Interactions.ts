/*
 * biome-ignore-all lint/complexity/useLiteralKeys: Accessing private or
 * protected members requires bracket notation in this context.
 *
 * biome-ignore-all lint/style/useNamingConvention: Function names must exactly
 * match Discord dispatch event names.
 */

import { type Client, ClientEvents } from '#client/index.js';
import type { GatewayShard } from '#gateway/structures/GatewayShard.js';
import { ChatInputCommandInteraction } from '#structures/ChatInputCommandInteraction.js';
import type { GatewayDispatchInteractionCreateEventPayload, Interaction } from '#types/index.js';

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
		default: {
			// @ts-expect-error
			interaction = new ChatInputCommandInteraction(client, interactionCreatePayload);

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
	}

	events.emit(ClientEvents.InteractionCreate, {
		gatewayShard,
		interaction,
	});
}
