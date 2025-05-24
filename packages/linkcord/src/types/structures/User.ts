import type { Nullable, Snowflake } from "@fancystudioteam/linkcord-types";
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
  accentColor?: Nullable<number>;
  avatar: Nullable<string>;
  avatarDecorationData?: Nullable<AvatarDecoration>;
  banner: Nullable<string>;
  bot: boolean;
  collectibles: UserCollectibles;
  createdAt: Date;
  discriminator: string;
  flags: BitFieldResolver;
  globalName: Nullable<string>;
  id: Snowflake;
  system: boolean;
  username: string;
  avatarDecorationUrl(): Nullable<string>;
  avatarUrl(): string;
  bannerUrl(): Nullable<string>;
  defaultAvatarUrl(): string;
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
