import type { ChatInputCommandHandler } from "#handlers/index.js";
import { defineImmutableProperty } from "#utils/functions/defineImmutableProperty.js";
import { Collection } from "#utils/index.js";

export class CommandManager {
	declare readonly chatInput: Collection<string, ChatInputCommandHandler>;

	constructor() {
		defineImmutableProperty(this, "chatInput", new Collection());
	}
}
