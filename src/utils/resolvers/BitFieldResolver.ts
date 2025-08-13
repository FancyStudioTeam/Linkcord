/**
 * Utiliy class to manage bit fields.
 * @public
 */
export class BitFieldResolver {
	/** The bitfield of the resolver. */
	bitField: number;

	/**
	 * Creates a new {@link BitFieldResolver | `BitFieldResolver`} instance.
	 * @param bitField - The bitfield of the resolver.
	 */
	constructor(bitField?: number) {
		this.bitField = bitField ?? 0;
	}

	/**
	 * Whether the current {@link BitFieldResolver | `BitFieldResolver`} is
	 * frozen.
	 */
	get isFrozen(): boolean {
		return Object.isFrozen(this);
	}

	/**
	 * Adds a bit to the bitfield.
	 * @param bit - The bit to add.
	 * @returns The bitfield with the bit added.
	 */
	add(bit: number): number {
		this.bitField |= bit;

		return this.bitField;
	}

	/**
	 * Freezes the current {@link BitFieldResolver | `BitFieldResolver`}
	 * instance.
	 * @returns The frozen {@link BitFieldResolver | `BitFieldResolver`}
	 * instance.
	 */
	freeze(): Readonly<this> {
		return Object.freeze(this);
	}

	/**
	 * Checks whether a bit is present in the bitfield.
	 * @param bit - The bit to check.
	 * @returns Whether the bit is present in the bitfield.
	 */
	has(bit: number): boolean {
		return (this.bitField & bit) === bit;
	}

	/**
	 * Removes a bit from the bitfield.
	 * @param bit - The bit to remove.
	 * @returns The bitfield with the bit removed.
	 */
	remove(bit: number): number {
		this.bitField &= ~bit;

		return this.bitField;
	}
}
