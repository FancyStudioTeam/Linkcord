/*
 * biome-ignore-all lint/correctness/noUnusedPrivateClassMembers: Biome uses
 * "this" to check if these private members are being used, but we are
 * destructuring them from "this".
 */

import { join } from "node:path";
import { ConfigurationUtils } from "#configuration/helpers/ConfigurationUtils.js";
import { EventsLoader } from "#handlers/events/loaders/EventsLoader.js";
import type { Client } from "./Client.js";

/**
 * Creates a path to a folder.
 * @param root - The directory root where the folder should be located.
 * @param folderName - The name of the folder.
 * @returns The created path of the folder.
 */
function createFolderPath(root: string, folderName: string): string {
	return join(process.cwd(), root, folderName);
}

/**
 * The base client for the main client.
 * @group Client/Structures
 * @public
 */
export class BaseClient {
	/** The intents of the client. */
	get intents(): Readonly<number> {
		return ConfigurationUtils.getIntents();
	}

	/** The token of the client. */
	get token(): Readonly<string> {
		return ConfigurationUtils.getToken();
	}

	/**
	 * Registers the modules of the client.
	 * @param client - The client used to register its modules.
	 */
	private async __register__(client: Client): Promise<void> {
		const locations = ConfigurationUtils.getLocations();
		const { events, root } = locations;

		const eventsFolderPath = createFolderPath(root, events);

		await Promise.all([EventsLoader.registerEvents(eventsFolderPath, client)]);
	}

	/**
	 * Initializes the base client.
	 * @param client - The client used to register its modules.
	 */
	protected async __init__(client: Client): Promise<void> {
		const register = this.__register__;

		await Promise.all([register(client)]);
	}
}
