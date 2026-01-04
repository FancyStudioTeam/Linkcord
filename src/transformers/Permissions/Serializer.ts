import type { RawRoleColors, RawRoleTags, RoleColors, RoleTags } from '#types/index.js';
import { isUndefined } from '#utils/helpers/AssertionUtils.js';

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

	if (!isUndefined(availableForPurchase)) {
		rawRoleTags.available_for_purchase = null;
	}

	if (!isUndefined(botId)) {
		rawRoleTags.bot_id = botId;
	}

	if (!isUndefined(guildConnections)) {
		rawRoleTags.guild_connections = null;
	}

	if (!isUndefined(integrationId)) {
		rawRoleTags.integration_id = integrationId;
	}

	if (!isUndefined(premiumSubscriber)) {
		rawRoleTags.premium_subscriber = null;
	}

	if (!isUndefined(subscriptionListingId)) {
		rawRoleTags.subscription_listing_id = subscriptionListingId;
	}

	return rawRoleTags;
}
