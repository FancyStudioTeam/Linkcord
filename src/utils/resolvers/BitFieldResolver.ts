/**
 * @public
 */
export class BitFieldResolver {
    bitField: number;

    constructor(bitField?: number) {
        this.bitField = bitField ?? 0;
    }

    add(bit: number): number {
        this.bitField |= bit;

        return this.bitField;
    }

    freeze(): Readonly<this> {
        return Object.freeze(this);
    }

    has(bit: number): boolean {
        return (this.bitField & bit) === bit;
    }

    remove(bit: number): number {
        this.bitField &= ~bit;

        return this.bitField;
    }
}
