import type { Client } from "#client";
import type {
  APIApplicationRoleConnection,
  APIAvatarDecorationData,
  APIConnection,
  APIUser,
  ApplicationRoleConnection,
  AvatarDecorationData,
  Connection,
  User,
} from "#types";
import { Transformer } from "./base/Transformer.js";

export class UsersTransformer extends Transformer {
  // biome-ignore lint/complexity/noUselessConstructor:
  constructor(client: Client) {
    super(client);
  }

  /** @internal */
  rawApplicationRoleConnectionToParsed(
    rawApplicationRoleConnection: RawApplicationRoleConnection,
  ): ApplicationRoleConnection {
    const { metadata, platform_name, platform_username } = rawApplicationRoleConnection;
    const applicationRoleConnection: ApplicationRoleConnection = {
      metadata,
      platformName: platform_name,
      platformUsername: platform_username,
    };

    return applicationRoleConnection;
  }

  /** @internal */
  rawAvatarDecorationDataToParsed(rawAvatarDecorationData: RawAvatarDecorationData): AvatarDecorationData {
    const { asset, sku_id } = rawAvatarDecorationData;
    const avatarDecorationData: AvatarDecorationData = {
      asset,
      skuId: sku_id,
    };

    return avatarDecorationData;
  }

  /** @internal */
  rawConnectionToParsed(rawConnection: RawConnection): Connection {
    const { friend_sync, id, name, revoked, show_activity, two_way_link, type, verified, visibility } = rawConnection;
    const connection: Connection = {
      friendSync: friend_sync,
      id,
      name,
      revoked,
      showActivity: show_activity,
      twoWayLink: two_way_link,
      type,
      verified,
      visibility,
    };

    return connection;
  }

  /** @internal */
  rawUserToParsed(rawUser: RawUser): User {
    const {
      accent_color,
      avatar,
      avatar_decoration_data,
      banner,
      bot,
      discriminator,
      email,
      flags,
      global_name,
      id,
      locale,
      mfa_enabled,
      premium_type,
      public_flags,
      system,
      username,
      verified,
    } = rawUser;
    const parsedAvatarDecorationData = avatar_decoration_data
      ? this.rawAvatarDecorationDataToParsed(avatar_decoration_data)
      : null;
    const user: User = {
      accentColor: accent_color,
      avatar,
      avatarDecorationData: parsedAvatarDecorationData,
      banner,
      bot: bot ?? false,
      discriminator,
      email,
      flags: flags ?? 0,
      globalName: global_name,
      id,
      locale,
      mfaEnabled: mfa_enabled,
      premiumType: premium_type,
      publicFlags: public_flags ?? 0,
      system: system ?? false,
      username,
      verified,
    };

    return user;
  }
}

type RawApplicationRoleConnection = APIApplicationRoleConnection;
type RawAvatarDecorationData = APIAvatarDecorationData;
type RawConnection = APIConnection;
type RawUser = APIUser;
