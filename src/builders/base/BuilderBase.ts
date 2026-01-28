export class BuilderBase<Data> {
	protected readonly _data: Partial<Data>;

	constructor(data?: Data) {
		this._data = data ?? {};
	}
}
