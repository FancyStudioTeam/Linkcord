import type { CreateChatInputApplicationCommandOptions } from "#types/index.js";
import type { NonAbstractConstructor } from "#utils/index.js";
import type { ChatInputCommandHandler } from "./ChatInputCommandHandler.js";

export type ChatInputCommandHandlerConstructor = NonAbstractConstructor<ChatInputCommandHandler>;
export type ChatInputCommandHandlerDeclareOptions = Omit<CreateChatInputApplicationCommandOptions, "options" | "type">;
