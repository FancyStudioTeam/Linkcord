import { EmbedAuthorBuilder } from "#builders/index.js";
import type { EmbedAuthorProperties } from "#jsx/types/index.js";

/**
 * Creates an {@link EmbedAuthorBuilder | `EmbedAuthorBuilder`} instance using a JSX component.
 * @param properties - The properties of the {@link EmbedAuthor | `EmbedAuthor`} JSX component.
 * @returns The created {@link EmbedAuthorBuilder | `EmbedAuthorBuilder`} instance.
 */
export function EmbedAuthor(properties: EmbedAuthorProperties): EmbedAuthorBuilder {
	const embedAuthor = new EmbedAuthorBuilder();
	const { children, iconURL, name, url } = properties;

	if (iconURL) embedAuthor.setIconURL(iconURL);
	if (name) embedAuthor.setName(name);
	if (url) embedAuthor.setURL(url);

	if (typeof children === "string") {
		embedAuthor.setName(children);
	}

	return embedAuthor;
}
