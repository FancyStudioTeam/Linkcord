import type { ImageExtension, ImageSize } from "../constants.js";

/**
 * A static class containing utility methods for working with images.
 *
 * @public
 */
export class ImageUtils {
  /**
   * Gets the Discord CDN url.
   * @returns The Discord CDN url.
   */
  static get CDN_URL(): string {
    return "https://cdn.discordapp.com";
  }

  /**
   * Creates an image url for the asset.
   *
   * @param assetRoute - The route of the asset.
   * @param options - The options to use when creating the image url.
   * @returns The created asset url.
   *
   * @remarks
   * - The `assetRoute` parameter should not include the asset extension as we
   *   will get its dynamic extension and append it at the end of the url.
   */
  static createImageUrl(
    assetRoute: string,
    options: CreateImageUrlOptions = {
      extension: "webp",
      forceStatic: false,
    },
  ): string {
    const { extension, forceStatic, size } = options;
    /**
     * Asset hashes are usually at the end of the route.
     *
     * We need to retreive the asset hash from the route to get its dynamic
     * extension.
     *
     * For that, we can split the route using the "/" separator and get the
     * last element of the array.
     *
     * This element should be considered as the asset hash.
     */
    const asset = assetRoute.split("/").at(-1) ?? "";
    const dynamicExtension = ImageUtils.getDynamicExtension(asset, {
      extension,
      forceStatic,
    });
    const assetUrl = new URL(`${ImageUtils.CDN_URL}/${assetRoute}.${dynamicExtension}`);
    const { searchParams } = assetUrl;

    if (size) {
      searchParams.set("size", size.toString());
    }

    return assetUrl.toString();
  }

  /**
   * Gets the dynamic extension of the asset hash.
   *
   * @param assetHash - The asset hash to get its dynamic extension.
   * @param options - The options to use when getting the dynamic extension.
   * @returns The dynamic extension of the asset hash.
   */
  static getDynamicExtension(
    assetHash: string,
    options: GetDynamicExtensionOptions = {
      extension: "webp",
      forceStatic: false,
    },
  ): string {
    const { extension, forceStatic } = options;

    return ImageUtils.isAvailableAsAnimated(assetHash) && !forceStatic ? "gif" : (extension ?? "webp");
  }

  /**
   * Checks whether the asset hash is available in an animated format.
   *
   * @param assetHash - The asset hash to check if it is available in an
   *   animated format.
   * @returns Whether the asset hash is available in an animated format.
   */
  static isAvailableAsAnimated(assetHash: string): boolean {
    if (typeof assetHash !== "string") {
      return false;
    }

    return assetHash.startsWith("a_");
  }
}

/**
 * @public
 */
export interface CreateImageUrlOptions {
  /**
   * The extension to use for the asset.
   *
   * @default "webp"
   */
  extension?: ImageExtension;
  /**
   * Whether to force the return the static format of the asset even if the
   * asset can be in an animated format.
   *
   * @default false
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
export interface GetDynamicExtensionOptions {
  /**
   * The extension to use for the asset.
   *
   * @default "webp"
   */
  extension?: ImageExtension;
  /**
   * Whether to force the return the static format of the asset even if the
   * asset can be in an animated format.
   *
   * @default false
   */
  forceStatic?: boolean;
}
