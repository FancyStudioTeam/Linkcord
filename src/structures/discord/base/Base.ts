import type { Snowflake } from "#types/index.js";
import { SnowflakeUtils } from "#utils/index.js";

/**
 * @public
 */
export abstract class Base {
    id: Snowflake;

    constructor(id: Snowflake) {
        this.id = id;
    }

    get createdAt(): Date {
        return new Date(this.createdTimestamp);
    }

    get createdTimestamp(): number {
        return SnowflakeUtils.timestampFrom(this.id);
    }

    /**
     * @internal
     */
    abstract patch(data: Record<number | string, unknown>): void;
}
