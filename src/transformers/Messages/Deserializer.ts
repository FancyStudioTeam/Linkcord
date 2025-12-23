import type { APIEmbed, APIEmbedAuthor, APIEmbedFooter, Embed, EmbedAuthor, EmbedFooter } from "#types/index.js";
import { assignIfDefined } from "#utils/functions/assignIfDefined.js";

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-structure
 */
export function deserializeEmbed(rawEmbed: APIEmbed): Embed {
	const { author, color, description, fields, footer, image, provider, thumbnail, timestamp, title, type, url, video } = rawEmbed;
	const embed: Embed = {};

	if (author) {
		embed.author = deserializeEmbedAuthor(author);
	}

	if (footer) {
		embed.footer = deserializeEmbedFooter(footer);
	}

	assignIfDefined(embed, "color", color);
	assignIfDefined(embed, "description", description);
	assignIfDefined(embed, "fields", fields);
	assignIfDefined(embed, "image", image);
	assignIfDefined(embed, "provider", provider);
	assignIfDefined(embed, "thumbnail", thumbnail);
	assignIfDefined(embed, "timestamp", timestamp);
	assignIfDefined(embed, "title", title);
	assignIfDefined(embed, "type", type);
	assignIfDefined(embed, "url", url);
	assignIfDefined(embed, "video", video);

	return embed;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-structure
 */
export function deserializeEmbedsArray(rawEmbedsArray: APIEmbed[]): Embed[] {
	return rawEmbedsArray.map(deserializeEmbed);
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-author-structure
 */
export function deserializeEmbedAuthor(rawEmbedAuthor: APIEmbedAuthor): EmbedAuthor {
	const { icon_url, name, url } = rawEmbedAuthor;
	const embedAuthor: EmbedAuthor = {
		name,
	};

	assignIfDefined(embedAuthor, "iconURL", icon_url);
	assignIfDefined(embedAuthor, "url", url);

	return embedAuthor;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-footer-structure
 */
export function deserializeEmbedFooter(rawEmbedFooter: APIEmbedFooter): EmbedFooter {
	const { icon_url, text } = rawEmbedFooter;
	const embedFooter: EmbedFooter = {
		text,
	};

	assignIfDefined(embedFooter, "iconURL", icon_url);

	return embedFooter;
}
