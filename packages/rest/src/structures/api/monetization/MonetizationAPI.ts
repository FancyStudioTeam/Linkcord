import { Mixin } from "ts-mixer";
import { Entitlement } from "./Entitlement.js";
import { SKU } from "./SKU.js";
import { Subscription } from "./Subscription.js";

/**
 * @public
 */
export class MonetizationAPI extends Mixin(Entitlement, SKU, Subscription) {}
