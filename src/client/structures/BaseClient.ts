// biome-ignore-all lint/correctness/noUnusedPrivateClassMembers: Biome uses "this" to check if these private members are being used, but we are destructuring them from "this".

import { join } from "node:path";
import { cwd } from "node:process";
import { ConfigurationUtils } from "#configuration/helpers/ConfigurationUtils.js";
import { EventsLoader } from "#handlers/events/loaders/EventsLoader.js";
import type { Client } from "./Client.js";

function createFolderPath(root: string, folderName: string): string {
	return join(cwd(), root, folderName);
}

export class BaseClient {
	get intents(): Readonly<number> {
		return ConfigurationUtils.getIntents();
	}

	get token(): Readonly<string> {
		return ConfigurationUtils.getToken();
	}

	async #register(client: Client): Promise<void> {
		const locations = ConfigurationUtils.getLocations();
		const { events, root } = locations;

		const eventsFolderPath = createFolderPath(root, events);

		await Promise.all([
			EventsLoader.registerEvents(eventsFolderPath, client),
		]);
	}

	async init(client: Client): Promise<void> {
		const register = this.#register;

		await Promise.all([
			register(client),
		]);
	}
}
