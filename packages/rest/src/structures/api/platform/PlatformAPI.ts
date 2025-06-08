import { Mixin } from "ts-mixer";
import { Gateway } from "./Gateway.js";
import { Invite } from "./Invite.js";
import { Voice } from "./Voice.js";

/**
 * @public
 */
export class PlatformAPI extends Mixin(Gateway, Invite, Voice) {}
