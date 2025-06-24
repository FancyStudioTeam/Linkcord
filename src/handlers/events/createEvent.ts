import type { ClientEventsMap, ClientEventsString } from "#client/ClientEvents.js";

export const createEvent = <EventName extends ClientEventsString>(
  options: CreateEventOptions<EventName, CreateEventOptionsData<EventName>>,
) => options;

export interface CreateEventOptions<
  ClientEvent extends ClientEventsString,
  ClientEventData extends CreateEventOptionsData<ClientEvent>,
> {
  data: ClientEventData;
  run: (...data: ClientEventsMap[ClientEvent]) => void;
}

interface CreateEventOptionsData<ClientEvent extends ClientEventsString> {
  name: ClientEvent;
  once?: boolean;
}

export type EventData = ReturnType<typeof createEvent>;
