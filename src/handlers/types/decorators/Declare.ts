import type { UserContextCommandInstance } from "../commands/index.js";

/**
 * Represents an instance that can be decorated.
 * @public
 */
export type DeclarableInstance = UserContextCommandInstance;

/**
 * The options to declare for a command or component.
 * @public
 */
export type DeclareOptions<Target extends DeclarableInstance> =
	Target extends UserContextCommandInstance ? UserContextCommandOptions : never;
