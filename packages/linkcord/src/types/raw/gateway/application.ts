import type { APIApplication } from "../payloads/application.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/application#application-object-application-structure
 */
export interface GatewayApplication extends Required<Pick<APIApplication, "flags" | "id">> {}
