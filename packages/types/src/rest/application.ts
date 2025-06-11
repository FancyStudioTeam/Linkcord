import type {
  APIActivityInstance,
  APIApplication,
  APIApplicationInstallParams,
  APIApplicationIntegrationTypesConfiguration,
  ApplicationEventWebhookStatus,
  ApplicationEventWebhookTypes,
} from "../payloads/application.js";
import type { ImageDataUri } from "../shared/discord.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/application#edit-current-application-json-params
 */
export interface RESTEditCurrentApplicationJSONParams {
  cover_image?: ImageDataUri | null;
  custom_install_url?: string;
  description?: string;
  event_webhooks_status?: ApplicationEventWebhookStatus;
  event_webhooks_types?: ApplicationEventWebhookTypes[];
  event_webhooks_url?: string;
  flags?: number;
  icon?: ImageDataUri | null;
  install_params?: APIApplicationInstallParams;
  integration_types_config?: APIApplicationIntegrationTypesConfiguration;
  interactions_endpoint_url?: string;
  role_connections_verification_url?: string;
  tags?: string[];
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/application#edit-current-application
 */
export type RESTEditCurrentApplication = APIApplication;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/application#get-application-activity-instance
 */
export type RESTGetApplicationActivityInstance = APIActivityInstance;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/application#get-current-application
 */
export type RESTGetCurrentApplication = APIApplication;
