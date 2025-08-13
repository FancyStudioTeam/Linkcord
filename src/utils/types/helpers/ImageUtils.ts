import type { IMAGE_EXTENSIONS, IMAGE_SIZES } from "#utils/utils/Constants.js";

/**
 * The options to use when creating an URL for an image.
 * @public
 */
export interface ImageURLOptions {
	/**
	 * The extension of the image.
	 * @default "webp"
	 */
	extension?: ImageExtension;
	/**
	 * Whether the image must be always a static image.
	 * @default false
	 */
	forceStatic?: boolean;
	/**
	 * The size of the image.
	 * @default 1024
	 */
	size?: ImageSize;
}

/**
 * The options to use when getting the dynamic extension of an image.
 * @public
 */
export interface GetDynamicExtensionOptions {
	/**
	 * The extension of the image.
	 * @default "webp"
	 */
	extension?: ImageExtension;
	/**
	 * Whether the image must be always a static image.
	 * @default false
	 */
	forceStatic?: boolean;
}

/**
 * Represents the extension of an image.
 * @public
 */
export type ImageExtension = (typeof IMAGE_EXTENSIONS)[number];

/**
 * Represents the size of an image.
 * @public
 */
export type ImageSize = (typeof IMAGE_SIZES)[number];
