/**
 * @public
 */
export const ALLOWED_IMAGE_EXTENSIONS = ["jpg", "jpeg", "png", "gif", "webp"] as const;

/**
 * @public
 */
export const ALLOWED_IMAGE_SIZES = [16, 32, 64, 128, 256, 512, 1024, 2048, 4096] as const;

/**
 * @public
 */
export interface ImageUrlOptions {
  /**
   * The extension to use for the asset.
   */
  extension?: ImageExtension;
  /**
   * Whether to force the use of the static version of the asset even if the
   * asset hash is animated.
   */
  forceStatic?: boolean;
  /**
   * The size to use for the asset.
   */
  size?: ImageSize;
}

/**
 * @public
 */
export type ImageExtension = (typeof ALLOWED_IMAGE_EXTENSIONS)[number];

/**
 * @public
 */
export type ImageSize = (typeof ALLOWED_IMAGE_SIZES)[number];
