import type { Snowflake } from "#types/miscellaneous/discord.js";
import type { OAuth2Scopes } from "#types/resources/OAuth2/enums.js";
import type { ActivityLocationKind, ApplicationIntegrationType } from "../enums.js";

/**
 * @see https://discord.com/developers/docs/resources/application#get-application-activity-instance-activity-location-object
 */
export interface ActivityLocation {
	channelId: Snowflake;
	guildId?: Snowflake | null;
	id: string;
	kind: ActivityLocationKind;
}

/**
 * @see https://discord.com/developers/docs/resources/application#install-params-object-install-params-structure
 */
export interface ApplicationInstallParams {
	permissions: string;
	scopes: OAuth2Scopes[];
}

/**
 * @see https://discord.com/developers/docs/resources/application#get-application-activity-instance-activity-instance-object
 */
export interface ApplicationInstance {
	applicationId: Snowflake;
	instanceId: string;
	launchId: string;
	location: ActivityLocation;
	users: Snowflake[];
}

/**
 * @see https://discord.com/developers/docs/resources/application#application-object-application-integration-type-configuration-object
 */
export interface ApplicationIntegrationTypeConfig {
	oauth2InstallParams?: ApplicationInstallParams;
}

/**
 * @see https://discord.com/developers/docs/resources/application#application-object-application-integration-type-configuration-object
 */
export type ApplicationIntegrationTypesConfig = {
	[Type in ApplicationIntegrationType]?: ApplicationIntegrationTypeConfig;
};
