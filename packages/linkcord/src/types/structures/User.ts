import type { Snowflake } from "@fancystudioteam/linkcord-types";
import type { ImageUrlOptions } from "@fancystudioteam/linkcord-utils";
import type { BitFieldResolver } from "../../utils/structures/BitFieldResolver.js";

/**
 * @public
 */
export interface AvatarDecoration {
  asset: string;
  skuId: Snowflake;
}

/**
 * @public
 */
export interface User {
  accentColor: number | null;
  avatar: string | null;
  avatarDecorationData: AvatarDecoration | null;
  banner: string | null;
  bot: boolean;
  collectibles: UserCollectibles;
  createdAt: Date;
  discriminator: string;
  flags: BitFieldResolver;
  globalName: string | null;
  id: Snowflake;
  system: boolean;
  username: string;
  avatarDecorationUrl(options?: ImageUrlOptions): string | null;
  avatarUrl(options?: ImageUrlOptions): string;
  bannerUrl(options?: ImageUrlOptions): string | null;
  defaultAvatarUrl(options?: ImageUrlOptions): string;
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
  palette: string;
  skuId: Snowflake;
}
