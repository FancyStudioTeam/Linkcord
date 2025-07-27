import type { GatewayIntents } from "#types/index.js";

/**
 * Reduces the given intents to a number.
 *
 * @param intents - The intents to reduce.
 *
 * @returns The reduced intents as a number.
 *
 * @internal
 */
export function reduceGatewayIntents(intents: GatewayIntents[] | number): number {
	if (typeof intents === "number") {
		return intents;
	}

	const reducedIntentsCallback = (accumulator: number, intent: GatewayIntents): number => {
		accumulator |= intent;

		return accumulator;
	};
	const reducedIntents = intents.reduce(reducedIntentsCallback, 0);

	return reducedIntents;
}
