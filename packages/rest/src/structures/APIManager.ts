import { Mixin } from "ts-mixer";
import { MonetizationAPI } from "./api/monetization/MonetizationAPI.js";
import { PlatformAPI } from "./api/platform/PlatformAPI.js";

/**
 * @public
 */
export class APIManager extends Mixin(PlatformAPI, MonetizationAPI) {}
