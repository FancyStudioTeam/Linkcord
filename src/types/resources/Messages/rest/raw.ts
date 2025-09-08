import type { APIEmbed, APIMessage } from "../structures/raw.js";

/**
 * Represents the JSON parameters of the {@link RESTPostAPIMessage | `POST /channels/(channel.id)/messages`} endpoint.
 * @see https://discord.com/developers/docs/resources/message#create-message-jsonform-params
 */
export interface RESTPostAPIMessageJSONParams {
	/** The content of the message. */
	content?: string;
	/** The embeds of the message. */
	embeds?: APIEmbed[];
}

/**
 * Represents the response of the {@link RESTPostAPIMessage | `POST /channels/(channel.id)/messages`} endpoint.
 * @see https://discord.com/developers/docs/resources/message#create-message
 */
export type RESTPostAPIMessage = APIMessage;
