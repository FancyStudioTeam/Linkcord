import type { Snowflake } from "#types/raw/index.js";

/**
 * @public
 */
export interface RoleColors {
  primaryColor: number;
  secondaryColor: number | null;
  tertiaryColor: number | null;
}

/**
 * @public
 */
export interface RoleTags {
  availableForPurchase?: true;
  botId?: Snowflake;
  guildConnections?: true;
  integrationId?: Snowflake;
  premiumSubscriber?: true;
  subscriptionListingId?: Snowflake;
}
