import type { APIEmbed, APIEmbedAuthor, APIEmbedFooter, Embed, EmbedAuthor, EmbedFooter } from "#types/index.js";
import { assignIfDefined } from "#utils/functions/assignIfDefined.js";

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-structure
 */
export function serializeEmbed(embed: Embed): APIEmbed {
	const { author, color, description, fields, footer, image, provider, thumbnail, timestamp, title, type, url, video } = embed;
	const rawEmbed: Embed = {};

	if (author) {
		rawEmbed.author = serializeEmbedAuthor(author);
	}

	if (footer) {
		rawEmbed.footer = serializeEmbedFooter(footer);
	}

	assignIfDefined(rawEmbed, "color", color);
	assignIfDefined(rawEmbed, "description", description);
	assignIfDefined(rawEmbed, "fields", fields);
	assignIfDefined(rawEmbed, "image", image);
	assignIfDefined(rawEmbed, "provider", provider);
	assignIfDefined(rawEmbed, "thumbnail", thumbnail);
	assignIfDefined(rawEmbed, "timestamp", timestamp);
	assignIfDefined(rawEmbed, "title", title);
	assignIfDefined(rawEmbed, "type", type);
	assignIfDefined(rawEmbed, "url", url);
	assignIfDefined(rawEmbed, "video", video);

	return rawEmbed;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-structure
 */
export function serializeEmbedsArray(embedsArray: Embed[]): APIEmbed[] {
	return embedsArray.map(serializeEmbed);
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-author-structure
 */
export function serializeEmbedAuthor(embedAuthor: EmbedAuthor): APIEmbedAuthor {
	const { iconURL, name, url } = embedAuthor;
	const rawEmbedAuthor: APIEmbedAuthor = {
		name,
	};

	assignIfDefined(rawEmbedAuthor, "icon_url", iconURL);
	assignIfDefined(rawEmbedAuthor, "url", url);

	return rawEmbedAuthor;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-footer-structure
 */
export function serializeEmbedFooter(embedFooter: EmbedFooter): APIEmbedFooter {
	const { iconURL, text } = embedFooter;
	const rawEmbedFooter: EmbedFooter = {
		text,
	};

	assignIfDefined(rawEmbedFooter, "iconURL", iconURL);

	return rawEmbedFooter;
}
