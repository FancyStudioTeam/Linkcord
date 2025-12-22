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
import { serializeMessageComponents } from "./Components.js";

export function normalizeEmbed(embed: Embed): Embed {
	return embed;
}

export function normalizeEmbeds(embeds: Embed[]): Embed[] {
	return embeds.map(normalizeEmbed);
}

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

export function parseEmbedAuthor(embedAuthor: APIEmbedAuthor): EmbedAuthor {
	const { icon_url: iconURL, name, url } = embedAuthor;
	const embedAuthorData: EmbedAuthor = {
		name,
	};

	if (iconURL) embedAuthorData.iconURL = iconURL;
	if (url) embedAuthorData.url = url;

	return embedAuthorData;
}

export function parseEmbedFooter(embedFooter: APIEmbedFooter): EmbedFooter {
	const { icon_url: iconURL, text } = embedFooter;
	const embedFooterData: EmbedFooter = {
		text,
	};

	if (iconURL) embedFooterData.iconURL = iconURL;

	return embedFooterData;
}

export function parseEmbeds(embeds: APIEmbed[]): Embed[] {
	return embeds.map(parseEmbed);
}

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

export function serializeEmbedAuthor(embedAuthor: EmbedAuthor): APIEmbedAuthor {
	const { iconURL, name, url } = embedAuthor;
	const embedAuthorData: APIEmbedAuthor = {
		name,
	};

	if (iconURL) embedAuthorData.icon_url = iconURL;
	if (url) embedAuthorData.url = url;

	return embedAuthorData;
}

export function serializeEmbedFooter(embedFooter: EmbedFooter): APIEmbedFooter {
	const { iconURL, text } = embedFooter;
	const embedFooterData: APIEmbedFooter = {
		text,
	};

	if (iconURL) embedFooterData.icon_url = iconURL;

	return embedFooterData;
}

export function serializeEmbeds(embeds: Embed[]): APIEmbed[] {
	return embeds.map(serializeEmbed);
}

export function serializeCreateMessageOptions(
	createMessageOptions: CreateMessageOptions,
): RESTPostAPIMessageJSONParams {
	const { components, content, flags } = createMessageOptions;
	const serializedCreateMessageOptions: RESTPostAPIMessageJSONParams = {};

	if (components) serializedCreateMessageOptions.components = serializeMessageComponents(components);
	if (content) serializedCreateMessageOptions.content = content;
	if (flags) serializedCreateMessageOptions.flags = new BitFieldResolver().add(...flags);

	return serializedCreateMessageOptions;
}
