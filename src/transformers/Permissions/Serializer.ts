import type { RawRoleColors, RawRoleTags, RoleColors, RoleTags } from '#types/index.js';

/**
 * @see https://discord.com/developers/docs/topics/permissions#role-object-role-colors-object
 */
export function serializeRoleColors(roleColors: RoleColors): RawRoleColors {
	const { primaryColor, secondaryColor, tertiaryColor } = roleColors;
	const rawRoleColors: RawRoleColors = {
		primary_color: primaryColor,
		secondary_color: secondaryColor,
		tertiary_color: tertiaryColor,
	};

	return rawRoleColors;
}

/**
 * @see https://discord.com/developers/docs/topics/permissions#role-object-role-tags-structure
 */
export function serializeRoleTags(roleTags: RoleTags): RawRoleTags {
	const { availableForPurchase, botId, guildConnections, integrationId, premiumSubscriber, subscriptionListingId } = roleTags;
	const rawRoleTags: RawRoleTags = {};

	if (availableForPurchase) {
		rawRoleTags.available_for_purchase = null;
	}

	if (botId) {
		rawRoleTags.bot_id = botId;
	}

	if (guildConnections) {
		rawRoleTags.guild_connections = null;
	}

	if (integrationId) {
		rawRoleTags.integration_id = integrationId;
	}

	if (premiumSubscriber) {
		rawRoleTags.premium_subscriber = null;
	}

	if (subscriptionListingId) {
		rawRoleTags.subscription_listing_id = subscriptionListingId;
	}

	return rawRoleTags;
}
