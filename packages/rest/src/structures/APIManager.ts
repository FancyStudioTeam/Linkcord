import { Mixin } from "ts-mixer";
import { MessageAPI } from "./api/message/MessageAPI.js";
import { MonetizationAPI } from "./api/monetization/MonetizationAPI.js";
import { PlatformAPI } from "./api/platform/PlatformAPI.js";

/**
 * @public
 */
export class APIManager extends Mixin(PlatformAPI, MessageAPI, MonetizationAPI) {}
