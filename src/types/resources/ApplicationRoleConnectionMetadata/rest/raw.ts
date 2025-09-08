import type { APIApplicationRoleConnectionMetadata } from "../structures/raw.js";

/**
 * Represents the response of the {@link RESTGetAPIApplicationRoleConnectionMetadata | `GET /applications/(application.id)/role-connections/metadata`} endpoint.
 * @see https://discord.com/developers/docs/resources/application-role-connection-metadata#get-application-role-connection-metadata-records
 */
export type RESTGetAPIApplicationRoleConnectionMetadata = APIApplicationRoleConnectionMetadata[];

/**
 * Represents the response of the {@link RESTPutAPIApplicationRoleConnectionMetadata | `PUT /applications/(application.id)/role-connections/metadata`} endpoint.
 * @see https://discord.com/developers/docs/resources/application-role-connection-metadata#create-application-role-connection-metadata-record
 */
export type RESTPutAPIApplicationRoleConnectionMetadata = APIApplicationRoleConnectionMetadata[];

/**
 * Represents the JSON parameters of the {@link RESTPutAPIApplicationRoleConnectionMetadata | `PUT /applications/(application.id)/role-connections/metadata`} endpoint.
 * @see https://discord.com/developers/docs/resources/application-role-connection-metadata#update-application-role-connection-metadata-records
 */
export type RESTPutAPIApplicationRoleConnectionMetadataJSONParams = APIApplicationRoleConnectionMetadata[];
