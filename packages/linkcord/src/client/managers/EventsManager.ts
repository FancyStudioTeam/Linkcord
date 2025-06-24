import type { EventData } from "../../handlers/index.js";
import type { BaseClient } from "../BaseClient.js";
import type { ClientEventsMap, ClientEventsString } from "../ClientEvents.js";

/**
 * @public
 */
export class EventsManager {
  readonly client: BaseClient;
  readonly handlers: Map<ClientEventsString, EventData[]> = new Map();

  listeners: Partial<EventListeners> = {};

  constructor(client: BaseClient) {
    this.client = client;
  }

  emit<ClientEvent extends ClientEventsString>(name: ClientEvent, ...data: ClientEventsMap[ClientEvent]): void {
    const { handlers, listeners } = this;
    const handlersArray = handlers.get(name) ?? [];

    for (const handler of handlersArray) {
      handler.run(...data);
    }

    listeners[name]?.(...data);
  }
}

type EventListeners = {
  [Key in keyof ClientEventsMap]: (...data: ClientEventsMap[Key]) => unknown;
};
