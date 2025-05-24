/**
 * @public
 */
export class BitFieldResolver {
  bitField: number;

  constructor(bitField: number) {
    this.bitField = bitField;
  }

  /**
   * Checks if the current instance is frozen.
   * @returns A boolean indicating if the current instance is frozen.
   */
  get frozen(): boolean {
    return Object.isFrozen(this);
  }

  /**
   * Adds a bit to the bitfield.
   * @param bit - The bit to add.
   * @returns The bitfield with the added bit.
   */
  add(bit: number): number {
    this.bitField |= bit;

    return this.bitField;
  }

  /**
   * Freezes the current instance.
   * @returns The current frozen instance.
   */
  freeze(): Readonly<this> {
    return Object.freeze(this);
  }

  /**
   * Checks if the bit is set in the bitfield.
   * @param bit - The bit to check.
   * @returns A boolean indicating if the bit is set.
   */
  has(bit: number): boolean {
    return (this.bitField & bit) === bit;
  }

  /**
   * Removes a bit from the bitfield.
   * @param bit - The bit to remove.
   * @returns The bitfield with the removed bit.
   */
  remove(bit: number): number {
    this.bitField &= ~bit;

    return this.bitField;
  }
}
