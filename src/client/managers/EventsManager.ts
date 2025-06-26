import type { ClientEventsMap, ClientEventsString } from "../ClientEvents.js";

/**
 * @public
 */
export class EventsManager {
  /**
   * biome-ignore lint/complexity/noBannedTypes: (x)
   */
  readonly listeners = new Map<ClientEventsString, Function[]>();

  emit<Event extends ClientEventsString>(name: Event, ...data: ClientEventsMap[Event]): void {
    const { listeners } = this;
    const existing = listeners.get(name) ?? [];

    for (const listener of existing) {
      listener(...data);
    }
  }

  register<Event extends keyof ClientEventsMap>(
    name: Event,
    listener: (...data: ClientEventsMap[Event]) => unknown,
  ): void {
    const { listeners } = this;
    const existing = listeners.get(name);

    if (!(existing && Array.isArray(existing))) {
      listeners.set(name, [listener]);

      return;
    }

    existing.push(listener);
  }
}
