import type {
	APIAvatarDecorationData,
	APICollectibles,
	APIDisplayNameStyles,
	APINameplate,
	APIPrimaryGuild,
	AvatarDecorationData,
	Collectibles,
	DisplayNameStyles,
	Nameplate,
	PrimaryGuild,
} from "#types/index.js";

/**
 * @see https://discord.com/developers/docs/resources/user#avatar-decoration-data-object-avatar-decoration-data-structure
 */
export function deserializeAvatarDecorationData(
	avatarDecorationData?: APIAvatarDecorationData | null,
): AvatarDecorationData | null {
	if (!avatarDecorationData) return null;

	return {
		asset: avatarDecorationData.asset,
		skuId: avatarDecorationData.sku_id,
	};
}

/**
 * @see https://discord.com/developers/docs/resources/user#collectibles-collectible-structure
 */
export function deserializeCollectibles(collectibles?: APICollectibles | null): Collectibles | null {
	if (!collectibles) return null;

	return {
		nameplate: deserializeNameplate(collectibles.nameplate),
	};
}

/**
 * @undocumented
 */
export function deserializeDisplayNameStyles(
	displayNameStyles?: APIDisplayNameStyles | null,
): DisplayNameStyles | null {
	if (!displayNameStyles) return null;

	return {
		colors: displayNameStyles.colors,
		effectId: displayNameStyles.effect_id,
		fontId: displayNameStyles.font_id,
	};
}

/**
 * @see https://discord.com/developers/docs/resources/user#nameplate-nameplate-structure
 */
export function deserializeNameplate(nameplate?: APINameplate): Nameplate | null {
	if (!nameplate) return null;

	return {
		asset: nameplate.asset,
		label: nameplate.label,
		palette: nameplate.palette,
		skuId: nameplate.sku_id,
	};
}

/**
 * @see https://discord.com/developers/docs/resources/user#user-object-user-primary-guild
 */
export function deserializePrimaryGuild(primaryGuild?: APIPrimaryGuild | null): PrimaryGuild | null {
	if (!primaryGuild) return null;

	return {
		badge: primaryGuild.badge,
		identityEnabled: primaryGuild.identity_enabled,
		identityGuildId: primaryGuild.identity_guild_id,
		tag: primaryGuild.tag,
	};
}
