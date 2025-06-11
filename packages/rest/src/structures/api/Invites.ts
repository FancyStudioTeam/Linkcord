import type { RESTDeleteInvite, RESTGetInvite, RESTGetInviteStringParams } from "@fancystudioteam/linkcord-types";
import { Endpoints } from "../../utils/index.js";
import { BaseAPI } from "./base/BaseAPI.js";

/**
 * @public
 */
export class Invites extends BaseAPI {
  /**
   * @see https://discord.com/developers/docs/resources/invite#delete-invite
   */
  async deleteInvite<Result = RESTDeleteInvite>(inviteCode: string, options?: DeleteInviteOptions): Promise<Result> {
    return await super.delete<Result>(Endpoints.invite(inviteCode), options);
  }

  /**
   * @see https://discord.com/developers/docs/resources/invite#get-invite
   */
  async getInvite<Result = RESTGetInvite>(inviteCode: string, options?: GetInviteOptions): Promise<Result> {
    return await super.get<Result, RESTGetInviteStringParams>(Endpoints.invite(inviteCode), options);
  }
}

/**
 * @public
 */
export interface DeleteInviteOptions {
  reason?: string;
}

/**
 * @public
 */
export interface GetInviteOptions {
  query?: RESTGetInviteStringParams;
}
