import type { GatewayIntents } from "#types/index.js";

export function transformIntents(intents: GatewayIntents[]): number {
	const intentsSet = new Set(intents);
	const intentsArray = Array.from(intentsSet);

	const reducedIntents = intentsArray.reduce((accumulator, intent) => accumulator | intent, 0);

	return reducedIntents;
}
