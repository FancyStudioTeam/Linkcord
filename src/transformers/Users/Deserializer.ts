import type {
	AvatarDecorationData,
	NameplateCollectible,
	RawAvatarDecorationData,
	RawNameplateCollectible,
	RawUserCollectibles,
	RawUserDisplayNameStyles,
	RawUserPrimaryGuild,
	UserCollectibles,
	UserDisplayNameStyles,
	UserPrimaryGuild,
} from '#types/index.js';

/**
 * @see https://discord.com/developers/docs/resources/user#avatar-decoration-data-object-avatar-decoration-data-structure
 */
export function deserializeAvatarDecorationData(rawAvatarDecorationData?: RawAvatarDecorationData | null): AvatarDecorationData | null {
	if (!rawAvatarDecorationData) {
		return null;
	}

	const { asset, sku_id } = rawAvatarDecorationData;
	const avatarDecorationData: AvatarDecorationData = {
		asset,
		skuId: sku_id,
	};

	return avatarDecorationData;
}

/**
 * @see https://discord.com/developers/docs/resources/user#nameplate-nameplate-structure
 */
export function deserializeNameplateCollectible(rawNameplateCollectible?: RawNameplateCollectible): NameplateCollectible | null {
	if (!rawNameplateCollectible) {
		return null;
	}

	const { asset, label, palette, sku_id } = rawNameplateCollectible;
	const nameplateCollectible: NameplateCollectible = {
		asset,
		label,
		palette,
		skuId: sku_id,
	};

	return nameplateCollectible;
}

/**
 * @see https://discord.com/developers/docs/resources/user#collectibles-collectible-structure
 */
export function deserializeUserCollectibles(rawUserCollectibles?: RawUserCollectibles | null): UserCollectibles | null {
	if (!rawUserCollectibles) {
		return null;
	}

	const { nameplate } = rawUserCollectibles;
	const userCollectibles: UserCollectibles = {
		nameplate: deserializeNameplateCollectible(nameplate),
	};

	return userCollectibles;
}

/**
 * @undocumented
 */
export function deserializeUserDisplayNameStyles(rawUserDisplayNameStyles?: RawUserDisplayNameStyles | null): UserDisplayNameStyles | null {
	if (!rawUserDisplayNameStyles) {
		return null;
	}

	const { colors, effect_id, font_id } = rawUserDisplayNameStyles;
	const userDisplayNameStyles: UserDisplayNameStyles = {
		colors,
		effectId: effect_id,
		fontId: font_id,
	};

	return userDisplayNameStyles;
}

/**
 * @see https://discord.com/developers/docs/resources/user#user-object-user-primary-guild
 */
export function deserializeUserPrimaryGuild(rawUserPrimaryGuild?: RawUserPrimaryGuild | null): UserPrimaryGuild | null {
	if (!rawUserPrimaryGuild) {
		return null;
	}

	const { badge, identity_enabled, identity_guild_id, tag } = rawUserPrimaryGuild;
	const userPrimaryGuild: UserPrimaryGuild = {
		badge,
		identityEnabled: identity_enabled,
		identityGuildId: identity_guild_id,
		tag,
	};

	return userPrimaryGuild;
}
