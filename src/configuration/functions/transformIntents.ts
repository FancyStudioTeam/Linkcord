import type { GatewayIntents } from '#types/index.js';

export function transformIntents(intents: GatewayIntents[]): number {
	const recudedIntentsCallback = (accumulator: number, intent: GatewayIntents) => accumulator | intent;

	const intentsSet = new Set(intents);
	const intentsArray = Array.from(intentsSet);

	const reducedIntents = intentsArray.reduce(recudedIntentsCallback, 0);

	return reducedIntents;
}
