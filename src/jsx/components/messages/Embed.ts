import { EmbedBuilder, EmbedFieldBuilder } from "#builders/index.js";
import type { EmbedProperties } from "#jsx/types/index.js";

/**
 * Creates an {@link EmbedBuilder | `EmbedBuilder`} instance using a JSX component.
 * @param properties - The properties of the {@link Embed | `Embed`} JSX component.
 * @returns The created {@link EmbedBuilder | `EmbedBuilder`} instance.
 */
export function Embed(properties: EmbedProperties): EmbedBuilder {
	const embed = new EmbedBuilder();
	const {
		author,
		children,
		color,
		description,
		fields,
		footer,
		image,
		thumbnail,
		timestamp,
		title,
		url,
	} = properties;

	author && embed.setAuthor(author);
	color && embed.setColor(color);
	description && embed.setDescription(description);
	fields && embed.addFields(fields);
	footer && embed.setFooter(footer);
	image && embed.setImage(image);
	thumbnail && embed.setThumbnail(thumbnail);
	timestamp && embed.setTimestamp(timestamp);
	title && embed.setTitle(title);
	url && embed.setURL(url);

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
