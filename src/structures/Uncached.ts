import type { Snowflake } from "#types/index.js";

export class Uncached {
	readonly id: Snowflake;
	readonly uncached = true;

	constructor(id: Snowflake) {
		this.id = id;
	}
}
