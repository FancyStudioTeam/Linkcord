import type { Snowflake } from "#types/index.js";

/**
 * Represents an uncached entity.
 * @group Structures/Classes
 */
export class Uncached {
	/** The ID of the uncached entity. */
	readonly id: Snowflake;
	/** Whether the entity is uncached. */
	readonly uncached = true;

	/**
	 * Creates a new {@link Uncached | `Uncached`} instance.
	 * @param id - The ID of the uncached entity.
	 */
	constructor(id: Snowflake) {
		this.id = id;
	}
}
