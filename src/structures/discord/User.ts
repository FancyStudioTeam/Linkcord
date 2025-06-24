import type {
  APIAvatarDecorationData,
  APIPrimaryGuild,
  APIUser,
  APIUserCollectibles,
  NameplatePalettes,
  Snowflake,
} from "#types/index.js";
import { BitFieldResolver } from "#utils/BitFieldResolver.js";
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
