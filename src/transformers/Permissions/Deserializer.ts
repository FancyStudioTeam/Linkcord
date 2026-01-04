import type { RawRoleColors, RawRoleTags, RoleColors, RoleTags } from '#types/index.js';
import { isUndefined } from '#utils/helpers/AssertionUtils.js';

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

	if (!isUndefined(available_for_purchase)) {
		roleTags.availableForPurchase = true;
	}

	if (!isUndefined(bot_id)) {
		roleTags.botId = bot_id;
	}

	if (!isUndefined(guild_connections)) {
		roleTags.guildConnections = true;
	}

	if (!isUndefined(integration_id)) {
		roleTags.integrationId = integration_id;
	}

	if (!isUndefined(premium_subscriber)) {
		roleTags.premiumSubscriber = true;
	}

	if (!isUndefined(subscription_listing_id)) {
		roleTags.subscriptionListingId = subscription_listing_id;
	}

	return roleTags;
}
