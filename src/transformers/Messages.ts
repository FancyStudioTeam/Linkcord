import type {
	APIEmbed,
	APIEmbedAuthor,
	APIEmbedFooter,
	CreateMessageOptions,
	Embed,
	EmbedAuthor,
	EmbedFooter,
	RESTPostAPIMessageJSONParams,
} from "#types/index.js";
import { BitFieldResolver } from "#utils/index.js";
import { serializeMessageComponentsArray } from "./Components.js";

export function normalizeEmbed(embed: Embed): Embed {
	return embed;
}

export function normalizeEmbeds(embeds: Embed[]): Embed[] {
	return embeds.map(normalizeEmbed);
}

export function parseEmbed(embed: APIEmbed): Embed {
	const { author, color, description, fields, footer, image, provider, thumbnail, timestamp, title, type, url, video } = embed;
	const parsedEmbed: Embed = {};

	if (author) parsedEmbed.author = parseEmbedAuthor(author);
	if (color) parsedEmbed.color = color;
	if (description) parsedEmbed.description = description;
	if (fields) parsedEmbed.fields = fields;
	if (footer) parsedEmbed.footer = parseEmbedFooter(footer);
	if (image) parsedEmbed.image = image;
	if (provider) parsedEmbed.provider = provider;
	if (thumbnail) parsedEmbed.thumbnail = thumbnail;
	if (timestamp) parsedEmbed.timestamp = timestamp;
	if (title) parsedEmbed.title = title;
	if (type) parsedEmbed.type = type;
	if (url) parsedEmbed.url = url;
	if (video) parsedEmbed.video = video;

	return parsedEmbed;
}

export function parseEmbedAuthor(embedAuthor: APIEmbedAuthor): EmbedAuthor {
	const { icon_url: iconURL, name, url } = embedAuthor;
	const parsedEmbedAuthor: EmbedAuthor = {
		name,
	};

	if (iconURL) parsedEmbedAuthor.iconURL = iconURL;
	if (url) parsedEmbedAuthor.url = url;

	return parsedEmbedAuthor;
}

export function parseEmbedFooter(embedFooter: APIEmbedFooter): EmbedFooter {
	const { icon_url: iconURL, text } = embedFooter;
	const parsedEmbedFooter: EmbedFooter = {
		text,
	};

	if (iconURL) parsedEmbedFooter.iconURL = iconURL;

	return parsedEmbedFooter;
}

export function parseEmbeds(embeds: APIEmbed[]): Embed[] {
	return embeds.map(parseEmbed);
}

export function serializeEmbed(embed: Embed): APIEmbed {
	const { author, color, description, fields, footer, image, provider, thumbnail, timestamp, title, type, url, video } = embed;
	const serializedEmbed: APIEmbed = {};

	if (author) serializedEmbed.author = serializeEmbedAuthor(author);
	if (color) serializedEmbed.color = color;
	if (description) serializedEmbed.description = description;
	if (fields) serializedEmbed.fields = fields;
	if (footer) serializedEmbed.footer = serializeEmbedFooter(footer);
	if (image) serializedEmbed.image = image;
	if (provider) serializedEmbed.provider = provider;
	if (thumbnail) serializedEmbed.thumbnail = thumbnail;
	if (timestamp) serializedEmbed.timestamp = timestamp;
	if (title) serializedEmbed.title = title;
	if (type) serializedEmbed.type = type;
	if (url) serializedEmbed.url = url;
	if (video) serializedEmbed.video = video;

	return serializedEmbed;
}

export function serializeEmbedAuthor(embedAuthor: EmbedAuthor): APIEmbedAuthor {
	const { iconURL, name, url } = embedAuthor;
	const serializedEmbedAuthor: APIEmbedAuthor = {
		name,
	};

	if (iconURL) serializedEmbedAuthor.icon_url = iconURL;
	if (url) serializedEmbedAuthor.url = url;

	return serializedEmbedAuthor;
}

export function serializeEmbedFooter(embedFooter: EmbedFooter): APIEmbedFooter {
	const { iconURL, text } = embedFooter;
	const serializedEmbedFooter: APIEmbedFooter = {
		text,
	};

	if (iconURL) serializedEmbedFooter.icon_url = iconURL;

	return serializedEmbedFooter;
}

export function serializeEmbeds(embeds: Embed[]): APIEmbed[] {
	return embeds.map(serializeEmbed);
}

export function serializeCreateMessageOptions(createMessageOptions: CreateMessageOptions): RESTPostAPIMessageJSONParams {
	const { components, content, flags } = createMessageOptions;
	const serializedCreateMessageOptions: RESTPostAPIMessageJSONParams = {};

	if (components) serializedCreateMessageOptions.components = serializeMessageComponentsArray(components);
	if (content) serializedCreateMessageOptions.content = content;
	if (flags) serializedCreateMessageOptions.flags = new BitFieldResolver().add(...flags);

	return serializedCreateMessageOptions;
}
