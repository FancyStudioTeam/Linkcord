import type { NameplatePalettes, Snowflake } from "#types/raw/index.js";

/**
 * @public
 */
export interface AvatarDecorationData {
	asset: string;
	skuId: Snowflake;
}

/**
 * @public
 */
export interface PrimaryGuild {
	badge: string;
	identityEnabled: boolean;
	identityGuildId: Snowflake;
	tag: string;
}

/**
 * @public
 */
export interface UserCollectibles {
	nameplate: UserNameplate | null;
}

/**
 * @public
 */
export interface UserNameplate {
	asset: string;
	label: string;
	palette: NameplatePalettes;
	skuId: Snowflake;
}
