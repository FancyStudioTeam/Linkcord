import type {
	GetDynamicExtensionOptions,
	ImageExtension,
	ImageURLOptions,
} from "#utils/types/index.js";
import { IMAGE_EXTENSIONS, IMAGE_SIZES } from "#utils/utils/Constants.js";

const DISCORD_CDN_URL = "https://cdn.discordapp.com";

/**
 * Creates an URL for an image with the given options.
 * @param assetEndpoint - The endpoint of the asset.
 * @param options - The options to use when creating the URL.
 * @returns The created URL for the image.
 */
function createImageURL(
	assetEndpoint: string,
	options: ImageURLOptions = {
		extension: "webp",
		forceStatic: false,
		size: 1024,
	},
): string {
	const { extension, forceStatic, size } = options;

	// @ts-expect-error
	if (!(IMAGE_EXTENSIONS.includes(extension) && IMAGE_SIZES.includes(size))) {
		throw new TypeError(
			'The second parameter (options) contains an invalid value for the "extension" or "size" properties.',
		);
	}

	const splitedAssetEndpoint = assetEndpoint.split("/");
	// The last element of the array is considered as the asset hash.
	const assetHash = splitedAssetEndpoint.at(-1) ?? "";

	const dynamicExtension = getDynamicExtension(assetHash, {
		extension,
		forceStatic,
	});

	const fullAssetURL = `${DISCORD_CDN_URL}/${assetEndpoint}.${dynamicExtension}`;

	const assetURL = new URL(fullAssetURL);
	const { searchParams } = assetURL;

	searchParams.append("size", String(size) ?? "1024");

	const assetURLString = assetURL.toString();

	return assetURLString;
}

/**
 * Gets the dynamic extension of an image with the given options.
 * @param assetHash - The hash of the asset.
 * @param options - The options to use when getting the dynamic extension.
 * @returns The chosen dynamic extension.
 */
function getDynamicExtension(
	assetHash: string,
	options: GetDynamicExtensionOptions = {
		extension: "webp",
		forceStatic: false,
	},
): ImageExtension {
	const { extension, forceStatic } = options;
	const canBeAnimated = isAvailableAsAnimated(assetHash);

	if (canBeAnimated && !forceStatic) {
		return "gif";
	}

	return extension ?? "webp";
}

/**
 * Checks whether the hash is available as an animated asset.
 * @param assetHash - The hash of the asset to check.
 * @returns Whether the hash is available as an animated asset.
 */
function isAvailableAsAnimated(assetHash: string): boolean {
	return typeof assetHash === "string" && assetHash.startsWith("a_");
}

/**
 * Utilities for working with images.
 * @group Utils/Helpers
 * @public
 */
export const ImageUtils = Object.freeze({
	createImageURL,
	getDynamicExtension,
	isAvailableAsAnimated,
});
