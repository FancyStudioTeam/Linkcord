import { EmbedBuilder } from "#builders/index.js";
import type {
	APIEmbed,
	APIEmbedAuthor,
	APIEmbedFooter,
	CreateMessageEmbedOptions,
	Embed,
	EmbedAuthor,
	EmbedFooter,
} from "#types/index.js";

/**
 * Normalizes the given embed into a {@link Embed | `Embed`} object.
 *
 * @param embed - The embed to normalize.
 * @returns The normalized {@link Embed | `Embed`} object.
 */
export function normalizeEmbed(embed: CreateMessageEmbedOptions): Embed {
	return embed instanceof EmbedBuilder ? embed.toJSON() : embed;
}

/**
 * Normalizes the given list of embeds into a list of {@link Embed | `Embed`} objects.
 *
 * @param embeds - The list of embeds to normalize.
 * @returns The normalized list of {@link Embed | `Embed`} objects.
 */
export function normalizeEmbeds(embeds: CreateMessageEmbedOptions[]): Embed[] {
	return embeds.map(normalizeEmbed);
}

/**
 * Parses the given {@link APIEmbed | `APIEmbed`} object into an {@link Embed | `Embed`} object.
 *
 * @param embed - The {@link APIEmbed | `APIEmbed`} object to parse.
 * @returns The parsed {@link Embed | `Embed`} object.
 */
export function parseEmbed(embed: APIEmbed): Embed {
	const {
		author,
		color,
		description,
		fields,
		footer,
		image,
		provider,
		thumbnail,
		timestamp,
		title,
		type,
		url,
		video,
	} = embed;
	const embedData: Embed = {};

	if (author) embedData.author = parseEmbedAuthor(author);
	if (color) embedData.color = color;
	if (description) embedData.description = description;
	if (fields) embedData.fields = fields;
	if (footer) embedData.footer = parseEmbedFooter(footer);
	if (image) embedData.image = image;
	if (provider) embedData.provider = provider;
	if (thumbnail) embedData.thumbnail = thumbnail;
	if (timestamp) embedData.timestamp = timestamp;
	if (title) embedData.title = title;
	if (type) embedData.type = type;
	if (url) embedData.url = url;
	if (video) embedData.video = video;

	return embedData;
}

/**
 * Parses the given {@link APIEmbedAuthor | `APIEmbedAuthor`} object into a {@link EmbedAuthor | `EmbedAuthor`} object.
 *
 * @param embedAuthor - The {@link APIEmbedAuthor | `APIEmbedAuthor`} object to parse.
 * @returns The parsed {@link EmbedAuthor | `EmbedAuthor`} object.
 */
export function parseEmbedAuthor(embedAuthor: APIEmbedAuthor): EmbedAuthor {
	const { icon_url: iconURL, name, url } = embedAuthor;
	const embedAuthorData: EmbedAuthor = {
		name,
	};

	if (iconURL) embedAuthorData.iconURL = iconURL;
	if (url) embedAuthorData.url = url;

	return embedAuthorData;
}

/**
 * Parses the given {@link APIEmbedFooter | `APIEmbedFooter`} object into a {@link EmbedFooter | `EmbedFooter`} object.
 *
 * @param embedFooter - The {@link APIEmbedFooter | `APIEmbedFooter`} object to parse.
 * @returns The parsed {@link EmbedFooter | `EmbedFooter`} object.
 */
export function parseEmbedFooter(embedFooter: APIEmbedFooter): EmbedFooter {
	const { icon_url: iconURL, text } = embedFooter;
	const embedFooterData: EmbedFooter = {
		text,
	};

	if (iconURL) embedFooterData.iconURL = iconURL;

	return embedFooterData;
}

/**
 * Parses the given list of {@link APIEmbed | `APIEmbed`} objects into a list of {@link Embed | `Embed`} objects.
 *
 * @param embeds - The list of {@link APIEmbed | `APIEmbed`} objects to parse.
 * @returns The parsed list of {@link Embed | `Embed`} objects.
 */
export function parseEmbeds(embeds: APIEmbed[]): Embed[] {
	return embeds.map(parseEmbed);
}

/**
 * Serializes the given {@link Embed | `Embed`} object into an {@link APIEmbed | `APIEmbed`} object.
 *
 * @param embed - The {@link Embed | `Embed`} object to serialize.
 * @returns The serialized {@link APIEmbed | `APIEmbed`} object.
 */
export function serializeEmbed(embed: Embed): APIEmbed {
	const {
		author,
		color,
		description,
		fields,
		footer,
		image,
		provider,
		thumbnail,
		timestamp,
		title,
		type,
		url,
		video,
	} = embed;
	const embedData: APIEmbed = {};

	if (author) embedData.author = serializeEmbedAuthor(author);
	if (color) embedData.color = color;
	if (description) embedData.description = description;
	if (fields) embedData.fields = fields;
	if (footer) embedData.footer = serializeEmbedFooter(footer);
	if (image) embedData.image = image;
	if (provider) embedData.provider = provider;
	if (thumbnail) embedData.thumbnail = thumbnail;
	if (timestamp) embedData.timestamp = timestamp;
	if (title) embedData.title = title;
	if (type) embedData.type = type;
	if (url) embedData.url = url;
	if (video) embedData.video = video;

	return embedData;
}

/**
 * Serializes the given {@link EmbedAuthor | `EmbedAuthor`} object into a {@link APIEmbedAuthor | `APIEmbedAuthor`} object.
 *
 * @param embedAuthor - The {@link EmbedAuthor | `EmbedAuthor`} object to serialize.
 * @returns The serialized {@link APIEmbedAuthor | `APIEmbedAuthor`} object.
 */
export function serializeEmbedAuthor(embedAuthor: EmbedAuthor): APIEmbedAuthor {
	const { iconURL, name, url } = embedAuthor;
	const embedAuthorData: APIEmbedAuthor = {
		name,
	};

	if (iconURL) embedAuthorData.icon_url = iconURL;
	if (url) embedAuthorData.url = url;

	return embedAuthorData;
}

/**
 * Serializes the given {@link EmbedFooter | `EmbedFooter`} object into a {@link APIEmbedFooter | `APIEmbedFooter`} object.
 *
 * @param embedFooter - The {@link EmbedFooter | `EmbedFooter`} object to serialize.
 * @returns The serialized {@link APIEmbedFooter | `APIEmbedFooter`} object.
 */
export function serializeEmbedFooter(embedFooter: EmbedFooter): APIEmbedFooter {
	const { iconURL, text } = embedFooter;
	const embedFooterData: APIEmbedFooter = {
		text,
	};

	if (iconURL) embedFooterData.icon_url = iconURL;

	return embedFooterData;
}

/**
 * Serializes the given list of {@link Embed | `Embed`} objects into a list of {@link APIEmbed | `APIEmbed`} objects.
 *
 * @param embeds - The list of {@link Embed | `Embed`} objects to serialize.
 * @returns The serialized list of {@link APIEmbed | `APIEmbed`} objects.
 */
export function serializeEmbeds(embeds: Embed[]): APIEmbed[] {
	return embeds.map(serializeEmbed);
}
