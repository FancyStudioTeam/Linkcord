import type { Guild, Role, SoundboardSound } from "#structures/index.js";
import type { Snowflake } from "#types/discord/index.js";
import type { JSONProperties } from "#utils/types.js";

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

/**
 * @public
 */
export type JSONGuild = JSONProperties<typeof Guild>;

/**
 * @public
 */
export type JSONRole = JSONProperties<typeof Role>;

/**
 * @public
 */
export type JSONSoundboardSound = JSONProperties<typeof SoundboardSound>;
