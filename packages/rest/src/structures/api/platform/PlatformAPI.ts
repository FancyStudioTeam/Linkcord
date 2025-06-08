import { Mixin } from "ts-mixer";
import { Invite } from "./Invite.js";
import { Voice } from "./Voice.js";

/**
 * @public
 */
export class PlatformAPI extends Mixin(Invite, Voice) {}
