import type { ISO8601Date, Snowflake } from "#types/miscellaneous/discord.js";
import type { EntitlementTypes } from "../enums.js";

/**
 * Represents a Discord entitlement object.
 * @see https://discord.com/developers/docs/resources/entitlement#entitlement-object-entitlement-structure
 *
 * @group API/Interfaces
 */
export interface APIEntitlement {
	/** The ID of the application where the entitlement was created. */
	application_id: Snowflake;
	/** Whether the entitlement was consumed. */
	consumed?: boolean;
	/** Whether the entitlement was deleted. */
	deleted: boolean;
	/** The timestamp at which the entitlement is no longer valid. */
	expires_at: ISO8601Date | null;
	/** The ID of the guild that the entitlement was granted. */
	guild_id: Snowflake;
	/** The ID of the entitlement. */
	id: Snowflake;
	/** The ID of the SKU of the entitlement. */
	sku_id: Snowflake;
	/** The timestamp at which the entitlement starts to be valid. */
	starts_at: ISO8601Date | null;
	/** The type of the entitlement. */
	type: EntitlementTypes;
	/** The ID of the user who was granted the entitlement. */
	user_id?: Snowflake;
}
