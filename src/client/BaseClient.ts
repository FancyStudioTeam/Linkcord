import { join } from "node:path";
import { ConfigurationUtils } from "#configuration/utils/ConfigurationUtils.js";
import { EventsLoader } from "../handlers/events/loaders/EventsLoader.js";
import { EventsManager } from "./managers/EventsManager.js";

/**
 * Creates a path to a folder.
 * @param root - The directory root where the folder should be located.
 * @param folderName - The name of the folder.
 * @returns The path to the folder.
 * @internal
 */
function createFolderPath(root: string, folderName: string): string {
	return join(process.cwd(), root, folderName);
}

/**
 * Represents a base client.
 * @public
 */
export class BaseClient {
	/**
	 * The events manager of the client.
	 */
	readonly events = new EventsManager();

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
	 * Initializes the base client.
	 */
	async init(): Promise<void> {
		await Promise.all([this.register()]);
	}

	/**
	 * Registers the client commands and events.
	 */
	async register(): Promise<void> {
		const locations = ConfigurationUtils.getLocations();
		const { events, root } = locations;

		const eventsFolderPath = createFolderPath(root, events);

		const locationPromises: Promise<unknown>[] = [
			EventsLoader.registerEvents(eventsFolderPath, this),
		];

		await Promise.all(locationPromises);
	}
}
