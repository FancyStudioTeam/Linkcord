import type {
	APIEmbed,
	APIEmbedAuthor,
	APIEmbedField,
	APIEmbedFooter,
	APIEmbedImage,
	APIEmbedProvider,
	APIEmbedThumbnail,
	APIEmbedVideo,
	Embed,
	EmbedAuthor,
	EmbedField,
	EmbedFooter,
	EmbedImage,
	EmbedProvider,
	EmbedThumbnail,
	EmbedVideo,
} from "#types/index.js";

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-structure
 */
export function serializeEmbed(embed: Embed): APIEmbed {
	const { author, color, description, fields, footer, image, provider, thumbnail, timestamp, title, type, url, video } = embed;
	const rawEmbed: Embed = {};

	if (author) {
		rawEmbed.author = serializeEmbedAuthor(author);
	}

	if (color) {
		rawEmbed.color = color;
	}

	if (description) {
		rawEmbed.description = description;
	}

	if (fields) {
		rawEmbed.fields = serializeEmbedFieldsArray(fields);
	}

	if (footer) {
		rawEmbed.footer = serializeEmbedFooter(footer);
	}

	if (image) {
		rawEmbed.image = serializeEmbedImage(image);
	}

	if (provider) {
		rawEmbed.provider = serializeEmbedProvider(provider);
	}

	if (thumbnail) {
		rawEmbed.thumbnail = serializeEmbedThumbnail(thumbnail);
	}

	if (timestamp) {
		rawEmbed.timestamp = timestamp;
	}

	if (title) {
		rawEmbed.title = title;
	}

	if (type) {
		rawEmbed.type = type;
	}

	if (url) {
		rawEmbed.url = url;
	}

	if (video) {
		rawEmbed.video = serializeEmbedVideo(video);
	}

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
	const { iconURL, name, proxyIconURL, url } = embedAuthor;
	const rawEmbedAuthor: APIEmbedAuthor = {
		name,
	};

	if (iconURL) {
		rawEmbedAuthor.icon_url = iconURL;
	}

	if (proxyIconURL) {
		rawEmbedAuthor.proxy_icon_url = proxyIconURL;
	}

	if (url) {
		rawEmbedAuthor.url = url;
	}

	return rawEmbedAuthor;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-field-structure
 */
export function serializeEmbedField(embedField: EmbedField): APIEmbedField {
	const { inline, name, value } = embedField;
	const rawEmbedField: APIEmbedField = {
		name,
		value,
	};

	if (inline) {
		rawEmbedField.inline = inline;
	}

	return rawEmbedField;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-field-structure
 */
export function serializeEmbedFieldsArray(embedFieldsArray: EmbedField[]): APIEmbedField[] {
	return embedFieldsArray.map(serializeEmbedField);
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-footer-structure
 */
export function serializeEmbedFooter(embedFooter: EmbedFooter): APIEmbedFooter {
	const { iconURL, proxyIconURL, text } = embedFooter;
	const rawEmbedFooter: APIEmbedFooter = {
		text,
	};

	if (iconURL) {
		rawEmbedFooter.icon_url = iconURL;
	}

	if (proxyIconURL) {
		rawEmbedFooter.proxy_icon_url = proxyIconURL;
	}

	return rawEmbedFooter;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-image-structure
 */
export function serializeEmbedImage(embedImage: EmbedImage): APIEmbedImage {
	const { height, proxyURL, url, width } = embedImage;
	const rawEmbedImage: APIEmbedImage = {
		url,
	};

	if (height) {
		rawEmbedImage.height = height;
	}

	if (proxyURL) {
		rawEmbedImage.proxy_url = proxyURL;
	}

	if (width) {
		rawEmbedImage.width = width;
	}

	return rawEmbedImage;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-thumbnail-structure
 */
export function serializeEmbedThumbnail(embedThumbnail: EmbedThumbnail): APIEmbedThumbnail {
	const { height, proxyURL, url, width } = embedThumbnail;
	const rawEmbedThumbnail: APIEmbedThumbnail = {
		url,
	};

	if (height) {
		rawEmbedThumbnail.height = height;
	}

	if (proxyURL) {
		rawEmbedThumbnail.proxy_url = proxyURL;
	}

	if (width) {
		rawEmbedThumbnail.width = width;
	}

	return rawEmbedThumbnail;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-provider-structure
 */
export function serializeEmbedProvider(embedProvider: EmbedProvider): APIEmbedProvider {
	const { name, url } = embedProvider;
	const rawEmbedProvider: APIEmbedProvider = {};

	if (name) {
		rawEmbedProvider.name = name;
	}

	if (url) {
		rawEmbedProvider.url = url;
	}

	return rawEmbedProvider;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-video-structure
 */
export function serializeEmbedVideo(embedVideo: EmbedVideo): APIEmbedVideo {
	const { height, proxyURL, url, width } = embedVideo;
	const rawEmbedVideo: APIEmbedVideo = {};

	if (height) {
		rawEmbedVideo.height = height;
	}

	if (proxyURL) {
		rawEmbedVideo.proxy_url = proxyURL;
	}

	if (url) {
		rawEmbedVideo.url = url;
	}

	if (width) {
		rawEmbedVideo.width = width;
	}

	return rawEmbedVideo;
}
