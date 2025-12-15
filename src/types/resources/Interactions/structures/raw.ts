import type { Snowflake } from "#types/miscellaneous/discord.js";
import type { Locales } from "#types/miscellaneous/enums.js";
import type { ApplicationCommandType } from "#types/resources/ApplicationCommands/enums.js";
import type { APIPartialChannel } from "#types/resources/Channels/index.js";
import type { APIEntitlement } from "#types/resources/Entitlements/index.js";
import type { APIGuildMember, APIInteractionGuild } from "#types/resources/Guilds/index.js";
import type { APIAuthorizingIntegrationOwners, APIMessage } from "#types/resources/Messages/index.js";
import type { APIUser } from "#types/resources/Users/index.js";
import type { InteractionContextType, InteractionType } from "../enums.js";

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure
 */
export interface APIInteractionBase<Type extends InteractionType, Data> {
	app_permissions: string;
	application_id: Snowflake;
	attachment_size_limit: number;
	authorizing_integration_owners: APIAuthorizingIntegrationOwners;
	channel?: APIPartialChannel;
	channel_id?: Snowflake;
	context?: InteractionContextType;
	data?: Data;
	entitlements: APIEntitlement[];
	guild_id?: Snowflake;
	guild?: APIInteractionGuild;
	guild_locale?: Locales;
	id: Snowflake;
	locale: Locales;
	member?: APIGuildMember;
	message?: APIMessage;
	token: string;
	type: Type;
	user?: APIUser;
	version: 1;
}

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-application-command-data-structure
 */
export interface APIApplicationCommandInteractionDataBase<Type extends ApplicationCommandType> {
	guild_id?: Snowflake;
	id: Snowflake;
	name: string;
	type: Type;
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export interface APIContextApplicationCommandDataBase<Type extends APIContextApplicationCommandType>
	extends APIApplicationCommandInteractionDataBase<Type> {
	target_id: Snowflake;
}

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-application-command-data-structure
 */
export type APIApplicationCommandInteractionData = APIContextApplicationCommandInteractionData;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-application-command-data-structure
 */
export type APIContextApplicationCommandInteractionData =
	| APIMessageApplicationCommandInteractionData
	| APIUserApplicationCommandInteractionData;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-types
 */
export type APIContextApplicationCommandType = ApplicationCommandType.Message | ApplicationCommandType.User;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure
 */
export type APIInteraction = APIPingInteraction;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure
 */
export type APIPingInteraction = Omit<APIInteractionBase<InteractionType.Ping, never>, "locale">;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-application-command-data-structure
 */
export type APIMessageApplicationCommandInteractionData =
	APIContextApplicationCommandDataBase<ApplicationCommandType.Message>;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-application-command-data-structure
 */
export type APIUserApplicationCommandInteractionData =
	APIContextApplicationCommandDataBase<ApplicationCommandType.User>;
