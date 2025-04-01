import type { Nullable, PremiumTypes, Services, Snowflake, VisibilityTypes } from "#types";

/**
 * ====================================================================
 * = Raw Payloads - Represent the received data from the Discord API. =
 * ====================================================================
 */

/**
 * https://discord.com/developers/docs/resources/user#application-role-connection-object-application-role-connection-structure
 */
export interface APIApplicationRoleConnection {
  metadata: object;
  platform_name: Nullable<string>;
  platform_username: Nullable<string>;
}

/**
 * https://discord.com/developers/docs/resources/user#avatar-decoration-data-object-avatar-decoration-data-structure
 */
export interface APIAvatarDecorationData {
  asset: string;
  sku_id: Snowflake;
}

/**
 * https://discord.com/developers/docs/resources/user#connection-object-connection-structure
 */
export interface APIConnection {
  id: Snowflake;
  name: string;
  type: Services;
  revoked?: boolean;
  // TODO: Add "APIIntegration" or "APIPartialIntegration" type.
  // @ts-expect-error
  integrations?: APIIntegration[];
  verified: boolean;
  friend_sync: boolean;
  show_activity: boolean;
  two_way_link: boolean;
  visibility: VisibilityTypes;
}

/**
 * https://discord.com/developers/docs/resources/user#user-object-user-structure
 */
export interface APIUser {
  accent_color?: Nullable<number>;
  avatar: Nullable<string>;
  avatar_decoration_data: Nullable<APIAvatarDecorationData>;
  banner?: Nullable<string>;
  bot?: boolean;
  discriminator: string;
  email?: Nullable<string>;
  flags?: number;
  global_name: Nullable<string>;
  id: Snowflake;
  /**
   * ?: "locale" proerty receives the key from the "Locales" type.
   * ?: "string" can be replaced with a "LocalesString" type.
   */
  locale?: string;
  mfa_enabled?: boolean;
  premium_type?: PremiumTypes;
  public_flags?: number;
  system?: boolean;
  username: string;
  verified?: boolean;
}
