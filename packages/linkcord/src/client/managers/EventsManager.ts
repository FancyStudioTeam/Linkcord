import type { ClientEventsMap, ClientEventsString } from "../ClientEvents.js";

/**
 * @public
 */
export class EventsManager {
  // biome-ignore lint/complexity/noBannedTypes: (x)
  readonly listeners = new Map<ClientEventsString, Function[]>();

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
