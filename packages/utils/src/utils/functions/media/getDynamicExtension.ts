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
