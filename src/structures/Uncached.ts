import type { Snowflake } from "#types/index.js";

/**
 * @public
 */
export class Uncached {
	id: Snowflake;
	uncached = true;

	constructor(id: Snowflake) {
		this.id = id;
	}
}
