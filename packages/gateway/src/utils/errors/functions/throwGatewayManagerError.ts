import { GatewayManagerError } from "../GatewayManagerError.js";
import { throwUnknown } from "./throwUnknown.js";

/**
 * Throws a `GatewayManagerError` instance.
 * @internal
 * @param error - The error to throw.
 */
export const throwGatewayManagerError = (error: string): never => throwUnknown(new GatewayManagerError(error));
