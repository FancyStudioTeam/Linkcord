import type {
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
	RawEmbed,
} from '#types/index.js';

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-structure
 */
export function deserializeEmbed(rawEmbed: RawEmbed): Embed {
	const { author, color, description, fields, footer, image, provider, thumbnail, timestamp, title, type, url, video } = rawEmbed;
	const embed: Embed = {};

	if (author) {
		embed.author = deserializeEmbedAuthor(author);
	}

	if (color) {
		embed.color = color;
	}

	if (description) {
		embed.description = description;
	}

	if (fields) {
		embed.fields = deserializeEmbedFieldsArray(fields);
	}

	if (footer) {
		embed.footer = deserializeEmbedFooter(footer);
	}

	if (image) {
		embed.image = deserializeEmbedImage(image);
	}

	if (provider) {
		embed.provider = deserializeEmbedProvider(provider);
	}

	if (thumbnail) {
		embed.thumbnail = deserializeEmbedThumbnail(thumbnail);
	}

	if (timestamp) {
		embed.timestamp = timestamp;
	}

	if (title) {
		embed.title = title;
	}

	if (type) {
		embed.type = type;
	}

	if (url) {
		embed.url = url;
	}

	if (video) {
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
export function deserializeEmbedAuthor(rawEmbedAuthor: APIEmbedAuthor): EmbedAuthor {
	const { icon_url, name, proxy_icon_url, url } = rawEmbedAuthor;
	const embedAuthor: EmbedAuthor = {
		name,
	};

	if (icon_url) {
		embedAuthor.iconURL = icon_url;
	}

	if (proxy_icon_url) {
		embedAuthor.proxyIconURL = proxy_icon_url;
	}

	if (url) {
		embedAuthor.url = url;
	}

	return embedAuthor;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-field-structure
 */
export function deserializeEmbedField(rawEmbedField: APIEmbedField): EmbedField {
	const { inline, name, value } = rawEmbedField;
	const embedField: EmbedField = {
		name,
		value,
	};

	if (inline) {
		embedField.inline = inline;
	}

	return embedField;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-field-structure
 */
export function deserializeEmbedFieldsArray(rawEmbedFieldsArray: APIEmbedField[]): EmbedField[] {
	return rawEmbedFieldsArray.map(deserializeEmbedField);
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-footer-structure
 */
export function deserializeEmbedFooter(rawEmbedFooter: APIEmbedFooter): EmbedFooter {
	const { icon_url, proxy_icon_url, text } = rawEmbedFooter;
	const embedFooter: EmbedFooter = {
		text,
	};

	if (icon_url) {
		embedFooter.iconURL = icon_url;
	}

	if (proxy_icon_url) {
		embedFooter.proxyIconURL = proxy_icon_url;
	}

	return embedFooter;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-image-structure
 */
export function deserializeEmbedImage(rawEmbedImage: APIEmbedImage): EmbedImage {
	const { height, proxy_url, url, width } = rawEmbedImage;
	const embedImage: EmbedImage = {
		url,
	};

	if (height) {
		embedImage.height = height;
	}

	if (proxy_url) {
		embedImage.proxyURL = proxy_url;
	}

	if (width) {
		embedImage.width = width;
	}

	return embedImage;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-thumbnail-structure
 */
export function deserializeEmbedThumbnail(rawEmbedThumbnail: APIEmbedThumbnail): EmbedThumbnail {
	const { height, proxy_url, url, width } = rawEmbedThumbnail;
	const embedThumbnail: EmbedThumbnail = {
		url,
	};

	if (height) {
		embedThumbnail.height = height;
	}

	if (proxy_url) {
		embedThumbnail.proxyURL = proxy_url;
	}

	if (width) {
		embedThumbnail.width = width;
	}

	return embedThumbnail;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-provider-structure
 */
export function deserializeEmbedProvider(rawEmbedProvider: APIEmbedProvider): EmbedProvider {
	const { name, url } = rawEmbedProvider;
	const embedProvider: EmbedProvider = {};

	if (name) {
		embedProvider.name = name;
	}

	if (url) {
		embedProvider.url = url;
	}

	return embedProvider;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-video-structure
 */
export function deserializeEmbedVideo(rawEmbedVideo: APIEmbedVideo): EmbedVideo {
	const { height, proxy_url, url, width } = rawEmbedVideo;
	const embedVideo: EmbedVideo = {};

	if (height) {
		embedVideo.height = height;
	}

	if (proxy_url) {
		embedVideo.proxyURL = proxy_url;
	}

	if (url) {
		embedVideo.url = url;
	}

	if (width) {
		embedVideo.width = width;
	}

	return embedVideo;
}
