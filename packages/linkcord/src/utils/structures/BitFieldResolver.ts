export class BitFieldResolver {
  /**
   * The bitfield of the current instance.
   */
  bitField: number;

  constructor(bitField: number) {
    this.bitField = bitField;
  }

  /**
   * Checks whether the current instance is frozen.
   *
   * @returns A boolean indicating whether the current instance is frozen.
   */
  get frozen(): boolean {
    return Object.isFrozen(this);
  }

  /**
   * Adds a bit to the bitfield.
   *
   * @param bit - The bit to add.
   *
   * @returns The updated bitfield.
   */
  add(bit: number): number {
    this.bitField |= bit;

    return this.bitField;
  }

  /**
   * Freezes the current instance.
   *
   * @returns The current frozen instance.
   */
  freeze(): Readonly<this> {
    return Object.freeze(this);
  }

  /**
   * Checks whether the bit is included in the bitfield.
   *
   * @param bit - The bit to check.
   *
   * @returns A boolean indicating whether the bit is included in the
   * bitfield.
   */
  has(bit: number): boolean {
    return (this.bitField & bit) === bit;
  }

  /**
   * Removes a bit from the bitfield.
   *
   * @param bit - The bit to remove.
   *
   * @returns The updated bitfield.
   */
  remove(bit: number): number {
    this.bitField &= ~bit;

    return this.bitField;
  }
}
