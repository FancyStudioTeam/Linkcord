import type {
  APIAvatarDecorationData,
  APIUser,
  APIUserCollectibles,
  APIUserNameplate,
  Nullable,
} from "@fancystudioteam/linkcord-types";
import { DiscordSnowflake } from "@sapphire/snowflake";
import type { AvatarDecoration, User, UserCollectibles, UserNameplate } from "../types/structures/User.js";
import type { _OmitMethods, _OmitProperties } from "../types/util.js";
import { BitFieldResolver } from "../utils/structures/BitFieldResolver.js";

/**
 * Gets the avatar decoration url of a user.
 * @param userProperties - The user properties to use.
 * @returns The avatar decoration url of the user or `null`.
 */
const userAvatarDecorationUrl = (userProperties: UserProperties): Nullable<string> => {
  const { avatarDecorationData, id } = userProperties;
  const { asset } = avatarDecorationData ?? {};

  if (!asset) {
    return null;
  }

  const avatarDecorationUrlString = `https://cdn.discordapp.com/avatar-decorations/${id}/${asset}.png`;
  const avatarDecorationUrl = new URL(avatarDecorationUrlString);

  return avatarDecorationUrl.toString();
};

/**
 * Gets the avatar url of a user.
 * @param userProperties - The user properties to use.
 * @returns The avatar url of the user.
 */
const userAvatarUrl = (userProperties: UserProperties): string => {
  const { avatar, id } = userProperties;

  if (!avatar) {
    return userDefaultAvatarUrl(userProperties);
  }

  const avatarUrlString = `https://cdn.discordapp.com/avatars/${id}/${avatar}.png`;
  const avatarUrl = new URL(avatarUrlString);

  return avatarUrl.toString();
};

/**
 * Gets the banner url of a user if it is set.
 * @param userProperties - The user properties to use.
 * @returns The banner url of the user or `null`.
 */
const userBannerUrl = (userProperties: UserProperties): Nullable<string> => {
  const { banner, id } = userProperties;

  if (!banner) {
    return null;
  }

  const bannerUrlString = `https://cdn.discordapp.com/banners/${id}/${banner}.png`;
  const bannerUrl = new URL(bannerUrlString);

  return bannerUrl.toString();
};

/**
 * Gets the default avatar url of a user.
 * @param userProperties - The user properties to use.
 * @returns The default avatar url of the user.
 */
const userDefaultAvatarUrl = (userProperties: UserProperties): string => {
  const { discriminator, id } = userProperties;
  /**
   * Users that have their discriminator set to `0` means that they have migrated
   * to the new Discord username system.
   *
   * We must check if the user has migrated to the new username system to determine
   * his avatar index.
   */
  const hasNewUsernameSystem = discriminator === "0";
  /**
   * @see https://discord.com/developers/docs/reference#image-formatting-cdn-endpoints
   */
  const index = hasNewUsernameSystem ? Number(BigInt(id) >> 22n) % 6 : Number(discriminator) % 5;
  const avatarUrlString = `https://cdn.discordapp.com/embed/avatars/${index}.png`;
  const avatarUrl = new URL(avatarUrlString);

  return avatarUrl.toString();
};

/**
 * @public
 */
export class UserTransformer {
  static transformFromRawAvatarDecoration(
    rawAvatarDecoration?: Nullable<RawAvatarDecoration>,
  ): Nullable<AvatarDecoration> {
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
      createdAt: new Date(DiscordSnowflake.timestampFrom(rawUser.id)),
      discriminator: rawUser.discriminator,
      flags: new BitFieldResolver(rawUser.flags ?? 0),
      globalName: rawUser.global_name ?? null,
      id: rawUser.id,
      system: rawUser.system ?? false,
      username: rawUser.username,
    };
    const userMethods: UserMethods = {
      avatarDecorationUrl: () => userAvatarDecorationUrl(userProperties),
      avatarUrl: () => userAvatarUrl(userProperties),
      bannerUrl: () => userBannerUrl(userProperties),
      defaultAvatarUrl: () => userDefaultAvatarUrl(userProperties),
    };
    const user = {
      ...userMethods,
      ...userProperties,
    };

    return user;
  }

  static transformFromRawUserCollectibles(rawUserCollectibles?: Nullable<RawUserCollectibles>): UserCollectibles {
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
