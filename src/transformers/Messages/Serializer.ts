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
export function serializeEmbed(embed: Embed): RawEmbed {
	const { author, color, description, fields, footer, image, provider, thumbnail, timestamp, title, type, url, video } = embed;
	const rawEmbed: RawEmbed = {};

	if (!isUndefined(author)) {
		rawEmbed.author = serializeEmbedAuthor(author);
	}

	if (!isUndefined(color)) {
		rawEmbed.color = color;
	}

	if (!isUndefined(description)) {
		rawEmbed.description = description;
	}

	if (!isUndefined(fields)) {
		rawEmbed.fields = serializeEmbedFieldsArray(fields);
	}

	if (!isUndefined(footer)) {
		rawEmbed.footer = serializeEmbedFooter(footer);
	}

	if (!isUndefined(image)) {
		rawEmbed.image = serializeEmbedImage(image);
	}

	if (!isUndefined(provider)) {
		rawEmbed.provider = serializeEmbedProvider(provider);
	}

	if (!isUndefined(thumbnail)) {
		rawEmbed.thumbnail = serializeEmbedThumbnail(thumbnail);
	}

	if (!isUndefined(timestamp)) {
		rawEmbed.timestamp = timestamp;
	}

	if (!isUndefined(title)) {
		rawEmbed.title = title;
	}

	if (!isUndefined(type)) {
		rawEmbed.type = type;
	}

	if (!isUndefined(url)) {
		rawEmbed.url = url;
	}

	if (!isUndefined(video)) {
		rawEmbed.video = serializeEmbedVideo(video);
	}

	return rawEmbed;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-structure
 */
export function serializeEmbedsArray(embedsArray: Embed[]): RawEmbed[] {
	return embedsArray.map(serializeEmbed);
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-author-structure
 */
export function serializeEmbedAuthor(embedAuthor: EmbedAuthor): RawEmbedAuthor {
	const { iconUrl, name, proxyIconUrl, url } = embedAuthor;
	const rawEmbedAuthor: RawEmbedAuthor = {
		name,
	};

	if (!isUndefined(iconUrl)) {
		rawEmbedAuthor.icon_url = iconUrl;
	}

	if (!isUndefined(proxyIconUrl)) {
		rawEmbedAuthor.proxy_icon_url = proxyIconUrl;
	}

	if (!isUndefined(url)) {
		rawEmbedAuthor.url = url;
	}

	return rawEmbedAuthor;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-field-structure
 */
export function serializeEmbedField(embedField: EmbedField): RawEmbedField {
	const { inline, name, value } = embedField;
	const rawEmbedField: RawEmbedField = {
		name,
		value,
	};

	if (!isUndefined(inline)) {
		rawEmbedField.inline = inline;
	}

	return rawEmbedField;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-field-structure
 */
export function serializeEmbedFieldsArray(embedFieldsArray: EmbedField[]): RawEmbedField[] {
	return embedFieldsArray.map(serializeEmbedField);
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-footer-structure
 */
export function serializeEmbedFooter(embedFooter: EmbedFooter): RawEmbedFooter {
	const { iconUrl, proxyIconUrl, text } = embedFooter;
	const rawEmbedFooter: RawEmbedFooter = {
		text,
	};

	if (!isUndefined(iconUrl)) {
		rawEmbedFooter.icon_url = iconUrl;
	}

	if (!isUndefined(proxyIconUrl)) {
		rawEmbedFooter.proxy_icon_url = proxyIconUrl;
	}

	return rawEmbedFooter;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-image-structure
 */
export function serializeEmbedImage(embedImage: EmbedImage): RawEmbedImage {
	const { height, proxyUrl, url, width } = embedImage;
	const rawEmbedImage: RawEmbedImage = {
		url,
	};

	if (!isUndefined(height)) {
		rawEmbedImage.height = height;
	}

	if (!isUndefined(proxyUrl)) {
		rawEmbedImage.proxy_url = proxyUrl;
	}

	if (!isUndefined(width)) {
		rawEmbedImage.width = width;
	}

	return rawEmbedImage;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-thumbnail-structure
 */
export function serializeEmbedThumbnail(embedThumbnail: EmbedThumbnail): RawEmbedThumbnail {
	const { height, proxyUrl, url, width } = embedThumbnail;
	const rawEmbedThumbnail: RawEmbedThumbnail = {
		url,
	};

	if (!isUndefined(height)) {
		rawEmbedThumbnail.height = height;
	}

	if (!isUndefined(proxyUrl)) {
		rawEmbedThumbnail.proxy_url = proxyUrl;
	}

	if (!isUndefined(width)) {
		rawEmbedThumbnail.width = width;
	}

	return rawEmbedThumbnail;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-provider-structure
 */
export function serializeEmbedProvider(embedProvider: EmbedProvider): RawEmbedProvider {
	const { name, url } = embedProvider;
	const rawEmbedProvider: RawEmbedProvider = {};

	if (!isUndefined(name)) {
		rawEmbedProvider.name = name;
	}

	if (!isUndefined(url)) {
		rawEmbedProvider.url = url;
	}

	return rawEmbedProvider;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-video-structure
 */
export function serializeEmbedVideo(embedVideo: EmbedVideo): RawEmbedVideo {
	const { height, proxyUrl, url, width } = embedVideo;
	const rawEmbedVideo: RawEmbedVideo = {};

	if (!isUndefined(height)) {
		rawEmbedVideo.height = height;
	}

	if (!isUndefined(proxyUrl)) {
		rawEmbedVideo.proxy_url = proxyUrl;
	}

	if (!isUndefined(url)) {
		rawEmbedVideo.url = url;
	}

	if (!isUndefined(width)) {
		rawEmbedVideo.width = width;
	}

	return rawEmbedVideo;
}
