import type { CreateImageURLOptions } from "./structures/ImageUtils.js";

/**
 * @public
 */
export const ALLOWED_IMAGE_EXTENSIONS = ["jpg", "jpeg", "png", "gif", "webp"] as const;

/**
 * biome-ignore-start lint/nursery/noMagicNumbers: These values can be magic
 * numbers.
 */
/**
 * @public
 */
export const ALLOWED_IMAGE_SIZES = [16, 32, 64, 128, 256, 512, 1024, 2048, 4096] as const;
/**
 * biome-ignore-end lint/nursery/noMagicNumbers: These values can be magic
 * numbers.
 */

/**
 * @public
 */
export type ImageExtension = (typeof ALLOWED_IMAGE_EXTENSIONS)[number];

/**
 * @public
 */
export type ImageSize = (typeof ALLOWED_IMAGE_SIZES)[number];

/**
 * @public
 */
export type ImageURLOptions = CreateImageURLOptions;
