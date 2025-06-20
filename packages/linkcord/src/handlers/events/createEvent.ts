import type { ClientEventsMap } from "../../client/events.js";

export const createEvent = <EventName extends ClientEventNames>(
  options: CreateEventOptions<EventName, CreateEventOptionsData<EventName>>,
) => options;

export interface CreateEventOptions<
  ClientEventName extends ClientEventNames,
  ClientEventData extends CreateEventOptionsData<ClientEventName>,
> {
  data: ClientEventData;
  run: (...data: ClientEventsMap[ClientEventName]) => void;
}

interface CreateEventOptionsData<EventName extends ClientEventNames> {
  name: EventName;
  once?: boolean;
}

export type ClientEventNames = keyof ClientEventsMap;

export type EventData = ReturnType<typeof createEvent>;
