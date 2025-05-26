import type { ImageUrlOptions } from "../../constants.js";
import { getDynamicExtension } from "./getDynamicExtension.js";

/**
 * Creates an `URL` object instance for an asset.
 *
 * @param assetStringUrl - The string url of the asset from which to create
 *   the `URL` object instance.
 * @param options - The options to use when creating the `URL` object
 *   instance.
 * @returns The created url object instance.
 *
 * @remarks
 * - The `assetStringUrl` parameter should not include the extension in the
 *   url as we will get the dynamic extension from the asset hash and
 *   append it at the end of the url.
 */
export const createImageUrl = (
  assetStringUrl: string,
  options: ImageUrlOptions = {
    forceStatic: false,
  },
): URL => {
  const { extension, forceStatic, size } = options;
  /**
   * Asset hashes are usually at the end of the url.
   *
   * We can split the url using the "/" separator and get the last element of
   * the array.
   *
   * This element will be considered as the asset hash.
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
