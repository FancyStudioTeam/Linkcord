import { EmbedBuilder, EmbedFieldBuilder } from "#builders/index.js";
import type { EmbedProperties } from "#jsx/types/index.js";

/**
 * Creates an {@link EmbedBuilder | `EmbedBuilder`} instance using a JSX component.
 * @param properties - The properties of the {@link Embed | `Embed`} JSX component.
 * @returns The created {@link EmbedBuilder | `EmbedBuilder`} instance.
 */
export function Embed(properties: EmbedProperties): EmbedBuilder {
	const embed = new EmbedBuilder();
	const { author, children, color, description, fields, footer, image, thumbnail, timestamp, title, url } =
		properties;

	if (author) embed.setAuthor(author);
	if (color) embed.setColor(color);
	if (description) embed.setDescription(description);
	if (fields) embed.addFields(fields);
	if (footer) embed.setFooter(footer);
	if (image) embed.setImage(image);
	if (thumbnail) embed.setThumbnail(thumbnail);
	if (timestamp) embed.setTimestamp(timestamp);
	if (title) embed.setTitle(title);
	if (url) embed.setURL(url);

	if (children) {
		if (typeof children === "string") {
			embed.setDescription(children);
		}

		if (Array.isArray(children)) {
			for (const child of children) {
				if (typeof child === "string") {
					embed.setDescription(child);
				}

				if (child instanceof EmbedFieldBuilder) {
					embed.addFields(child);
				}
			}
		}
	}

	return embed;
}
