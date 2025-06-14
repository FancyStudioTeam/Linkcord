import { type APIUser, UserFlags } from "@fancystudioteam/linkcord-types";
import { describe, expect, it } from "vitest";
import { BitFieldResolver } from "../../../utils/index.js";
import { User } from "../User.js";

const RAW_DISCORD_USER: APIUser = {
  avatar: "d259b2b5deb475b5928c2f73a8ce6101",
  banner: null,
  discriminator: "0",
  flags: UserFlags.ActiveDeveloper | UserFlags.Staff,
  global_name: "Username",
  id: "1200870671681605662",
  username: "Username",
};

describe("Class: User", () => {
  it("Returns an instance of the 'User' class.", () => {
    const user = new User(RAW_DISCORD_USER.id, RAW_DISCORD_USER);

    expect(user.accentColor).toStrictEqual(null);
    expect(user.avatar).toStrictEqual("d259b2b5deb475b5928c2f73a8ce6101");
    expect(user.banner).toStrictEqual(null);
    expect(user.bot).toStrictEqual(false);
    expect(user.collectibles).toStrictEqual({});
    expect(user.discriminator).toStrictEqual("0");
    expect(user.flags).toStrictEqual(new BitFieldResolver(UserFlags.ActiveDeveloper | UserFlags.Staff));
    expect(user.id).toStrictEqual("1200870671681605662");
    expect(user.isMigrated).toStrictEqual(true);
    expect(user.primaryGuild).toStrictEqual(null);
    expect(user.username).toStrictEqual("Username");

    expect(user.avatarDecorationUrl()).toBe(null);
    expect(user.avatarUrl()).toBe(
      "https://cdn.discordapp.com/avatars/1200870671681605662/d259b2b5deb475b5928c2f73a8ce6101.webp",
    );
    expect(user.bannerUrl()).toBe(null);
    expect(user.defaultAvatarUrl()).toBe("https://cdn.discordapp.com/embed/avatars/3.webp");
  });
});
