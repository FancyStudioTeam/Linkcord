import { UserFlags } from "@fancystudioteam/linkcord-types";
import { SnowflakeUtils } from "@fancystudioteam/linkcord-utils";
import { describe, expect, it } from "vitest";
import type { User } from "../../types/structures/user.js";
import type { _OmitMethods } from "../../types/util.js";
import { BitFieldResolver } from "../../utils/structures/BitFieldResolver.js";
import { UserTransformer } from "../UserTransformer.js";

describe("Class: UserTransformer", () => {
  it("Transforms a raw user object into a 'User' object.", () => {
    const flags = UserFlags.ActiveDeveloper | UserFlags.Staff;
    const transformedUser = UserTransformer.transformFromRawUser({
      avatar: "d259b2b5deb475b5928c2f73a8ce6101",
      banner: null,
      discriminator: "0",
      flags,
      global_name: "Username",
      id: "1200870671681605662",
      username: "Username",
    });

    expect(transformedUser).toMatchObject<UserProperties>({
      accentColor: null,
      avatar: "d259b2b5deb475b5928c2f73a8ce6101",
      avatarDecorationData: null,
      banner: null,
      bot: false,
      collectibles: {},
      createdAt: new Date(SnowflakeUtils.timestampFrom("1200870671681605662")),
      discriminator: "0",
      flags: new BitFieldResolver(flags),
      globalName: "Username",
      id: "1200870671681605662",
      system: false,
      username: "Username",
    });
    expect(transformedUser.avatarDecorationUrl()).toBe(null);
    expect(transformedUser.avatarUrl()).toBe(
      "https://cdn.discordapp.com/avatars/1200870671681605662/d259b2b5deb475b5928c2f73a8ce6101.webp",
    );
    expect(transformedUser.bannerUrl()).toBe(null);
    expect(transformedUser.defaultAvatarUrl()).toBe("https://cdn.discordapp.com/embed/avatars/3.webp");
  });
});

type UserProperties = _OmitMethods<User>;
