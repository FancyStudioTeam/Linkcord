import type { Snowflake } from "../shared/discord.js";
import type { APIUser } from "./Users.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/emoji#emoji-object-emoji-structure
 */
export interface APIEmoji {
  animated?: boolean;
  available?: boolean;
  id: Snowflake | null;
  managed?: boolean;
  name: string | null;
  require_colons?: boolean;
  roles?: Snowflake[];
  user?: APIUser;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/emoji#emoji-object-emoji-structure
 */
export type APIPartialEmoji = Partial<Pick<APIEmoji, "animated" | "id" | "name">>;
