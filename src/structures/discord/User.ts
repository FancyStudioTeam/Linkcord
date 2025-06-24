import type {
  APIAvatarDecorationData,
  APIPrimaryGuild,
  APIUser,
  APIUserCollectibles,
  NameplatePalettes,
  Snowflake,
} from "@fancystudioteam/linkcord-types";
import { type ImageUrlOptions, ImageUtils } from "@fancystudioteam/linkcord-utils";
import { BitFieldResolver } from "../../utils/index.js";
import { Base } from "./base/Base.js";

/**
 * @public
 */
export class User extends Base {
  accentColor: number | null;
  avatar: string | null;
  avatarDecorationData: AvatarDecorationData | null;
  banner: string | null;
  bot: boolean;
  collectibles: UserCollectibles;
  discriminator: string;
  flags: BitFieldResolver;
  primaryGuild: PrimaryGuild | null;
  username: string;

  constructor(id: string, data: APIUser) {
    super(id);

    this.accentColor = data.accent_color ?? null;
    this.avatar = data.avatar ?? null;
    this.avatarDecorationData = this._transformAvatarDecorationData(data.avatar_decoration_data);
    this.banner = data.banner ?? null;
    this.bot = Boolean(data.bot);
    this.collectibles = this._transformCollectibles(data.collectibles);
    this.discriminator = data.discriminator;
    this.flags = new BitFieldResolver(data.flags ?? 0);
    this.primaryGuild = this._transformPrimaryGuild(data.primary_guild);
    this.username = data.username;
  }

  /**
   * @internal
   */
  private _transformAvatarDecorationData(
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
  private _transformCollectibles(rawCollectibles?: APIUserCollectibles | null): UserCollectibles {
    const { nameplate } = rawCollectibles ?? {};
    const collectibles: UserCollectibles = {};

    if (nameplate) {
      collectibles.nameplate = {
        asset: nameplate.asset,
        label: nameplate.label,
        palette: nameplate.palette,
        skuId: nameplate.sku_id,
      };
    }

    return collectibles;
  }

  /**
   * @internal
   */
  private _transformPrimaryGuild(rawPrimaryGuild?: APIPrimaryGuild | null): PrimaryGuild | null {
    const { badge, identity_enabled, identity_guild_id, tag } = rawPrimaryGuild ?? {};

    if (!(badge && identity_guild_id && tag) || identity_enabled === false) {
      return null;
    }

    return {
      badge,
      identityEnabled: Boolean(identity_enabled),
      identityGuildId: identity_guild_id,
      tag,
    };
  }

  get isMigrated(): boolean {
    return this.discriminator === "0" || this.discriminator === undefined;
  }

  avatarDecorationUrl(options?: ImageUrlOptions): string | null {
    const { avatarDecorationData } = this;
    const { asset } = avatarDecorationData ?? {};

    if (!asset) {
      return null;
    }

    return ImageUtils.createImageUrl(`avatar-decoration-presets/${asset}`, options);
  }

  avatarUrl(options?: ImageUrlOptions): string {
    const { avatar, id } = this;

    if (!avatar) {
      return this.defaultAvatarUrl(options);
    }

    return ImageUtils.createImageUrl(`avatars/${id}/${avatar}`, options);
  }

  bannerUrl(options?: ImageUrlOptions): string | null {
    const { banner, id } = this;

    if (!banner) {
      return null;
    }

    return ImageUtils.createImageUrl(`banners/${id}/${banner}`, options);
  }

  defaultAvatarUrl(options?: ImageUrlOptions): string {
    const { discriminator, id, isMigrated } = this;
    const index = isMigrated ? Number(BigInt(id) >> 22n) % 6 : Number(discriminator) % 5;

    return ImageUtils.createImageUrl(`embed/avatars/${index}`, options);
  }
}

export interface AvatarDecorationData {
  asset: string;
  skuId: Snowflake;
}

export interface PrimaryGuild {
  badge: string | null;
  identityEnabled: boolean;
  identityGuildId: Snowflake | null;
  tag: string | null;
}

export interface UserCollectibles {
  nameplate?: UserNameplate;
}

export interface UserNameplate {
  asset: string;
  label: string;
  palette: NameplatePalettes;
  skuId: Snowflake;
}
