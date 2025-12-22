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

export function parseAvatarDecorationData(
	avatarDecorationData?: APIAvatarDecorationData | null,
): AvatarDecorationData | null {
	if (!avatarDecorationData) return null;

	const { asset, sku_id: skuId } = avatarDecorationData;
	const parsedAvatarDecorationData: AvatarDecorationData = {
		asset,
		skuId,
	};

	return parsedAvatarDecorationData;
}

export function parseCollectibles(collectibles?: APICollectibles | null): Collectibles {
	if (!collectibles) return {};

	const { nameplate } = collectibles;
	const parsedCollectibles: Collectibles = {};

	if (nameplate) parsedCollectibles.nameplate = parseNameplate(nameplate);

	return parsedCollectibles;
}

export function parseDisplayNameStyles(displayNameStyles?: APIDisplayNameStyles | null): DisplayNameStyles | null {
	if (!displayNameStyles) return null;

	const { colors, effect_id: effectId, font_id: fontId } = displayNameStyles;
	const parsedDisplayNameStyles: DisplayNameStyles = {
		colors,
		effectId,
		fontId,
	};

	return parsedDisplayNameStyles;
}

export function parseNameplate(nameplate: APINameplate): Nameplate {
	const { asset, label, palette, sku_id: skuId } = nameplate;
	const parsedNameplate: Nameplate = {
		asset,
		label,
		palette,
		skuId,
	};

	return parsedNameplate;
}

export function parsePrimaryGuild(primaryGuild?: APIPrimaryGuild | null): PrimaryGuild | null {
	if (!primaryGuild) return null;

	const { badge, identity_enabled: identityEnabled, identity_guild_id: identityGuildId, tag } = primaryGuild;
	const parsedPrimaryGuild: PrimaryGuild = {
		badge,
		identityEnabled,
		identityGuildId,
		tag,
	};

	return parsedPrimaryGuild;
}
