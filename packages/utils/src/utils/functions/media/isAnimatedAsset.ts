/**
 * Checks whether the asset hash is animated.
 * @param assetHash - The asset hash to check.
 * @returns Whether the asset hash is animated.
 */
export const isAnimatedAsset = (assetHash: string): boolean => {
  if (typeof assetHash !== "string") {
    return false;
  }

  return assetHash.startsWith("a_");
};
