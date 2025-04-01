import type { Client } from "#client";
import type {
  APIPartialGuild,
  EditCurrentUser,
  RESTGetUserResult,
  RESTLeaveGuildResult,
  RESTModifyCurrentUserJSONParams,
  RESTModifyCurrentUserResult,
  Snowflake,
  User,
} from "#types";
import { Routes } from "#util";
import { RESTMethod } from "./RESTManager.js";
import { Manager } from "./base/Manager.js";

export class UsersRESTManager extends Manager {
  // biome-ignore lint/complexity/noUselessConstructor:
  constructor(client: Client) {
    super(client);
  }

  async createDM(recipientId: Snowflake): Promise<void> {}

  /**
   * Edits the current user.
   *
   * @param options - The options to use when editing the current user.
   *
   * @returns The updated user object.
   */
  async editCurrentUser(options: EditCurrentUser): Promise<User> {
    const { avatar, banner, username } = options;
    const restManager = this.getRESTManager();
    const { users } = this.getTransformers();
    const { usersMe } = Routes;
    const rawUser = await restManager.makeRequest<RESTModifyCurrentUserResult, RESTModifyCurrentUserJSONParams>(
      RESTMethod.Get,
      usersMe(),
      {
        json: {
          avatar,
          banner,
          username,
        },
      },
    );
    const parsedUser = users.rawUserToParsed(rawUser);

    return parsedUser;
  }

  /**
   * Gets the current user object.
   *
   * @returns The current user object.
   */
  async getCurrentUser(): Promise<User> {
    const restManager = this.getRESTManager();
    const { users } = this.getTransformers();
    const { usersMe } = Routes;
    const rawUser = await restManager.makeRequest<RESTGetUserResult>(RESTMethod.Get, usersMe());
    const parsedUser = users.rawUserToParsed(rawUser);

    return parsedUser;
  }

  async getCurrentUserGuilds(): Promise<APIPartialGuild[]> {}

  /**
   * Gets a user object.
   *
   * @param userId - The user id to get.
   *
   * @returns The user object.
   */
  async getUser(userId: Snowflake): Promise<User> {
    const restManager = this.getRESTManager();
    const { users } = this.getTransformers();
    const { user } = Routes;
    const rawUser = await restManager.makeRequest<RESTGetUserResult>(RESTMethod.Get, user(userId));
    const parsedUser = users.rawUserToParsed(rawUser);

    return parsedUser;
  }

  /**
   * Leaves a guild.
   *
   * @param guildId - The guild id to leave.
   */
  async leaveGuild(guildId: Snowflake): Promise<void> {
    const restManager = this.getRESTManager();
    const { guild } = Routes;
    const rawGuild = await restManager.makeRequest<RESTLeaveGuildResult>(RESTMethod.Delete, guild(guildId));

    return rawGuild;
  }
}
