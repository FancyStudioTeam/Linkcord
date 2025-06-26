import type { Snowflake } from "../../shared/discord.js";
import type { APIAuthorizingIntegrationOwners, InteractionTypes } from "../Interactions.js";
import type { APIUser } from "../Users.js";

/**
 * @public
 */
export interface APIEmbedMediaContentBase {
  height?: number;
  proxy_url?: string;
  url: string;
  width?: number;

  /**
   * @undocumented
   */
  flags?: number;
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
