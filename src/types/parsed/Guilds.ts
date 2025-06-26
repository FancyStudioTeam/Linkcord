import type { Snowflake } from "#types/raw/index.js";

/**
 * @public
 */
export interface IncidentsData {
  dmSpamDetectedAt: Date | null;
  dmsDisabledUntil: Date | null;
  invitesDisabledUntil: Date | null;
  raidDetectedAt: Date | null;
}

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

/**
 * @public
 */
export interface WelcomeScreen {
  description: string | null;
  welcomeChannels: WelcomeScreenChannel[];
}

/**
 * @public
 */
export interface WelcomeScreenChannel {
  channelId: Snowflake;
  description: string;
  emojiId: Snowflake | null;
  emojiName: string | null;
}
