import type { Client } from "#client/Client.js";
import { type APIApplicationCommandInteraction, ApplicationCommandTypes } from "#types/index.js";
import { BaseCommandInteraction } from "./base/BaseCommandInteraction.js";

/**
 * Represents a Discord chat input command interaction.
 *
 * @public
 */
export class ChatInputCommandInteraction extends BaseCommandInteraction<ApplicationCommandTypes.ChatInput> {
	/**
	 * Creates a new
	 * {@link ChatInputCommandInteraction | `ChatInputCommandInteraction`} instance.
	 *
	 * @param client - The client that instantiated the interaction.
	 * @param data - The raw Discord API application command interaction data.
	 */
	constructor(client: Client, data: APIApplicationCommandInteraction) {
		super(client, data, ApplicationCommandTypes.ChatInput);
	}
}
