import type { RESTManager } from "../../RESTManager.js";

/**
 * @public
 */
export class BaseAPI {
  protected _restManager: RESTManager;

  constructor(restManager: RESTManager) {
    this._restManager = restManager;
  }
}
