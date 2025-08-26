import { Mixin } from "ts-mixer";
import { GatewayAPI } from "#rest/api/GatewayAPI.js";
import { InteractionsAPI } from "#rest/api/InteractionsAPI.js";

/** The API manager to perform requests within the Discord API. */
export class APIManager extends Mixin(GatewayAPI, InteractionsAPI) {}
