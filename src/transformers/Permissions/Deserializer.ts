import type { RawRoleColors, RawRoleTags, RoleColors, RoleTags } from '#types/index.js';

/**
 * @see https://discord.com/developers/docs/topics/permissions#role-object-role-colors-object
 */
export function deserializeRoleColors(rawRoleColors: RawRoleColors): RoleColors {
	const { primary_color, secondary_color, tertiary_color } = rawRoleColors;
	const roleColors: RoleColors = {
		primaryColor: primary_color,
		secondaryColor: secondary_color,
		tertiaryColor: tertiary_color,
	};

	return roleColors;
}

/**
 * @see https://discord.com/developers/docs/topics/permissions#role-object-role-tags-structure
 */
export function deserializeRoleTags(rawRoleTags: RawRoleTags): RoleTags {
	const { available_for_purchase, bot_id, guild_connections, integration_id, premium_subscriber, subscription_listing_id } = rawRoleTags;
	const roleTags: RoleTags = {};

	if (available_for_purchase) {
		roleTags.availableForPurchase = true;
	}

	if (bot_id) {
		roleTags.botId = bot_id;
	}

	if (guild_connections) {
		roleTags.guildConnections = true;
	}

	if (integration_id) {
		roleTags.integrationId = integration_id;
	}

	if (premium_subscriber) {
		roleTags.premiumSubscriber = true;
	}

	if (subscription_listing_id) {
		roleTags.subscriptionListingId = subscription_listing_id;
	}

	return roleTags;
}
