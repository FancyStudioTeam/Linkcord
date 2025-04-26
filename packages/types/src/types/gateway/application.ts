import type { APIApplication } from "#types/payloads";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/application#application-object-application-structure
 */
export interface GatewayApplication extends Required<Pick<APIApplication, "flags" | "id">> {}
