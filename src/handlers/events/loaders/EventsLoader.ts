import { glob } from "glob";
import type { BaseClient } from "#client/BaseClient.js";
import { ImportUtils } from "#utils/ImportUtils.js";
import type { EventData } from "../createEvent.js";

export class EventsLoader {
  static get GLOB_PATTERN(): string {
    return "**/*.event.{js,cjs,mjs,ts,cts,mts,jsx,tsx}";
  }

  static async registerEventsToClient(eventsFolderPath: string, client: BaseClient): Promise<void> {
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
        throw new Error(`Event file '${fileName}' must include a default export.`);
      }

      const { data, run } = defaultExport;
      const { name: eventName } = data;

      client.events.register(eventName, run);
    }
  }
}

interface ImportEventData {
  default?: EventData;
}
