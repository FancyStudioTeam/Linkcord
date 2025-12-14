export class Collection<Key, Value> extends Map<Key, Value> {
	readonly #limit: number;

	constructor(limit = Infinity) {
		super();

		this.#limit = limit;
	}
}
