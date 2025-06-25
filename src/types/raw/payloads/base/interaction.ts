import type { Locale, Snowflake } from "../../shared/discord.js";
import type { APIPartialChannel } from "../Channels.js";
import type { ComponentTypes } from "../Components.js";
import type { APIEntitlement } from "../Entitlements.js";
import type { APIGuildMember, APIPartialGuild } from "../Guilds.js";
import type { APIAuthorizingIntegrationOwners, InteractionContextTypes, InteractionTypes } from "../Interactions.js";
import type { APIMessage } from "../Messages.js";
import type { APIUser } from "../Users.js";

/**
 * @public
 */
export interface APIInteractionBase<Type extends InteractionTypes, Data> {
  app_permissions?: string;
  application_id: Snowflake;
  attachment_size_limit: number;
  authorizing_integration_owners: APIAuthorizingIntegrationOwners;
  channel?: APIPartialChannel;
  channel_id?: Snowflake;
  context?: InteractionContextTypes;
  data?: Data;
  entitlements: APIEntitlement[];
  guild?: APIPartialGuild;
  guild_id?: Snowflake;
  guild_locale?: Locale;
  id: Snowflake;
  locale: Locale;
  member?: APIGuildMember;
  message?: APIMessage;
  token: string;
  type: Type;
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
 * @internal
 */
type AnySelectMenu =
  | ComponentTypes.ChannelSelect
  | ComponentTypes.MentionableSelect
  | ComponentTypes.RoleSelect
  | ComponentTypes.StringSelect
  | ComponentTypes.UserSelect;
