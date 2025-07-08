import type { UserContextCommand } from "./structures/UserContextCommand.js";

/**
 * @internal
 */
type Instance<Class> = new (...args: unknown[]) => Class;

/**
 * @internal
 */
export type UserContextCommandInstance = Instance<UserContextCommand>;
