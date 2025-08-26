import { Mixin } from "ts-mixer";
import { ChannelsAPI } from "#rest/api/ChannelsAPI.js";
import { GatewayAPI } from "#rest/api/GatewayAPI.js";
import { GuildsAPI } from "#rest/api/GuildsAPI.js";
import { InteractionsAPI } from "#rest/api/InteractionsAPI.js";

/**
 * @public
 */
export class APIManager extends Mixin(ChannelsAPI, GatewayAPI, GuildsAPI, InteractionsAPI) {}
