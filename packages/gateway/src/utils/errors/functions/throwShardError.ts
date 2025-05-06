import { ShardError } from "../ShardError.js";
import { throwUnknown } from "./throwUnknown.js";

/**
 * Throws a `ShardError` instance.
 * @internal
 * @param error - The error to throw.
 */
export const throwShardError = (error: string, shardId: number): never => throwUnknown(new ShardError(error, shardId));
