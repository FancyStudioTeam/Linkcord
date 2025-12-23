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
	serializedAvatarDecorationData?: APIAvatarDecorationData | null,
): AvatarDecorationData | null {
	if (!serializedAvatarDecorationData) return null;

	const { asset, sku_id } = serializedAvatarDecorationData;
	const deserializedAvatarDecorationData: AvatarDecorationData = {
		asset,
		skuId: sku_id,
	};

	return deserializedAvatarDecorationData;
}

/**
 * @see https://discord.com/developers/docs/resources/user#collectibles-collectible-structure
 */
export function deserializeCollectibles(serializedCollectibles?: APICollectibles | null): Collectibles {
	if (!serializedCollectibles) return {};

	const { nameplate } = serializedCollectibles;
	const deserializedCollectibles: Collectibles = {};

	if (nameplate) deserializedCollectibles.nameplate = deserializeNameplate(nameplate);

	return deserializedCollectibles;
}

/**
 * @undocumented
 */
export function deserializeDisplayNameStyles(
	serializedDisplayNameStyles?: APIDisplayNameStyles | null,
): DisplayNameStyles | null {
	if (!serializedDisplayNameStyles) return null;

	const { colors, effect_id, font_id } = serializedDisplayNameStyles;
	const deserializedDisplayNameStyles: DisplayNameStyles = {
		colors,
		effectId: effect_id,
		fontId: font_id,
	};

	return deserializedDisplayNameStyles;
}

/**
 * @see https://discord.com/developers/docs/resources/user#nameplate-nameplate-structure
 */
export function deserializeNameplate(serializedNameplate: APINameplate): Nameplate {
	const { asset, label, palette, sku_id } = serializedNameplate;
	const deserializedNameplate: Nameplate = {
		asset,
		label,
		palette,
		skuId: sku_id,
	};

	return deserializedNameplate;
}

/**
 * @see https://discord.com/developers/docs/resources/user#user-object-user-primary-guild
 */
export function deserializePrimaryGuild(serializedPrimaryGuild?: APIPrimaryGuild | null): PrimaryGuild | null {
	if (!serializedPrimaryGuild) return null;

	const { badge, identity_enabled, identity_guild_id, tag } = serializedPrimaryGuild;
	const deserializedPrimaryGuild: PrimaryGuild = {
		badge,
		identityEnabled: identity_enabled,
		identityGuildId: identity_guild_id,
		tag,
	};

	return deserializedPrimaryGuild;
}
