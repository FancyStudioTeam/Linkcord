import type { User } from "#structures/index.js";
import type { NameplatePalettes, Snowflake } from "#types/discord/index.js";
import type { JSONProperties } from "#utils/types.js";

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
	nameplate?: UserNameplate;
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

/**
 * @public
 */
export type JSONUser = JSONProperties<typeof User>;
