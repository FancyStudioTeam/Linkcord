import type { ImageExtension, ImageSize } from "../../constants.js";
import { getDynamicExtension } from "./getDynamicExtension.js";

/**
 * Creates an `URL` object for an asset.
 * @param assetStringUrl - The string url of the asset.
 * @param options - The options to use.
 * @returns The `URL` object to manipulate the asset.
 * @remarks
 * - The `assetStringUrl` should not include the extension in the url due we
 *   will get the dynamic extension from the asset and will append it.
 */
export const createImageUrl = (
  assetStringUrl: string,
  options: CreateImageUrlOptions = {
    forceStatic: false,
  },
): URL => {
  const { extension, forceStatic, size } = options;
  /**
   * Asset hashes are usually at the end of the url.
   * We can split the url by "/" and get the last element of the array.
   * This element will be considered the asset hash for us.
   */
  const assetHash = assetStringUrl.split("/").at(-1) ?? "";
  const dynamicExtension = getDynamicExtension(assetHash, {
    extension,
    forceStatic,
  });
  const assetUrl = new URL(`${assetStringUrl}.${dynamicExtension}`);
  const { searchParams } = assetUrl;

  if (size) {
    searchParams.set("size", size.toString());
  }

  return assetUrl;
};

/**
 * @public
 */
export interface CreateImageUrlOptions {
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
