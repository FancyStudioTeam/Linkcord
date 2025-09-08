import type { EmbedBuilder } from "#builders/index.js";
import type { Embed } from "../structures/parsed.js";

/**
 * The options to use when creating a message.
 * @see https://discord.com/developers/docs/resources/message#create-message-jsonform-params
 */
export interface CreateMessageOptions {
	/** The content of the message. */
	content?: string;
	/** The embeds of the message. */
	embeds?: CreateMessageEmbedOptions[];
}

/**
 * Represents a valid embed when creating a message.
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-structure
 */
export type CreateMessageEmbedOptions = Embed | EmbedBuilder;
