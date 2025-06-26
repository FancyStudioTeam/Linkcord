import { UserTransformer } from "#transformers/UserTransformer.js";
import type { APIUser, Snowflake } from "#types/index.js";
import type { AvatarDecorationData, PrimaryGuild, UserCollectibles } from "#types/parsed/Users.js";
import { BitFieldResolver } from "#utils/index.js";
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

  constructor(id: Snowflake, data: APIUser) {
    super(id);

    const {
      accent_color,
      avatar,
      avatar_decoration_data,
      banner,
      bot,
      collectibles,
      discriminator,
      flags,
      primary_guild,
      username,
    } = data;

    this.accentColor = accent_color ?? null;
    this.avatar = avatar ?? null;
    this.avatarDecorationData =
      UserTransformer.transformAvatarDecorationData(avatar_decoration_data);
    this.banner = banner ?? null;
    this.bot = Boolean(bot);
    this.collectibles = UserTransformer.transformCollectibles(collectibles);
    this.discriminator = discriminator;
    this.flags = new BitFieldResolver(flags);
    this.primaryGuild = UserTransformer.transformPrimaryGuild(primary_guild);
    this.username = username;
  }
}
