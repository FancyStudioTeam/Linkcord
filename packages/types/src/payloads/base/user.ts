import type { Snowflake } from "#shared";

/**
 * @public
 */
export interface APIUserCollectibleBase {
  asset: string;
  sku_id: Snowflake;
}
