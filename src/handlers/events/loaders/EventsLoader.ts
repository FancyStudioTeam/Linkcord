import { glob, type Path } from "glob";
import type { BaseClient } from "#client/BaseClient.js";
import { DISABLED_EVENT } from "#errors/messages.js";
import { ImportUtils } from "#utils/structures/ImportUtils.js";
import type { EventData } from "../functions/createEvent.js";

const EVENTS_GLOB_PATTERN = "**/*.event.{js,mjs,cjs,jsx,ts,mts,cts,tsx}";

/**
 * Loads the event file paths from the working directory.
 * @param eventsFolderPath - The path of the events folder where the event
 * files are located.
 * @returns The loaded event file paths.
 */
async function loadEventFilePaths(eventsFolderPath: string): Promise<Path[]> {
	const eventFilePaths = await glob(EVENTS_GLOB_PATTERN, {
		cwd: eventsFolderPath,
		withFileTypes: true,
	});

	return eventFilePaths;
}

/**
 * TODO: Events should be executed once if desired.
 */
/**
 * Registers the events to the client.
 * @param eventsFolderPath - The path of the events folder where the event
 * files are located.
 * @param baseClient - The base of the client.
 */
async function registerEvents(eventsFolderPath: string, baseClient: BaseClient): Promise<void> {
	const eventFilePaths = await loadEventFilePaths(eventsFolderPath);

	for (const eventPath of eventFilePaths) {
		const { name: fileName, parentPath: fileParentPath } = eventPath;

		const importEventFilePath = ImportUtils.resolvePath(fileParentPath, fileName);
		const importEventFileData = await ImportUtils.import<EventFileData>(
			importEventFilePath,
			true,
		);

		const { default: defaultExport, disabled } = importEventFileData;

		/**
		 * If the event is disabled, emit a warning and continue to the next
		 * event file.
		 */
		if (disabled) {
			process.emitWarning(DISABLED_EVENT(importEventFilePath));
			continue;
		}

		const { name: eventName, run } = defaultExport;
		const { events } = baseClient;

		events.register(eventName, run);
	}
}

/**
 * Namespace for event loaders utilities.
 * @internal
 */
export const EventsLoader = {
	loadEventFilePaths,
	registerEvents,
};

/**
 * The expected structure of the imported event file data.
 * @internal
 */
interface EventFileData {
	/**
	 * The validated options of the event.
	 */
	default: EventData;
	/**
	 * Whether the event is disabled and should not be registered.
	 */
	disabled?: boolean;
	/**
	 * Whether the event should be executed only once.
	 */
	once?: boolean;
}
