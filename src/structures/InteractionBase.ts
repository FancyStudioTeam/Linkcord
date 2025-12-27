import type { Client } from '#client/index.js';
import type { InteractionType, Snowflake } from '#types/index.js';
import type { APIInteraction } from '#types/resources/Interactions/structures/raw.js';
import { Base } from './Base.js';

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure
 */
export abstract class InteractionBase extends Base {
	/** The ID of the parent application. */
	readonly applicationId: Snowflake;
	/** The permissions of the application. */
	readonly applicationPermissions: string;
	/** The attachment size limit in bytes. */
	readonly attachmentSizeLimit: number;
	/** The ID of the interaction. */
	readonly id: Snowflake;
	/** The type of the interaction. */
	readonly type: InteractionType;
	/** The version of the interaction. */
	readonly version: 1;

	constructor(client: Client, data: APIInteraction) {
		super(client);

		const { app_permissions, application_id, attachment_size_limit, id, type, version } = data;

		this.applicationId = application_id;
		this.applicationPermissions = app_permissions;
		this.attachmentSizeLimit = attachment_size_limit;
		this.id = id;
		this.type = type;
		this.version = version;
	}
}
