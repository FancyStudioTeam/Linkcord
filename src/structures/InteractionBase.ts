import type { Client } from "#client/index.js";
import type { InteractionType, Snowflake } from "#types/index.js";
import type { APIInteraction } from "#types/resources/Interactions/structures/raw.js";
import { Base } from "./Base.js";

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure
 */
export abstract class InteractionBase<Type extends InteractionType> extends Base {
	/** The ID of the parent application. */
	readonly applicationId: Snowflake;
	/** The attachment size limit in bytes. */
	readonly attachmentSizeLimit: number;
	/** The ID of the interaction. */
	readonly id: Snowflake;
	/** The type of the interaction. */
	readonly type: Type;
	/** The version of the interaction. */
	readonly version: 1;

	constructor(client: Client, data: APIInteraction, type: Type) {
		super(client);

		const { application_id, attachment_size_limit, id, version } = data;

		this.applicationId = application_id;
		this.attachmentSizeLimit = attachment_size_limit;
		this.id = id;
		this.type = type;
		this.version = version;
	}
}
