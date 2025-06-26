import { join } from "node:path";
import { LinkcordConfiguration } from "../configuration/structures/LinkcordConfiguration.js";
import { CommandsLoader } from "../handlers/commands/loaders/CommandsLoader.js";
import { EventsLoader } from "../handlers/events/loaders/EventsLoader.js";
import { EventsManager } from "./managers/EventsManager.js";

/**
 * @public
 */
export class BaseClient {
  events = new EventsManager();

  async init(): Promise<void> {
    const { intents, locations, token } = LinkcordConfiguration.getOptions();

    if (!(token && intents)) {
      throw new TypeError("Token or intents are missing from the configuration file.");
    }

    if (locations) {
      const { base, commands, events } = locations;
      const createPath = (folder: string) => join(process.cwd(), base, folder);
      const locationPromises: Promise<unknown>[] = [
        commands
          ? CommandsLoader.registerCommandsToClient(createPath(commands), this)
          : Promise.resolve(false),
        events
          ? EventsLoader.registerEventsToClient(createPath(events), this)
          : Promise.resolve(false),
      ];

      await Promise.all(locationPromises);
    }
  }
}
