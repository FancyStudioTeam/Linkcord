import type { APIEmbed, Embed } from "#types/index.js";

/**
 * Transforms a list of {@link APIEmbed | `APIEmbed`} objects into a list of {@link Embed | `Embed`} objects.
 * @param embeds - The list of {@link APIEmbed | `APIEmbed`} objects to transform.
 * @returns The list of transformed {@link Embed | `Embed`} objects.
 */
function transformEmbedsToParsed(embeds: APIEmbed[]): Embed[] {
	const embedsData: Embed[] = [];

	for (const embed of embeds) {
		const embedData = transformEmbedToParsed(embed);

		embedsData.push(embedData);
	}

	return embedsData;
}

/**
 * Transforms an {@link APIEmbed | `APIEmbed`} object into an {@link Embed | `Embed`} object.
 * @param embed - The {@link APIEmbed | `APIEmbed`} object to transform.
 * @returns The transformed {@link Embed | `Embed`} object.
 */
function transformEmbedToParsed(embed: APIEmbed): Embed {
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
	const embedData: Embed = {
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
	};

	return embedData;
}

/** Transformers for message objects. */
export const MessagesTransformer = Object.freeze({
	transformEmbedsToParsed,
	transformEmbedToParsed,
});
