import { Mixin } from "ts-mixer";
import { GuildAPI } from "./api/guild/GuildAPI.js";
import { MessageAPI } from "./api/message/index.js";
import { MonetizationAPI } from "./api/monetization/MonetizationAPI.js";
import { PlatformAPI } from "./api/platform/index.js";

/**
 * @public
 */
export class APIManager extends Mixin(PlatformAPI, MessageAPI, MonetizationAPI, GuildAPI) {}
