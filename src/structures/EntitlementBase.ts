import type { Client } from '#client/index.js';
import type { APIEntitlementBase, EntitlementType, Snowflake } from '#types/index.js';
import { isUndefined } from '#utils/helpers/AssertionUtils.js';
import { Base } from './Base.js';

/**
 * @see https://discord.com/developers/docs/resources/entitlement#entitlement-object-entitlement-structure
 */
export abstract class EntitlementBase extends Base {
	/** The ID of the parent application. */
	readonly applicationId: Snowflake;
	/** The ID of the entitlement. */
	readonly id: Snowflake;
	/** The type of the entitlement. */
	readonly type: EntitlementType;

	/** Whether the entitlement was consumed. */
	consumed: boolean;
	/** Whether the entitlement was deleted. */
	deleted: boolean;

	constructor(client: Client, rawEntitlement: APIEntitlementBase) {
		super(client);

		const { application_id, consumed, deleted, id, type } = rawEntitlement;

		this.applicationId = application_id;
		this.consumed = Boolean(consumed);
		this.deleted = Boolean(deleted);
		this.id = id;
		this.type = type;
	}

	protected patch(rawEntitlement: Partial<APIEntitlementBase>): void {
		const { consumed, deleted } = rawEntitlement;

		if (!isUndefined(consumed)) {
			this.consumed = Boolean(consumed);
		}

		if (!isUndefined(deleted)) {
			this.deleted = Boolean(deleted);
		}
	}
}
