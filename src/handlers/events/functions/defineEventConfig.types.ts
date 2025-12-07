import type { ClientEvents } from "#client/index.js";

/**
 * Represents the configuration options for an event handled by the event handler.
 */
export interface DefineEventConfigOptions {
	/** Whether the event should be ignored from the event handler. */
	disabled?: boolean;
	/** The name of the event. */
	name: ClientEvents;
	/** Whether the event should be emitted once. */
	once?: boolean;
}
