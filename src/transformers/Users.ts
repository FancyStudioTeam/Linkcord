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

export function parseAvatarDecoration(avatarDecoration: APIAvatarDecorationData | null): AvatarDecorationData | null {
	if (!avatarDecoration) return null;

	const { asset, sku_id: skuId } = avatarDecoration;
	const avatarDecorationData: AvatarDecorationData = {
		asset,
		skuId,
	};

	return avatarDecorationData;
}

export function parseCollectibles(collectibles: APICollectibles | null): Collectibles {
	if (!collectibles) return {};

	const { nameplate } = collectibles;
	const collectiblesData: Collectibles = {};

	if (nameplate) collectiblesData.nameplate = parseNameplate(nameplate);

	return collectiblesData;
}

export function parseDisplayNameStyles(displayNameStyles: APIDisplayNameStyles | null): DisplayNameStyles | null {
	if (!displayNameStyles) return null;

	const { colors, effect_id: effectId, font_id: fontId } = displayNameStyles;
	const displayNameStylesData: DisplayNameStyles = {
		colors,
		effectId,
		fontId,
	};

	return displayNameStylesData;
}

export function parseNameplate(nameplate: APINameplate): Nameplate {
	const { asset, label, palette, sku_id: skuId } = nameplate;
	const nameplateData: Nameplate = {
		asset,
		label,
		palette,
		skuId,
	};

	return nameplateData;
}

export function parsePrimaryGuild(primaryGuild: APIPrimaryGuild | null): PrimaryGuild | null {
	if (!primaryGuild) return null;

	const { badge, identity_enabled: identityEnabled, identity_guild_id: identityGuildId, tag } = primaryGuild;
	const primaryGuildData: PrimaryGuild = {
		badge,
		identityEnabled,
		identityGuildId,
		tag,
	};

	return primaryGuildData;
}
