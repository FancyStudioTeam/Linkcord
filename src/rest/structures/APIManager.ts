import { Mixin } from "ts-mixer";
import { ApplicationsAPI } from "#rest/api/ApplicationsAPI.js";
import { ChannelsAPI } from "#rest/api/ChannelsAPI.js";
import { GatewayAPI } from "#rest/api/GatewayAPI.js";
import { MiscellaneousAPI } from "#rest/api/MiscellaneousAPI.js";

export class APIManager extends Mixin(ApplicationsAPI, ChannelsAPI, GatewayAPI, MiscellaneousAPI) {}
