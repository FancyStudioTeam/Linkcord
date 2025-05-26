import type { ImageExtension } from "../../constants.js";
import { isAnimatedAsset } from "./isAnimatedAsset.js";

/**
 * Gets the dynamic extension of an asset hash.
 * @param assetHash - The asset hash to use.
 * @param options - The options to use.
 * @returns The dynamic extension for the asset.
 * @remarks
 * - If the `extension` option is provided, it will take more preference over
 *   the `useAnimated` option.
 */
export const getDynamicExtension = (
  assetHash: string,
  options: GetDynamicExtensionOptions = {
    useAnimated: true,
  },
): string => {
  const { extension, useAnimated } = options;
  const defaultExtension = "webp";

  if ((extension && useAnimated) || !useAnimated) {
    return extension ?? defaultExtension;
  }

  return isAnimatedAsset(assetHash) ? "gif" : (extension ?? defaultExtension);
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
   * Whether to use the animated version of the asset if it is available.
   */
  useAnimated?: boolean;
}
