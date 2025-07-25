import type { Snowflake } from "#types/index.js";

/**
 * Represents an uncached entity.
 *
 * @public
 */
export class Uncached {
	/**
	 * The ID of the entity.
	 */
	readonly id: Snowflake;
	/**
	 * Whether the entity is uncached.
	 */
	readonly uncached = true;

	/**
	 * Creates a new {@link Uncached | `Uncached`} instance.
	 *
	 * @param id - The ID of the entity.
	 */
	constructor(id: Snowflake) {
		this.id = id;
	}
}
