import type { Snowflake } from '#types/index.js';

export class Uncached {
	/** The ID of the uncached entity. */
	readonly id: Snowflake;
	/** Whether the entity is uncached. Always `true`. */
	readonly uncached = true;

	constructor(id: Snowflake) {
		this.id = id;
	}
}
