/**
 * Utility class for working with bitfields.
 * @group Utils/Resolvers
 */
export class BitFieldResolver {
	/** The bit field of the resolver. */
	bitField: number;

	/**
	 * Creates a new {@link BitFieldResolver | `BitFieldResolver`} instance.
	 * @param bitField - The bit field of the resolver, defaults to `0`.
	 */
	constructor(bitField: number = 0) {
		this.bitField = bitField;
	}

	/** Whether the current {@link BitFieldResolver | `BitFieldResolver`} instance is frozen. */
	get isFrozen(): boolean {
		return Object.isFrozen(this);
	}

	/**
	 * Adds bits to the bit field.
	 *
	 * @param bits - The bits to add to the bit field.
	 * @returns The updated bit field.
	 */
	add(...bits: number[]): number {
		for (const bit of bits) {
			this.bitField |= bit;
		}

		return this.bitField;
	}

	/**
	 * Freezes the current {@link BitFieldResolver | `BitFieldResolver`} instance.
	 * @returns The frozen current {@link BitFieldResolver | `BitFieldResolver`} instance.
	 */
	freeze(): Readonly<this> {
		return Object.freeze(this);
	}

	/**
	 * Checks whether a bit is set in the bit field.
	 * @param bit - The bit to check.
	 */
	has(bit: number): boolean {
		return (this.bitField & bit) === bit;
	}

	/**
	 * Removes bits from the bit field.
	 *
	 * @param bits - The bits to remove from the bit field.
	 * @returns The updated bit field.
	 */
	remove(...bits: number[]): number {
		for (const bit of bits) {
			this.bitField &= ~bit;
		}

		return this.bitField;
	}
}
