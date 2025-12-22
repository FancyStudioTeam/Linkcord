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
 * Transforms an {@link APIAvatarDecorationData} object into a {@link AvatarDecorationData} object.
 */
export function deserializeAvatarDecorationData(
	serializedAvatarDecorationData?: APIAvatarDecorationData | null,
): AvatarDecorationData | null {
	if (!serializedAvatarDecorationData) return null;

	const { asset, sku_id: skuId } = serializedAvatarDecorationData;
	const deserializedAvatarDecorationData: AvatarDecorationData = {
		asset,
		skuId,
	};

	return deserializedAvatarDecorationData;
}

/**
 * Transforms an {@link APICollectibles} object into a {@link Collectibles} object.
 */
export function deserializeCollectibles(serializedCollectibles?: APICollectibles | null): Collectibles {
	if (!serializedCollectibles) return {};

	const { nameplate } = serializedCollectibles;
	const deserializedCollectibles: Collectibles = {};

	if (nameplate) deserializedCollectibles.nameplate = deserializeNameplate(nameplate);

	return deserializedCollectibles;
}

/**
 * Transforms an {@link APIDisplayNameStyles} object into a {@link DisplayNameStyles} object.
 */
export function deserializeDisplayNameStyles(
	serializedDisplayNameStyles?: APIDisplayNameStyles | null,
): DisplayNameStyles | null {
	if (!serializedDisplayNameStyles) return null;

	const { colors, effect_id: effectId, font_id: fontId } = serializedDisplayNameStyles;
	const deserializedDisplayNameStyles: DisplayNameStyles = {
		colors,
		effectId,
		fontId,
	};

	return deserializedDisplayNameStyles;
}

/**
 * Transforms an {@link APINameplate} object into a {@link Nameplate} object.
 */
export function deserializeNameplate(serializedNameplate: APINameplate): Nameplate {
	const { asset, label, palette, sku_id: skuId } = serializedNameplate;
	const deserializedNameplate: Nameplate = {
		asset,
		label,
		palette,
		skuId,
	};

	return deserializedNameplate;
}

/**
 * Transforms an {@link APIPrimaryGuild} object into a {@link PrimaryGuild} object.
 */
export function deserializePrimaryGuild(serializedPrimaryGuild?: APIPrimaryGuild | null): PrimaryGuild | null {
	if (!serializedPrimaryGuild) return null;

	const {
		badge,
		identity_enabled: identityEnabled,
		identity_guild_id: identityGuildId,
		tag,
	} = serializedPrimaryGuild;
	const deserializedPrimaryGuild: PrimaryGuild = {
		badge,
		identityEnabled,
		identityGuildId,
		tag,
	};

	return deserializedPrimaryGuild;
}
