export class Collection<Key, Value> {
	readonly #entries = new Map<Key, Value>();
	readonly #limit: number;

	constructor(limit = Infinity) {
		this.#limit = limit;
	}

	/**
	 * Indicates whether the collection exceeds its limit.
	 */
	get #isLimitExceeded(): boolean {
		const entries = this.#entries;
		const limit = this.#limit;

		const { size: entriesSize } = entries;
		const isLimitExceeded = entriesSize >= limit;

		return isLimitExceeded;
	}

	/**
	 * Deletes the oldest value in the collection.
	 *
	 * @remarks
	 * - If the collection is empty, this method does nothing.
	 */
	#deleteOldestEntry(): void {
		const entries = this.#entries;
		const keys = entries.keys();

		const keyResult = keys.next();
		const { done, value: firstKeyValue } = keyResult;

		if (!done) {
			this.delete(firstKeyValue);
		}
	}

	/**
	 * Deletes an entry from the collection.
	 *
	 * @param key - The key associated with the entry to delete.
	 *
	 * @returns `true` if the entry was deleted, `false` otherwise.
	 */
	delete(key: Key): boolean {
		const entries = this.#entries;
		const isDeleted = entries.delete(key);

		return isDeleted;
	}

	/**
	 * Gets a value from the collection by its key.
	 *
	 * @param key - The key associated with the entry to get.
	 *
	 * @returns The value associated with the key if it exists, `undefined` otherwise.
	 */
	get(key: Key): Value | undefined {
		const entries = this.#entries;
		const entry = entries.get(key);

		return entry;
	}

	/**
	 * Checks whether the collection contains an entry with the specified key.
	 *
	 * @param key - The key associated with the entry to check.
	 *
	 * @returns `true` if the entry exists, `false` otherwise.
	 */
	has(key: Key): boolean {
		const entries = this.#entries;
		const existsEntry = entries.has(key);

		return existsEntry;
	}

	/**
	 * Sets a key-value entry to the collection.
	 *
	 * @param key - The key associated with the value.
	 * @param value - The value to store.
	 *
	 * @remarks
	 * - If the collection exceeds its limit, the oldest entry will be removed
	 * before setting the new entry.
	 *
	 * - If an entry with the same key exists, its value will be overwritten
	 * with the new value.
	 */
	set(key: Key, value: Value): void {
		const isLimitExceeded = this.#isLimitExceeded;

		if (isLimitExceeded) {
			this.#deleteOldestEntry();
		}

		const entries = this.#entries;

		entries.set(key, value);
	}

	/**
	 * Converts the collection into an array containing all stored values.
	 *
	 * @returns An array of the stored values.
	 */
	toArray(): Value[] {
		const entries = this.#entries;

		const valuesIterator = entries.values();
		const valuesArray = valuesIterator.toArray();

		return valuesArray;
	}
}
