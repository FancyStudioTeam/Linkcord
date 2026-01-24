export class BuilderBase<Data> {
	/**
	 * The object where the data of the builder will be stored.
	 */
	protected readonly _data: Partial<Data>;

	constructor(data?: Data) {
		this._data = data ?? {};
	}
}
