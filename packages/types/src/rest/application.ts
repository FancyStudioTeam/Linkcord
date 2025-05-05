import type {
  APIActivityInstance,
  APIApplication,
  APIApplicationInstallParams,
  APIApplicationIntegrationTypesConfiguration,
  ApplicationEventWebhookStatus,
  ApplicationEventWebhookTypes,
} from "#payloads";
import type { ImageDataUri, Nullable } from "#shared";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/application#edit-current-application-json-params
 */
export interface RESTEditCurrentApplicationJSONParams {
  cover_image?: Nullable<ImageDataUri>;
  custom_install_url?: string;
  description?: string;
  event_webhooks_status?: ApplicationEventWebhookStatus;
  event_webhooks_types?: ApplicationEventWebhookTypes[];
  event_webhooks_url?: string;
  /**
   * @remarks
   * - This field is only limited to intent flags.
   */
  flags?: number;
  icon?: Nullable<ImageDataUri>;
  install_params?: APIApplicationInstallParams;
  integration_types_config?: APIApplicationIntegrationTypesConfiguration;
  /**
   * @remarks
   * - This field must include a valid endpoint url.
   */
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
