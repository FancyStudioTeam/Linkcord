import type { Snowflake } from "#types/shared";

export interface APIUserCollectibleBase {
  asset: string;
  sku_id: Snowflake;
}
