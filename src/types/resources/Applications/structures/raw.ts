import type { Snowflake } from "#types/miscellaneous/discord.js";
import type { OAuth2Scopes } from "#types/resources/OAuth2/enums.js";
import type { APITeam } from "#types/resources/Teams/structures/raw.js";
import type { APIPartialUser } from "#types/resources/Users/index.js";
import type {
	ActivityLocationKind,
	ApplicationEventWebhookStatus,
	ApplicationEventWebhookType,
	ApplicationFlags,
	ApplicationIntegrationType,
} from "../enums.js";

/**
 * @see https://discord.com/developers/docs/resources/application#get-application-activity-instance-activity-location-object
 */
export interface APIActivityLocation {
	channel_id: Snowflake;
	guild_id?: Snowflake | null;
	id: string;
	kind: ActivityLocationKind;
}

/**
 * @see https://discord.com/developers/docs/resources/application#application-object-application-structure
 */
// TODO: Add "guild" to "APIApplication".
export interface APIApplication {
	approximate_guild_count?: number;
	approximate_user_authorization_count?: number;
	approximate_user_install_count?: number;
	bot?: APIPartialUser;
	bot_public: boolean;
	bot_require_code_grant: boolean;
	custom_install_url?: string;
	cover_image?: string;
	description: string;
	event_webhooks_status: ApplicationEventWebhookStatus;
	event_webhooks_types?: ApplicationEventWebhookType[];
	event_webhooks_url?: string | null;
	flags?: ApplicationFlags;
	guild_id?: Snowflake;
	icon: string | null;
	id: Snowflake;
	install_params?: APIApplicationInstallParams;
	integration_types_config: APIApplicationIntegrationTypesConfig;
	interactions_endpoint_url?: string | null;
	name: string;
	owner?: APIPartialUser;
	primary_sku_id?: Snowflake;
	privacy_policy_url?: string;
	redirect_uris?: string[];
	role_connections_verification_url?: string | null;
	rpc_origins?: string[];
	slug?: string;
	tags?: string[];
	team: APITeam | null;
	terms_of_service_url?: string;
	verify_key: string;
}

/**
 * @see https://discord.com/developers/docs/resources/application#install-params-object-install-params-structure
 */
export interface APIApplicationInstallParams {
	permissions: string;
	scopes: OAuth2Scopes[];
}

/**
 * @see https://discord.com/developers/docs/resources/application#get-application-activity-instance-activity-instance-object
 */
export interface APIApplicationInstance {
	application_id: Snowflake;
	instance_id: string;
	launch_id: string;
	location: APIActivityLocation;
	users: Snowflake[];
}

/**
 * @see https://discord.com/developers/docs/resources/application#application-object-application-integration-type-configuration-object
 */
export interface APIApplicationIntegrationTypeConfig {
	oauth2_install_params?: APIApplicationInstallParams;
}

/**
 * @see https://discord.com/developers/docs/events/gateway-events#ready-ready-event-fields
 */
export interface APIGatewayApplication {
	flags: ApplicationFlags;
	id: Snowflake;
}

/**
 * @see https://discord.com/developers/docs/resources/application#application-object-application-integration-type-configuration-object
 */
export type APIApplicationIntegrationTypesConfig = {
	[Type in ApplicationIntegrationType]?: APIApplicationIntegrationTypeConfig;
};
