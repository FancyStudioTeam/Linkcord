import type { GatewayIntents } from "#types/index.js";

/**
 * Reduces the given list of {@link GatewayIntents | `GatewayIntents`} into a number.
 *
 * @param intents - The list of {@link GatewayIntents | `GatewayIntents`} to reduce.
 * @returns The reduced number of intents.
 *
 * @group Configuration/Functions
 */
export function transformIntents(intents: GatewayIntents[]): number {
	const intentsSet = new Set(intents);
	const intentsArray = Array.from(intentsSet);

	return intentsArray.reduce((accumulator, intent) => accumulator | intent, 0);
}
