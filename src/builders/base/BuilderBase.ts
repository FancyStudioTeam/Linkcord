export abstract class BuilderBase<Data> {
	/**
	 * The object where the data of the builder will be stored.
	 */
	protected readonly _data: Partial<Data>;

	constructor(data: Partial<Data> = {}) {
		this._data = data;
	}
}
