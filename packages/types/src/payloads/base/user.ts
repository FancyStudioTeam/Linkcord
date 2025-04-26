import type { Snowflake } from "#shared";

/**
 * @internal
 */
export interface APIUserCollectibleBase {
  asset: string;
  sku_id: Snowflake;
}
