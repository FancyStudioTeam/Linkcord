import type { Snowflake } from "#types/index.js";
import { SnowflakeUtils } from "#utils/index.js";

/**
 * @internal
 */
export abstract class Base {
    id: Snowflake;

    constructor(id: Snowflake) {
        this.id = id;
    }

    get createdAt(): Date {
        const { createdTimestamp } = this;

        return new Date(createdTimestamp);
    }

    get createdTimestamp(): number {
        const { id } = this;

        return SnowflakeUtils.timestampFrom(id);
    }
}
