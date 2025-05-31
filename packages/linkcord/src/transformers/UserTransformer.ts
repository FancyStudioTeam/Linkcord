import type {
  APIAvatarDecorationData,
  APIUser,
  APIUserCollectibles,
  APIUserNameplate,
} from "@fancystudioteam/linkcord-types";
import { type ImageUrlOptions, ImageUtils, SnowflakeUtils } from "@fancystudioteam/linkcord-utils";
import type { AvatarDecoration, User, UserCollectibles, UserNameplate } from "../types/structures/User.js";
import type { _OmitMethods, _OmitProperties } from "../types/util.js";
import { BitFieldResolver } from "../utils/structures/BitFieldResolver.js";

const _avatarDecorationUrl = (userProperties: UserProperties, options?: ImageUrlOptions): string | null => {
  const { avatarDecorationData } = userProperties;
  const { asset } = avatarDecorationData ?? {};

  if (!asset) {
    return null;
  }

  return ImageUtils.createImageUrl(`avatar-decoration-presets/${asset}`, options);
};

const _avatarUrl = (userProperties: UserProperties, options?: ImageUrlOptions): string => {
  const { avatar, id } = userProperties;

  if (!avatar) {
    return _defaultAvatarUrl(userProperties, options);
  }

  return ImageUtils.createImageUrl(`avatars/${id}/${avatar}`, options);
};

const _bannerUrl = (userProperties: UserProperties, options?: ImageUrlOptions): string | null => {
  const { banner, id } = userProperties;

  if (!banner) {
    return null;
  }

  return ImageUtils.createImageUrl(`banners/${id}/${banner}`, options);
};

const _defaultAvatarUrl = (userProperties: UserProperties, options?: ImageUrlOptions): string => {
  const { discriminator, id } = userProperties;
  /**
   * Users that have migrated to the new Discord username system will have
   * their discriminators set to "0".
   *
   * This is necessary to determine which formula of the user index should be
   * used.
   */
  const isMigrated = discriminator === "0";
  /**
   * @see https://discord.com/developers/docs/reference#image-formatting-cdn-endpoints
   */
  const index = isMigrated ? Number(BigInt(id) >> 22n) % 6 : Number(discriminator) % 5;

  return ImageUtils.createImageUrl(`embed/avatars/${index}`, options);
};

/**
 * @public
 */
export class UserTransformer {
  static transformFromRawAvatarDecoration(rawAvatarDecoration?: RawAvatarDecoration | null): AvatarDecoration | null {
    if (!rawAvatarDecoration) {
      return null;
    }

    return {
      asset: rawAvatarDecoration.asset,
      skuId: rawAvatarDecoration.sku_id,
    };
  }

  static transformFromRawUser(rawUser: RawUser): User {
    const userAvatarDecorationProperty = UserTransformer.transformFromRawAvatarDecoration(
      rawUser.avatar_decoration_data,
    );
    const userCollectiblesProperty = UserTransformer.transformFromRawUserCollectibles(rawUser.collectibles);
    const userProperties: UserProperties = {
      accentColor: rawUser.accent_color ?? null,
      avatar: rawUser.avatar,
      avatarDecorationData: userAvatarDecorationProperty,
      banner: rawUser.banner ?? null,
      bot: rawUser.bot ?? false,
      collectibles: userCollectiblesProperty,
      createdAt: new Date(SnowflakeUtils.timestampFrom(rawUser.id)),
      discriminator: rawUser.discriminator,
      flags: new BitFieldResolver(rawUser.flags ?? 0),
      globalName: rawUser.global_name ?? null,
      id: rawUser.id,
      system: rawUser.system ?? false,
      username: rawUser.username,
    };
    const userMethods: UserMethods = {
      avatarDecorationUrl: (options?: ImageUrlOptions) => _avatarDecorationUrl(userProperties, options),
      avatarUrl: (options?: ImageUrlOptions) => _avatarUrl(userProperties, options),
      bannerUrl: (options?: ImageUrlOptions) => _bannerUrl(userProperties, options),
      defaultAvatarUrl: (options?: ImageUrlOptions) => _defaultAvatarUrl(userProperties, options),
    };
    const user = {
      ...userMethods,
      ...userProperties,
    };

    return user;
  }

  static transformFromRawUserCollectibles(rawUserCollectibles?: RawUserCollectibles | null): UserCollectibles {
    const collectibles: UserCollectibles = {};

    if (rawUserCollectibles?.nameplate) {
      collectibles.nameplate = UserTransformer.transformFromRawUserNameplate(rawUserCollectibles.nameplate);
    }

    return collectibles;
  }

  static transformFromRawUserNameplate(rawUserCollectibles: RawUserNameplate): UserNameplate {
    return {
      asset: rawUserCollectibles.asset,
      label: rawUserCollectibles.label,
      palette: rawUserCollectibles.palette,
      skuId: rawUserCollectibles.sku_id,
    };
  }
}

type RawAvatarDecoration = APIAvatarDecorationData;
type RawUser = APIUser;
type RawUserCollectibles = APIUserCollectibles;
type RawUserNameplate = APIUserNameplate;

type UserMethods = _OmitProperties<User>;
type UserProperties = _OmitMethods<User>;
