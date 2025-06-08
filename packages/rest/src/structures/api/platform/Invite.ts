import type { RESTDeleteInvite, RESTGetInvite, RESTGetInviteStringParams } from "@fancystudioteam/linkcord-types";
import { Endpoints } from "../../../utils/index.js";
import { BaseAPI } from "../base/BaseAPI.js";

/**
 * @public
 */
export class Invite extends BaseAPI {
  /**
   * @see https://discord.com/developers/docs/resources/invite#delete-invite
   */
  async deleteInvite<Result = RESTDeleteInvite>(inviteCode: string): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.delete<Result>(Endpoints.invite(inviteCode));

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/invite#get-invite
   */
  async getInvite<Result = RESTGetInvite>(inviteCode: string, options?: GetInviteOptions): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.get<Result, RESTGetInviteStringParams>(Endpoints.invite(inviteCode), options);

    return request;
  }
}

/**
 * @public
 */
export interface GetInviteOptions {
  query?: RESTGetInviteStringParams;
}
