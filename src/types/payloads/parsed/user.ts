import type { Nullable, PremiumTypes, Services, Snowflake, VisibilityTypes } from "#types";

/**
 * =============================================================================
 * = Parsed Payloads - Represent the transformed data from the "Raw Payloads". =
 * =============================================================================
 */

/**
 * https://discord.com/developers/docs/resources/user#application-role-connection-object-application-role-connection-structure
 */
export interface ApplicationRoleConnection {
  metadata: object;
  platformName: Nullable<string>;
  platformUsername: Nullable<string>;
}

/**
 * https://discord.com/developers/docs/resources/user#avatar-decoration-data-object-avatar-decoration-data-structure
 */
export interface AvatarDecorationData {
  asset: string;
  skuId: Snowflake;
}

/**
 * https://discord.com/developers/docs/resources/user#connection-object-connection-structure
 */
export interface Connection {
  friendSync: boolean;
  id: Snowflake;
  // TODO: Add "Integration" or "PartialIntegration" type.
  // integrations?: Integration[];
  name: string;
  revoked?: boolean;
  showActivity: boolean;
  twoWayLink: boolean;
  type: Services;
  verified: boolean;
  visibility: VisibilityTypes;
}

/**
 * https://discord.com/developers/docs/resources/user#user-object-user-structure
 */
export interface User {
  accentColor?: Nullable<number>;
  avatar: Nullable<string>;
  avatarDecorationData: Nullable<AvatarDecorationData>;
  banner?: Nullable<string>;
  bot: boolean;
  discriminator: string;
  email?: Nullable<string>;
  flags: number;
  globalName: Nullable<string>;
  id: Snowflake;
  /**
   * ?: "locale" proerty receives the key from the "Locales" type.
   * ?: "string" can be replaced with a "LocalesString" type.
   */
  locale?: string;
  mfaEnabled?: boolean;
  premiumType?: PremiumTypes;
  publicFlags: number;
  system: boolean;
  username: string;
  verified?: boolean;
}
