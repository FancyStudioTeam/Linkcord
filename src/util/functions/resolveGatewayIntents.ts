import type { GatewayIntents } from "../../types/gateway.js";

/**
 * Resolves the gateway intents into a number.
 *
 * @param gatewayIntents - The gateway intents to resolve.
 *
 * @returns The resolved gateway intents as a number.
 */
export const resolveGatewayIntents = (gatewayIntents: GatewayIntents[] | number): number => {
  const resolvedIntents = Array.isArray(gatewayIntents)
    ? gatewayIntents.reduce((previous, current) => previous | current, 0)
    : gatewayIntents;

  return resolvedIntents;
};
