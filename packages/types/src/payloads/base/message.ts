import type { Snowflake } from "#shared";
import type { APIAuthorizingIntegrationOwners, InteractionTypes } from "../interaction.js";
import type { APIUser } from "../user.js";

/**
 * @public
 */
export interface APIEmbedMediaContentBase {
  /**
   * @remarks
   * - This is not officially documented in the Discord API documentation,
   *   meaning it may change or break at any time.
   */
  flags?: number;
  height?: number;
  proxy_url?: string;
  url: string;
  width?: number;
}

/**
 * @public
 */
export interface APIMessageInteractionMetadataBase<Type extends InteractionTypes> {
  authorizing_integration_owners: APIAuthorizingIntegrationOwners;
  id: Snowflake;
  original_response_message_id?: Snowflake;
  type: Type;
  user: APIUser;
}
