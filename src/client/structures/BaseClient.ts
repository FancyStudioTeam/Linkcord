import { join } from "node:path";
import { ConfigurationUtils } from "#configuration/utils/ConfigurationUtils.js";
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
	/**
	 * The intents of the client.
	 */
	get intents(): Readonly<number> {
		return ConfigurationUtils.getIntents();
	}

	/**
	 * The token of the client.
	 */
	get token(): Readonly<string> {
		return ConfigurationUtils.getToken();
	}

	/**
	 * Registers the client commands and events.
	 * @param client - The main client to register its dependencies.
	 * @internal
	 */
	private async __register__(client: Client): Promise<void> {
		const locations = ConfigurationUtils.getLocations();
		const { events, root } = locations;

		const eventsFolderPath = createFolderPath(root, events);

		await Promise.all([EventsLoader.registerEvents(eventsFolderPath, client)]);
	}

	/**
	 * Initializes the base client.
	 * @param client - The main client to initialize the base client.
	 * @internal
	 */
	protected async __init__(client: Client): Promise<void> {
		await Promise.all([this.__register__(client)]);
	}
}
