import type { ImageExtension } from "../../constants.js";
import { isAnimatedAsset } from "./isAnimatedAsset.js";

/**
 * Gets the dynamic extension of an asset hash.
 *
 * @param assetHash - The asset hash from which to get its dynamic extension.
 * @param options - The options to use for getting the dynamic extension.
 * @returns The dynamic extension of the asset hash.
 */
export const getDynamicExtension = (
  assetHash: string,
  options: GetDynamicExtensionOptions = {
    forceStatic: false,
  },
): string => {
  const { extension, forceStatic } = options;
  const defaultExtension = "webp";

  return isAnimatedAsset(assetHash) && !forceStatic ? "gif" : (extension ?? defaultExtension);
};

/**
 * @public
 */
export interface GetDynamicExtensionOptions {
  /**
   * The extension to use for the asset.
   */
  extension?: ImageExtension;
  /**
   * Whether to force the use of the static version of the asset even if the
   * asset hash is animated.
   */
  forceStatic?: boolean;
}
