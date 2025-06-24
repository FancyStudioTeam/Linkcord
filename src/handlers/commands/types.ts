import type { UserContextCommand } from "./structures/UserContextCommand.js";

type Instance<Class> = new (...args: unknown[]) => Class;

export type UserContextCommandInstance = Instance<UserContextCommand>;
