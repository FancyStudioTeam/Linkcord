import { Mixin } from "ts-mixer";
import { ChannelsAPI } from "#rest/api/ChannelsAPI.js";

/**
 * @public
 */
export class APIManager extends Mixin(ChannelsAPI) {}
