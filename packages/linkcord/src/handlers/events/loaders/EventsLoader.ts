import { glob } from "glob";
import type { Client } from "../../../client/Client.js";
import { ImportUtils } from "../../../utils/structures/ImportUtils.js";
import type { EventData } from "../createEvent.js";

export class EventsLoader {
  static get GLOB_PATTERN(): string {
    return "**/*.event.{js,cjs,mjs,ts,cts,mts,jsx,tsx}";
  }

  static async registerEventsToClient(eventsFolderPath: string, client: Client): Promise<void> {
    const globPattern = EventsLoader.GLOB_PATTERN;
    const eventFilePaths = await glob(globPattern, {
      cwd: eventsFolderPath,
      withFileTypes: true,
    });

    for (const eventPath of eventFilePaths) {
      const { name: fileName, parentPath: fileParentPath } = eventPath;
      const importEventPath = ImportUtils.resolvePath(fileParentPath, fileName);
      const importEventData = (await import(importEventPath)) as ImportEventData;
      const { default: defaultExport } = importEventData;

      if (!defaultExport) {
        throw new Error(`Event file '${fileName}' must export a default export.`);
      }

      const { data } = defaultExport;
      const { name: eventName } = data;
      /**
       * biome-ignore lint/complexity/useLiteralKeys: Accessing private
       * properties.
       */
      const eventListenersArray = client["events"].get(eventName);

      if (!eventListenersArray || !Array.isArray(eventListenersArray)) {
        /**
         * biome-ignore lint/complexity/useLiteralKeys: Accessing private
         * properties.
         */
        client["events"].set(eventName, [defaultExport]);

        continue;
      }

      eventListenersArray.push(defaultExport);
    }
  }
}

interface ImportEventData {
  default?: EventData;
}
