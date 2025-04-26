import type { Snowflake } from "#types/shared";

/**
 * @internal
 */
export interface APIUserCollectibleBase {
  asset: string;
  sku_id: Snowflake;
}
