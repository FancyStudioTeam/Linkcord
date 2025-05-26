/**
 * Checks whether the asset hash is animated.
 *
 * @param assetHash - The asset hash from which to check if it is animated.
 * @returns Whether the asset hash is animated.
 */
export const isAnimatedAsset = (assetHash: string): boolean => {
  if (typeof assetHash !== "string") {
    return false;
  }

  return assetHash.startsWith("a_");
};
