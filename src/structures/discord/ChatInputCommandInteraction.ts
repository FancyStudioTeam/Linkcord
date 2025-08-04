import type { Client } from "#client/index.js";
import { type APIApplicationCommandInteraction, ApplicationCommandTypes } from "#types/index.js";
import { BaseCommandInteraction } from "./BaseCommandInteraction.js";

/**
 * Represents a Discord chat input command interaction.
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure
 * @public
 */
export class ChatInputCommandInteraction extends BaseCommandInteraction<ApplicationCommandTypes.ChatInput> {
	/**
	 * Creates a new
	 * {@link ChatInputCommandInteraction | `ChatInputCommandInteraction`} instance.
	 * @param client - The client that instantiated the interaction.
	 * @param data - The
	 * {@link APIApplicationCommandInteraction | `APIApplicationCommandInteraction`}
	 * object.
	 */
	constructor(client: Client, data: APIApplicationCommandInteraction) {
		super(client, data, ApplicationCommandTypes.ChatInput);
	}
}
