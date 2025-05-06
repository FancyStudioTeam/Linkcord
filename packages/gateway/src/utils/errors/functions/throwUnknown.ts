/**
 * Throws an unknown error
 * @internal
 * @param error - The error to throw.
 */
export const throwUnknown = (error: unknown): never => {
  throw error;
};
