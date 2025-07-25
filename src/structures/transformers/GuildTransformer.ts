import type {
	APIIncidentsData,
	APIRoleColors,
	APIRoleTags,
	APIWelcomeScreen,
	APIWelcomeScreenChannel,
	IncidentsData,
	RoleColors,
	RoleTags,
	WelcomeScreen,
	WelcomeScreenChannel,
} from "#types/index.js";

/**
 * Transforms a raw Discord API incidents data into an
 * {@link IncidentsData | `IncidentsData`} object.
 *
 * @param incidentsData - The raw Discord API incidents data.
 *
 * @returns The transformed {@link IncidentsData | `IncidentsData`}
 * object.
 */
function transformIncidentsData(incidentsData: APIIncidentsData): Readonly<IncidentsData> {
	const { dm_spam_detected_at, dms_disabled_until, invites_disabled_until, raid_detected_at } =
		incidentsData;

	return Object.freeze({
		dmSpamDetectedAt: dm_spam_detected_at ? new Date(dm_spam_detected_at) : null,
		dmsDisabledUntil: dms_disabled_until ? new Date(dms_disabled_until) : null,
		invitesDisabledUntil: invites_disabled_until ? new Date(invites_disabled_until) : null,
		raidDetectedAt: raid_detected_at ? new Date(raid_detected_at) : null,
	});
}

/**
 * Transforms a raw Discord API role colors into a
 * {@link RoleColors | `RoleColors`} object.
 *
 * @param colorsData - The raw Discord API role colors.
 *
 * @returns The transformed {@link RoleColors | `RoleColors`} object.
 */
function transformRoleColors(colorsData: APIRoleColors): Readonly<RoleColors> {
	const { primary_color, secondary_color, tertiary_color } = colorsData;

	return {
		primaryColor: primary_color,
		secondaryColor: secondary_color ?? null,
		tertiaryColor: tertiary_color ?? null,
	};
}

/**
 * Transforms a raw Discord API role tags into a
 * {@link RoleTags | `RoleTags`} object.
 *
 * @param tagsData - The raw Discord API role tags.
 *
 * @returns The transformed {@link RoleTags | `RoleTags`} object.
 */
function transformRoleTags(tagsData: APIRoleTags): Readonly<RoleTags> {
	const tags: RoleTags = {};
	const {
		available_for_purchase,
		bot_id,
		guild_connections,
		integration_id,
		premium_subscriber,
		subscription_listing_id,
	} = tagsData;

	if (available_for_purchase === null) {
		tags.availableForPurchase = true;
	}

	if (bot_id) {
		tags.botId = bot_id;
	}

	if (guild_connections === null) {
		tags.guildConnections = true;
	}

	if (integration_id) {
		tags.integrationId = integration_id;
	}

	if (premium_subscriber === null) {
		tags.premiumSubscriber = true;
	}

	if (subscription_listing_id) {
		tags.subscriptionListingId = subscription_listing_id;
	}

	return Object.freeze(tags);
}

/**
 * Transforms a raw Discord API welcome screen into a
 * {@link WelcomeScreen | `WelcomeScreen`} object.
 *
 * @param welcomeScreen - The raw Discord API welcome screen.
 *
 * @returns The transformed {@link WelcomeScreen | `WelcomeScreen`}
 * object.
 */
function transformWelcomeScreen(welcomeScreen: APIWelcomeScreen): Readonly<WelcomeScreen> {
	const { description, welcome_channels } = welcomeScreen;
	const welcomeChannels = welcome_channels.map((welcomeChannel) =>
		GuildTransformer.transformWelcomeScreenChannel(welcomeChannel),
	);

	return Object.freeze({
		description,
		welcomeChannels,
	});
}

/**
 * Transforms a raw Discord API welcome screen channel into a
 * {@link WelcomeScreenChannel | `WelcomeScreenChannel`} object.
 *
 * @param welcomeScreenChannelData - The raw Discord API welcome screen
 * channel.
 *
 * @returns The transformed
 * {@link WelcomeScreenChannel | `WelcomeScreenChannel`} object.
 */
function transformWelcomeScreenChannel(
	welcomeScreenChannelData: APIWelcomeScreenChannel,
): Readonly<WelcomeScreenChannel> {
	const { channel_id, description, emoji_id, emoji_name } = welcomeScreenChannelData;

	return Object.freeze({
		channelId: channel_id,
		description,
		emojiId: emoji_id ?? null,
		emojiName: emoji_name ?? null,
	});
}

/**
 * Transformers for guild-related data.
 *
 * @internal
 */
export const GuildTransformer = Object.freeze({
	transformIncidentsData,
	transformRoleColors,
	transformRoleTags,
	transformWelcomeScreen,
	transformWelcomeScreenChannel,
});
