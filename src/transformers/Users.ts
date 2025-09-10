import type {
	APIAvatarDecorationData,
	APICollectibles,
	APINameplate,
	APIPrimaryGuild,
	AvatarDecorationData,
	Collectibles,
	Nameplate,
	PrimaryGuild,
} from "#types/index.js";

/**
 * Parses the given {@link APIAvatarDecorationData | `APIAvatarDecorationData`} object into a {@link AvatarDecorationData | `AvatarDecorationData`} object.
 *
 * @param avatarDecoration - The {@link APIAvatarDecorationData | `APIAvatarDecorationData`} object to parse.
 * @returns The parsed {@link AvatarDecorationData | `AvatarDecorationData`} object.
 */
export function parseAvatarDecoration(avatarDecoration: APIAvatarDecorationData | null): AvatarDecorationData | null {
	if (!avatarDecoration) return null;

	const { asset, sku_id: skuId } = avatarDecoration;
	const avatarDecorationData: AvatarDecorationData = {
		asset,
		skuId,
	};

	return avatarDecorationData;
}

/**
 * Parses the given {@link APICollectibles | `APICollectibles`} object into a {@link Collectibles | `Collectibles`} object.
 *
 * @param collectibles - The {@link APICollectibles | `APICollectibles`} object to parse.
 * @returns The parsed {@link Collectibles | `Collectibles`} object.
 */
export function parseCollectibles(collectibles: APICollectibles | null): Collectibles {
	if (!collectibles) return {};

	const { nameplate } = collectibles;
	const collectiblesData: Collectibles = {};

	if (nameplate) collectiblesData.nameplate = parseNameplate(nameplate);

	return collectiblesData;
}

/**
 * Parses the given {@link APINameplate | `APINameplate`} object into a {@link Nameplate | `Nameplate`} object.
 *
 * @param nameplate - The {@link APINameplate | `APINameplate`} object to parse.
 * @returns The parsed {@link Nameplate | `Nameplate`} object.
 */
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

/**
 * Parses the given {@link APIPrimaryGuild | `APIPrimaryGuild`} object into a {@link PrimaryGuild | `PrimaryGuild`} object.
 *
 * @param primaryGuild - The {@link APIPrimaryGuild | `APIPrimaryGuild`} object to parse.
 * @returns The parsed {@link PrimaryGuild | `PrimaryGuild`} object.
 */
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
