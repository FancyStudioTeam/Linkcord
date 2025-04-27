import type { APIApplication } from "#payloads";

/**
 * @see https://discord.com/developers/docs/resources/application#application-object-application-structure
 */
export interface GatewayApplication extends Required<Pick<APIApplication, "flags" | "id">> {}
