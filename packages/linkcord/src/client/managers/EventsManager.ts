import type { BaseClient } from "../BaseClient.js";
import type { ClientEventsMap, ClientEventsString } from "../ClientEvents.js";

/**
 * @public
 */
export class EventsManager {
  readonly client: BaseClient;
  // biome-ignore lint/complexity/noBannedTypes: (x)
  readonly listeners = new Map<ClientEventsString, Function[]>();

  constructor(client: BaseClient) {
    this.client = client;
  }

  emit<ClientEvent extends ClientEventsString>(name: ClientEvent, ...data: ClientEventsMap[ClientEvent]): void {
    const { listeners } = this;
    const existing = listeners.get(name) ?? [];

    for (const listener of existing) {
      listener(...data);
    }
  }

  register<ClientEvent extends keyof ClientEventsMap>(
    name: ClientEvent,
    listener: (...data: ClientEventsMap[ClientEvent]) => unknown,
  ): void {
    const { listeners } = this;
    const existing = listeners.get(name);

    if (!existing || !Array.isArray(existing)) {
      listeners.set(name, [listener]);

      return;
    }

    existing.push(listener);
  }
}
