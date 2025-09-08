import { Mixin } from "ts-mixer";
import { ChannelsAPI } from "#rest/api/ChannelsAPI.js";
import { GatewayAPI } from "#rest/api/GatewayAPI.js";
import { MiscellaneousAPI } from "#rest/api/MiscellaneousAPI.js";

/** The API manager to perform requests within the Discord API. */
export class APIManager extends Mixin(ChannelsAPI, GatewayAPI, MiscellaneousAPI) {}
