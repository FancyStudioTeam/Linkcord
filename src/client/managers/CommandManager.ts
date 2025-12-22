import type { ChatInputCommandHandler } from "#handlers/index.js";
import { defineReadonlyProperty } from "#utils/functions/defineReadonlyProperty.js";
import { Collection } from "#utils/index.js";

export class CommandManager {
	declare readonly chatInput: Collection<string, ChatInputCommandHandler>;

	constructor() {
		defineReadonlyProperty(this, "chatInput", new Collection());
	}
}
