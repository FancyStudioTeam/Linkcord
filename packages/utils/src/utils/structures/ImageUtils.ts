import type { ImageExtension, ImageSize } from "../constants.js";

/**
 * @public
 */
export class ImageUtils {
  static get DISCORD_CDN_URL(): string {
    return "https://cdn.discordapp.com";
  }

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
    const assetUrl = new URL(`${ImageUtils.DISCORD_CDN_URL}/${assetRoute}.${dynamicExtension}`);
    const { searchParams } = assetUrl;

    if (size) {
      searchParams.set("size", size.toString());
    }

    return assetUrl.toString();
  }

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
  extension?: ImageExtension;
  forceStatic?: boolean;
  size?: ImageSize;
}

/**
 * @public
 */
export interface GetDynamicExtensionOptions {
  extension?: ImageExtension;
  forceStatic?: boolean;
}
