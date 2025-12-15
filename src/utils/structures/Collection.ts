export class Collection<Key, Value> {
	readonly #entries = new Map<Key, Value>();
	readonly #limit: number;

	constructor(limit = Infinity) {
		this.#limit = limit;
	}

	get #isLimitExceeded(): boolean {
		const entries = this.#entries;
		const limit = this.#limit;

		const { size: entriesSize } = entries;
		const isLimitExceeded = entriesSize >= limit;

		return isLimitExceeded;
	}

	get size(): number {
		const entries = this.#entries;
		const { size } = entries;

		return size;
	}

	#deleteOldestEntry(): void {
		const entries = this.#entries;
		const keys = entries.keys();

		const keyResult = keys.next();
		const { done, value: firstKeyValue } = keyResult;

		if (!done) {
			this.delete(firstKeyValue);
		}
	}

	delete(key: Key): boolean {
		const entries = this.#entries;
		const isDeleted = entries.delete(key);

		return isDeleted;
	}

	get(key: Key): Value | undefined {
		const entries = this.#entries;
		const entry = entries.get(key);

		return entry;
	}

	has(key: Key): boolean {
		const entries = this.#entries;
		const existsEntry = entries.has(key);

		return existsEntry;
	}

	/**
	 * @remarks
	 * - If the collection exceeds its limit, the oldest entry will be removed
	 * before setting the new entry.
	 */
	set(key: Key, value: Value): void {
		const isLimitExceeded = this.#isLimitExceeded;

		if (isLimitExceeded) {
			this.#deleteOldestEntry();
		}

		const entries = this.#entries;

		entries.set(key, value);
	}

	toArray(): Value[] {
		const entries = this.#entries;

		const valuesIterator = entries.values();
		const valuesArray = valuesIterator.toArray();

		return valuesArray;
	}
}
