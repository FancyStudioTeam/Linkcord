export class BitField {
	bitField: number;

	constructor(bitField = 0) {
		this.bitField = bitField;
	}

	get isFrozen(): boolean {
		return Object.isFrozen(this);
	}

	add(...bits: number[]): number {
		for (const bit of bits) {
			this.bitField |= bit;
		}

		return this.bitField;
	}

	freeze(): Readonly<this> {
		return Object.freeze(this);
	}

	has(bit: number): boolean {
		return (this.bitField & bit) === bit;
	}

	remove(...bits: number[]): number {
		for (const bit of bits) {
			this.bitField &= ~bit;
		}

		return this.bitField;
	}
}
