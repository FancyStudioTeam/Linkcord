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
 * Transforms an {@link APIAvatarDecorationData | `APIAvatarDecorationData`} object into an {@link AvatarDecorationData | `AvatarDecorationData`} object.
 * @param avatarDecoration - The {@link APIAvatarDecorationData | `APIAvatarDecorationData`} object to transform.
 * @returns The transformed {@link AvatarDecorationData | `AvatarDecorationData`} object.
 */
function transformAvatarDecorationToParsed(
	avatarDecoration: APIAvatarDecorationData | null,
): AvatarDecorationData | null {
	if (!avatarDecoration) return null;

	const { asset, sku_id } = avatarDecoration;
	const avatarDecorationData: AvatarDecorationData = {
		asset,
		skuId: sku_id,
	};

	return avatarDecorationData;
}

/**
 * Transforms an {@link APICollectibles | `APICollectibles`} object into an {@link Collectibles | `Collectibles`} object.
 * @param collectibles - The {@link APICollectibles | `APICollectibles`} object to transform.
 * @returns The transformed {@link Collectibles | `Collectibles`} object.
 */
function transformCollectiblesToParsed(collectibles: APICollectibles | null): Collectibles {
	if (!collectibles) return {};

	const collectiblesData: Collectibles = {};
	const { nameplate } = collectibles;

	if (nameplate) {
		collectiblesData.nameplate = transformNameplateToParsed(nameplate);
	}

	return collectiblesData;
}

/**
 * Transforms an {@link APINameplate | `APINameplate`} object into an {@link Nameplate | `Nameplate`} object.
 * @param nameplate - The {@link APINameplate | `APINameplate`} object to transform.
 * @returns The transformed {@link Nameplate | `Nameplate`} object.
 */
function transformNameplateToParsed(nameplate: APINameplate): Nameplate {
	const { asset, label, palette, sku_id } = nameplate;
	const nameplateData: Nameplate = {
		asset,
		label,
		palette,
		skuId: sku_id,
	};

	return nameplateData;
}

/**
 * Transforms an {@link APIPrimaryGuild | `APIPrimaryGuild`} object into an {@link PrimaryGuild | `PrimaryGuild`} object.
 * @param primaryGuild - The {@link APIPrimaryGuild | `APIPrimaryGuild`} object to transform.
 * @returns The transformed {@link PrimaryGuild | `PrimaryGuild`} object.
 */
function transformPrimaryGuildToParsed(primaryGuild: APIPrimaryGuild | null): PrimaryGuild | null {
	if (!primaryGuild) return null;

	const { badge, identity_enabled, identity_guild_id, tag } = primaryGuild;
	const primaryGuildData: PrimaryGuild = {
		badge,
		identityEnabled: identity_enabled,
		identityGuildId: identity_guild_id,
		tag,
	};

	return primaryGuildData;
}

/** Transformers for user objects. */
export const UsersTransformer = Object.freeze({
	transformAvatarDecorationToParsed,
	transformCollectiblesToParsed,
	transformNameplateToParsed,
	transformPrimaryGuildToParsed,
});
