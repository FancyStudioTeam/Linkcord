/** The image extensions that can be used when getting an image. */
export const IMAGE_EXTENSIONS = ["jpg", "jpeg", "png", "gif", "webp"] as const;

/** The image sizes that can be used when getting an image. */
//  biome-ignore lint/style/noMagicNumbers: These values can be magic numbers.
export const IMAGE_SIZES = [16, 32, 64, 128, 256, 512, 1024, 2048, 4096] as const;
