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
 * @internal
 */
export class UserTransformer {
	/**
	 * @internal
	 */
	static transformAvatarDecorationData(
		avatarDecorationData?: APIAvatarDecorationData | null,
	): AvatarDecorationData | null {
		const { asset, sku_id } = avatarDecorationData ?? {};

		if (!(asset && sku_id)) {
			return null;
		}

		return {
			asset,
			skuId: sku_id,
		};
	}

	/**
	 * @internal
	 */
	static transformCollectibles(collectibles?: APIUserCollectibles | null): UserCollectibles {
		const { nameplate } = collectibles ?? {};
		const collectiblesData: UserCollectibles = {
			nameplate: null,
		};

		if (nameplate) {
			collectiblesData.nameplate = UserTransformer.transformNameplate(nameplate);
		}

		return collectiblesData;
	}

	/**
	 * @internal
	 */
	static transformNameplate(nameplate: APIUserNameplate): UserNameplate {
		const { asset, label, palette, sku_id } = nameplate;

		return {
			asset,
			label,
			palette,
			skuId: sku_id,
		};
	}

	/**
	 * @internal
	 */
	static transformPrimaryGuild(primaryGuild?: APIPrimaryGuild | null): PrimaryGuild | null {
		const { badge, identity_enabled, identity_guild_id, tag } = primaryGuild ?? {};

		if (!identity_enabled) {
			return null;
		}

		if (!(badge && identity_guild_id && tag)) {
			throw new TypeError(
				"Fields 'badge', 'identity_guild_id' and 'tag' are missing from the primary guild data but should be always present when the identity is enabled.",
			);
		}

		return {
			badge,
			identityEnabled: Boolean(identity_enabled),
			identityGuildId: identity_guild_id,
			tag,
		};
	}
}
