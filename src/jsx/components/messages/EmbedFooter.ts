import { EmbedFooterBuilder } from "#builders/index.js";
import type { EmbedFooterProperties } from "#jsx/types/index.js";

/**
 * Creates an {@link EmbedFooterBuilder | `EmbedFooterBuilder`} instance using a JSX component.
 * @param properties - The properties of the {@link EmbedFooter | `EmbedFooter`} JSX component.
 * @returns The created {@link EmbedFooterBuilder | `EmbedFooterBuilder`} instance.
 */
export function EmbedFooter(properties: EmbedFooterProperties): EmbedFooterBuilder {
	const embedFooter = new EmbedFooterBuilder();
	const { children, iconURL, text } = properties;

	if (iconURL) embedFooter.setIconURL(iconURL);
	if (text) embedFooter.setText(text);

	if (typeof children === "string") {
		embedFooter.setText(children);
	}

	return embedFooter;
}
