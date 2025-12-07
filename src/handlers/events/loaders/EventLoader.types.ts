import type { ClientEvents, ClientEventsMap } from "#client/index.js";
import type { DefineEventConfigOptions } from "../functions/defineEventConfig.types.js";

/**
 * Represents the configuration options for an event handled by the event handler.
 */
export type EventConfig = DefineEventConfigOptions;

/**
 * Represents the handler function that will be executed when the event is emitted.
 */
export type EventHandler<Event extends ClientEvents> = (...data: ClientEventsMap[Event]) => unknown;
