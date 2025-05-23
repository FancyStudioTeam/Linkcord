import type { APIEntitlement, APIPartialEntitlement } from "../payloads/entitlement.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/entitlement#consume-an-entitlement
 */
export type RESTConsumeEntitlement = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/entitlement#create-test-entitlement
 */
export type RESTCreateTestEntitlement = APIPartialEntitlement;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/entitlement#delete-test-entitlement
 */
export type RESTDeleteTestEntitlement = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/entitlement#get-entitlement
 */
export type RESTGetEntitlement = APIEntitlement;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/entitlement#list-entitlements
 */
export type RESTListEntitlements = APIEntitlement[];
