import { MISSING_REQUIRED_FIELDS_FROM_DATA } from "#errors/messages.js";
import type {
	APIAvatarDecorationData,
	APIPrimaryGuild,
	APIUserCollectibles,
	APIUserNameplate,
} from "#types/index.js";
import type {
	AvatarDecorationData,
	PrimaryGuild,
	UserCollectibles,
	UserNameplate,
} from "#types/parsed/Users.js";

/**
 * Transformer class for user-related data.
 *
 * @internal
 */
export class UserTransformer {
	/**
	 * Transforms a raw Discord API user avatar decoration data into an
	 * {@link AvatarDecorationData | `AvatarDecorationData`} object.
	 *
	 * @param avatarDecorationData - The raw Discord API user avatar
	 * decoration data.
	 *
	 * @returns The transformed
	 * {@link AvatarDecorationData | `AvatarDecorationData`} object.
	 */
	static transformAvatarDecorationData(
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
	 * @returns The transformed
	 * {@link UserCollectibles | `UserCollectibles`} object.
	 */
	static transformCollectibles(collectiblesData: APIUserCollectibles): UserCollectibles {
		const { nameplate } = collectiblesData ?? {};
		const collectibles: UserCollectibles = {};

		if (nameplate) {
			collectibles.nameplate = UserTransformer.transformNameplate(nameplate);
		}

		return collectibles;
	}

	/**
	 * Transforms a raw Discord API user nameplate into a
	 * {@link UserNameplate | `UserNameplate`} object.
	 *
	 * @param nameplateData - The raw Discord API user nameplate.
	 *
	 * @returns The transformed
	 * {@link UserNameplate | `UserNameplate`} object.
	 */
	static transformNameplate(nameplateData: APIUserNameplate): UserNameplate {
		const { asset, label, palette, sku_id } = nameplateData;

		return {
			asset,
			label,
			palette,
			skuId: sku_id,
		};
	}

	/**
	 * Transforms a raw Discord API user primary guild into a
	 * {@link PrimaryGuild | `PrimaryGuild`} object.
	 *
	 * @param primaryGuildData - The raw Discord API user primary guild.
	 *
	 * @returns The transformed
	 * {@link PrimaryGuild | `PrimaryGuild`} object.
	 */
	static transformPrimaryGuild(primaryGuildData: APIPrimaryGuild): PrimaryGuild | null {
		const { badge, identity_enabled, identity_guild_id, tag } = primaryGuildData;

		/**
		 * If the identity is not enabled, return `null`.
		 */
		if (!identity_enabled) {
			return null;
		}

		/**
		 * All of these fields are present in the data when `identity_enabled`
		 * is `true`.
		 *
		 * But since all of them are nullable, should throw a `TypeError` if
		 * they are nullable but `identity_enabled` is `true`.
		 */
		if (!(badge && identity_guild_id && tag)) {
			throw new TypeError(
				MISSING_REQUIRED_FIELDS_FROM_DATA(
					["badge", "identity_guild_id", "tag"],
					"primary guild",
				),
			);
		}

		return {
			badge,
			identityEnabled: identity_enabled,
			identityGuildId: identity_guild_id,
			tag,
		};
	}
}
