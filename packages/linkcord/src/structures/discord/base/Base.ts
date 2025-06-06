import type { Snowflake } from "@fancystudioteam/linkcord-types";
import { SnowflakeUtils } from "@fancystudioteam/linkcord-utils";

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
}
