import { join } from "node:path";
import { LinkcordConfiguration } from "../configuration/structures/LinkcordConfiguration.js";
import { CommandsLoader } from "../handlers/commands/loaders/CommandsLoader.js";
import { EventsLoader } from "../handlers/events/loaders/EventsLoader.js";
import type { ClientEventsMap, ClientEventsString } from "./ClientEvents.js";
import { EventsManager } from "./managers/EventsManager.js";

/**
 * @public
 */
export class BaseClient {
  events = new EventsManager(this);

  constructor() {
    (async () => await LinkcordConfiguration.loadConfigurationFile())();
  }

  emit<ClientEvent extends ClientEventsString>(name: ClientEvent, ...data: ClientEventsMap[ClientEvent]): void {
    const { events } = this;

    events.emit(name, ...data);
  }

  async init(): Promise<void> {
    const { locations } = LinkcordConfiguration.getOptions();
    const { base, commands, events } = locations ?? {};
    const promises: Promise<void>[] = [
      commands ? CommandsLoader.registerCommandsToClient(join(process.cwd(), base, commands), this) : Promise.resolve(),
      events ? EventsLoader.registerEventsToClient(join(process.cwd(), base, events), this) : Promise.resolve(),
    ];

    await Promise.all(promises);
  }
}
