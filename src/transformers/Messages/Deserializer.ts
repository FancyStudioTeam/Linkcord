import type {
	Embed,
	EmbedAuthor,
	EmbedField,
	EmbedFooter,
	EmbedImage,
	EmbedProvider,
	EmbedThumbnail,
	EmbedVideo,
	RawEmbed,
	RawEmbedAuthor,
	RawEmbedField,
	RawEmbedFooter,
	RawEmbedImage,
	RawEmbedProvider,
	RawEmbedThumbnail,
	RawEmbedVideo,
} from '#types/index.js';
import { isUndefined } from '#utils/helpers/AssertionUtils.js';

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-structure
 */
export function deserializeEmbed(rawEmbed: RawEmbed): Embed {
	const { author, color, description, fields, footer, image, provider, thumbnail, timestamp, title, type, url, video } = rawEmbed;
	const embed: Embed = {};

	if (!isUndefined(author)) {
		embed.author = deserializeEmbedAuthor(author);
	}

	if (!isUndefined(color)) {
		embed.color = color;
	}

	if (!isUndefined(description)) {
		embed.description = description;
	}

	if (!isUndefined(fields)) {
		embed.fields = deserializeEmbedFieldsArray(fields);
	}

	if (!isUndefined(footer)) {
		embed.footer = deserializeEmbedFooter(footer);
	}

	if (!isUndefined(image)) {
		embed.image = deserializeEmbedImage(image);
	}

	if (!isUndefined(provider)) {
		embed.provider = deserializeEmbedProvider(provider);
	}

	if (!isUndefined(thumbnail)) {
		embed.thumbnail = deserializeEmbedThumbnail(thumbnail);
	}

	if (!isUndefined(timestamp)) {
		embed.timestamp = timestamp;
	}

	if (!isUndefined(title)) {
		embed.title = title;
	}

	if (!isUndefined(type)) {
		embed.type = type;
	}

	if (!isUndefined(url)) {
		embed.url = url;
	}

	if (!isUndefined(video)) {
		embed.video = deserializeEmbedVideo(video);
	}

	return embed;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-structure
 */
export function deserializeEmbedsArray(rawEmbedsArray: RawEmbed[]): Embed[] {
	return rawEmbedsArray.map(deserializeEmbed);
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-author-structure
 */
export function deserializeEmbedAuthor(rawEmbedAuthor: RawEmbedAuthor): EmbedAuthor {
	const { icon_url, name, proxy_icon_url, url } = rawEmbedAuthor;
	const embedAuthor: EmbedAuthor = {
		name,
	};

	if (!isUndefined(icon_url)) {
		embedAuthor.iconUrl = icon_url;
	}

	if (!isUndefined(proxy_icon_url)) {
		embedAuthor.proxyIconUrl = proxy_icon_url;
	}

	if (!isUndefined(url)) {
		embedAuthor.url = url;
	}

	return embedAuthor;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-field-structure
 */
export function deserializeEmbedField(rawEmbedField: RawEmbedField): EmbedField {
	const { inline, name, value } = rawEmbedField;
	const embedField: EmbedField = {
		name,
		value,
	};

	if (!isUndefined(inline)) {
		embedField.inline = inline;
	}

	return embedField;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-field-structure
 */
export function deserializeEmbedFieldsArray(rawEmbedFieldsArray: RawEmbedField[]): EmbedField[] {
	return rawEmbedFieldsArray.map(deserializeEmbedField);
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-footer-structure
 */
export function deserializeEmbedFooter(rawEmbedFooter: RawEmbedFooter): EmbedFooter {
	const { icon_url, proxy_icon_url, text } = rawEmbedFooter;
	const embedFooter: EmbedFooter = {
		text,
	};

	if (!isUndefined(icon_url)) {
		embedFooter.iconUrl = icon_url;
	}

	if (!isUndefined(proxy_icon_url)) {
		embedFooter.proxyIconUrl = proxy_icon_url;
	}

	return embedFooter;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-image-structure
 */
export function deserializeEmbedImage(rawEmbedImage: RawEmbedImage): EmbedImage {
	const { height, proxy_url, url, width } = rawEmbedImage;
	const embedImage: EmbedImage = {
		url,
	};

	if (!isUndefined(height)) {
		embedImage.height = height;
	}

	if (!isUndefined(proxy_url)) {
		embedImage.proxyUrl = proxy_url;
	}

	if (!isUndefined(width)) {
		embedImage.width = width;
	}

	return embedImage;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-thumbnail-structure
 */
export function deserializeEmbedThumbnail(rawEmbedThumbnail: RawEmbedThumbnail): EmbedThumbnail {
	const { height, proxy_url, url, width } = rawEmbedThumbnail;
	const embedThumbnail: EmbedThumbnail = {
		url,
	};

	if (!isUndefined(height)) {
		embedThumbnail.height = height;
	}

	if (!isUndefined(proxy_url)) {
		embedThumbnail.proxyUrl = proxy_url;
	}

	if (!isUndefined(width)) {
		embedThumbnail.width = width;
	}

	return embedThumbnail;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-provider-structure
 */
export function deserializeEmbedProvider(rawEmbedProvider: RawEmbedProvider): EmbedProvider {
	const { name, url } = rawEmbedProvider;
	const embedProvider: EmbedProvider = {};

	if (!isUndefined(name)) {
		embedProvider.name = name;
	}

	if (!isUndefined(url)) {
		embedProvider.url = url;
	}

	return embedProvider;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-video-structure
 */
export function deserializeEmbedVideo(rawEmbedVideo: RawEmbedVideo): EmbedVideo {
	const { height, proxy_url, url, width } = rawEmbedVideo;
	const embedVideo: EmbedVideo = {};

	if (!isUndefined(height)) {
		embedVideo.height = height;
	}

	if (!isUndefined(proxy_url)) {
		embedVideo.proxyUrl = proxy_url;
	}

	if (!isUndefined(url)) {
		embedVideo.url = url;
	}

	if (!isUndefined(width)) {
		embedVideo.width = width;
	}

	return embedVideo;
}
