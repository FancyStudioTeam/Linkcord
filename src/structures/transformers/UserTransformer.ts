import type {
	APIAvatarDecorationData,
	APIUserCollectibles,
	APIUserNameplate,
} from "#types/index.js";
import type { AvatarDecorationData, UserCollectibles, UserNameplate } from "#types/parsed/Users.js";

/**
 * Transforms a raw Discord API user avatar decoration data into an
 * {@link AvatarDecorationData | `AvatarDecorationData`} object.
 *
 * @param avatarDecorationData - The raw Discord API user avatar decoration
 * data.
 *
 * @returns The transformed
 * {@link AvatarDecorationData | `AvatarDecorationData`} object.
 */
function transformAvatarDecorationData(
	avatarDecorationData: APIAvatarDecorationData,
): AvatarDecorationData {
	const { asset, sku_id } = avatarDecorationData;

	return {
		asset,
		skuId: sku_id,
	};
}

/**
 * Transforms a raw Discord API user collectibles into a
 * {@link UserCollectibles | `UserCollectibles`} object.
 *
 * @param collectiblesData - The raw Discord API user collectibles.
 *
 * @returns The transformed {@link UserCollectibles | `UserCollectibles`}
 * object.
 */
function transformCollectibles(collectiblesData: APIUserCollectibles): UserCollectibles {
	const { nameplate } = collectiblesData ?? {};
	const collectibles: UserCollectibles = {};

	if (nameplate) {
		collectibles.nameplate = transformNameplate(nameplate);
	}

	return collectibles;
}

/**
 * Transforms a raw Discord API user nameplate into a
 * {@link UserNameplate | `UserNameplate`} object.
 *
 * @param nameplateData - The raw Discord API user nameplate.
 *
 * @returns The transformed {@link UserNameplate | `UserNameplate`} object.
 */
function transformNameplate(nameplateData: APIUserNameplate): UserNameplate {
	const { asset, label, palette, sku_id } = nameplateData;

	return {
		asset,
		label,
		palette,
		skuId: sku_id,
	};
}

/**
 * Transformers for user-related data.
 *
 * @internal
 */
export const UserTransformer = Object.freeze({
	transformAvatarDecorationData,
	transformCollectibles,
	transformNameplate,
});
