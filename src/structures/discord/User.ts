import { UserTransformer } from "#transformers/UserTransformer.js";
import type { APIUser } from "#types/index.js";
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

  constructor(id: string, data: APIUser) {
    super(id);

    this.accentColor = data.accent_color ?? null;
    this.avatar = data.avatar ?? null;
    this.avatarDecorationData = UserTransformer.transformAvatarDecorationData(data.avatar_decoration_data);
    this.banner = data.banner ?? null;
    this.bot = Boolean(data.bot);
    this.collectibles = UserTransformer.transformCollectibles(data.collectibles);
    this.discriminator = data.discriminator;
    this.flags = new BitFieldResolver(data.flags ?? 0);
    this.primaryGuild = UserTransformer.transformPrimaryGuild(data.primary_guild);
    this.username = data.username;
  }
}
