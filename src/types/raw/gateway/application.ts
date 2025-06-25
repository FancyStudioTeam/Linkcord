import type { APIApplication } from "../payloads/Applications.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/application#application-object-application-structure
 */
export type GatewayApplication = Required<Pick<APIApplication, "flags" | "id">>;
