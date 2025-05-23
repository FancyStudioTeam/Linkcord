import type { APIPartialChannel } from "../channel.js";
import type { ComponentTypes } from "../component.js";
import type { APIEntitlement } from "../entitlement.js";
import type { APIGuildMember, APIPartialGuild } from "../guild.js";
import type { APIAuthorizingIntegrationOwners, InteractionContextTypes, InteractionTypes } from "../interaction.js";
import type { APIMessage } from "../message.js";
import type { Locale, Snowflake } from "../shared/discord.js";
import type { APIUser } from "../user.js";

/**
 * @public
 */
export interface APIInteractionBase<Type extends InteractionTypes, Data> {
  /**
   * @remarks
   * - Includes `ATTACH_FILES`, `EMBED_LINKS` and `MENTION_EVERYONE` for DMs.
   * - Additionally may include `USE_EXTERNAL_EMOJIS` for DMs with application
   *   bot user.
   */
  app_permissions?: string;
  application_id: Snowflake;
  attachment_size_limit: number;
  authorizing_integration_owners: APIAuthorizingIntegrationOwners;
  channel?: APIPartialChannel;
  channel_id?: Snowflake;
  context?: InteractionContextTypes;
  /**
   * @remarks
   * - This field is always present on application command, message component
   *   and modal submit interactions.
   */
  data?: Data;
  entitlements: APIEntitlement[];
  guild?: APIPartialGuild;
  guild_id?: Snowflake;
  guild_locale?: Locale;
  id: Snowflake;
  locale: Locale;
  /**
   * @remarks
   * - This field is only present when the interaction was sent in a guild.
   */
  member?: APIGuildMember;
  message?: APIMessage;
  token: string;
  type: Type;
  /**
   * @remarks
   * - This field is only present when the interaction was sent in a DM.
   */
  user?: APIUser;
  version: 1;
}

/**
 * @public
 */
export interface APIMessageComponentInteractionDataBase<Type extends ComponentTypes> {
  component_type: Type;
  custom_id: string;
  id?: number;
}

/**
 * @public
 */
export interface APIMessageComponentSelectInteractionDataBase<Type extends AnySelectMenu>
  extends APIMessageComponentInteractionDataBase<Type> {
  values: string[];
}

/**
 * @public
 */
export type AnySelectMenu =
  | ComponentTypes.ChannelSelect
  | ComponentTypes.MentionableSelect
  | ComponentTypes.RoleSelect
  | ComponentTypes.StringSelect
  | ComponentTypes.UserSelect;
