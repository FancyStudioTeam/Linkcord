import { Mixin } from "ts-mixer";
import { ChannelsAPI } from "#rest/api/ChannelsAPI.js";
import { InteractionsAPI } from "#rest/api/InteractionsAPI.js";

/**
 * @public
 */
export class APIManager extends Mixin(ChannelsAPI, InteractionsAPI) {}
