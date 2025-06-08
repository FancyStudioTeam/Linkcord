import type { RESTDeleteInvite, RESTGetInvite, RESTGetInviteStringParams } from "@fancystudioteam/linkcord-types";
import { Endpoints } from "../utils/index.js";
import type { RESTManager } from "./RESTManager.js";

/**
 * @public
 */
export class InviteREST {
  restManager: RESTManager;

  constructor(restManager: RESTManager) {
    this.restManager = restManager;
  }

  /**
   * @see https://discord.com/developers/docs/resources/invite#delete-invite
   */
  async deleteInvite<Result = RESTDeleteInvite>(inviteCode: string): Promise<Result> {
    const { restManager } = this;
    const request = await restManager.delete<Result>(Endpoints.invite(inviteCode));

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/invite#get-invite
   */
  async getInvite<Result = RESTGetInvite>(inviteCode: string, options?: GetInviteOptions): Promise<Result> {
    const { restManager } = this;
    const request = await restManager.get<Result, RESTGetInviteStringParams>(Endpoints.invite(inviteCode), options);

    return request;
  }
}

/**
 * @public
 */
export interface GetInviteOptions {
  query?: RESTGetInviteStringParams;
}
