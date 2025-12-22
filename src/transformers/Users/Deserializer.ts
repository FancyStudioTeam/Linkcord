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

export function deserializeCollectibles(serializedCollectibles?: APICollectibles | null): Collectibles {
	if (!serializedCollectibles) return {};

	const { nameplate } = serializedCollectibles;
	const deserializedCollectibles: Collectibles = {};

	if (nameplate) deserializedCollectibles.nameplate = deserializeNameplate(nameplate);

	return deserializedCollectibles;
}

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
