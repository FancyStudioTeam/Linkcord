import type { CreateApplicationCommandOptions } from "#types/index.js";
import type { Constructor } from "#utils/index.js";
import type { ChatInputCommandHandler } from "./ChatInputCommandHandler.js";

export type ChatInputCommandHandlerConstructor = Constructor<ChatInputCommandHandler>;
export type ChatInputCommandHandlerDeclareOptions = Omit<CreateApplicationCommandOptions, "options" | "type">;
