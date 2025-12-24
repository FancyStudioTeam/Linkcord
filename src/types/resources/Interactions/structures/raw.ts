import type { Snowflake } from "#types/miscellaneous/discord.js";
import type { Locales } from "#types/miscellaneous/enums.js";
import type { ApplicationCommandType } from "#types/resources/ApplicationCommands/enums.js";
import type { APIChannel, APIPartialChannel } from "#types/resources/Channels/index.js";
import type { ComponentType } from "#types/resources/Components/enums.js";
import type {
	APIMessageComponents,
	APIModalComponents,
	APISelectMenuComponentType,
	APIStringSelectMenuOption,
} from "#types/resources/Components/index.js";
import type { APIEntitlement } from "#types/resources/Entitlements/index.js";
import type { APIGuildMember, GuildFeatures } from "#types/resources/Guilds/index.js";
import type {
	APIAllowedMentions,
	APIAttachment,
	APIAuthorizingIntegrationOwners,
	APIEmbed,
	APIMessage,
	APIPartialMessage,
} from "#types/resources/Messages/index.js";
import type { APIRole } from "#types/resources/Permissions/index.js";
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
	guild?: APIPartialInteractionGuild;
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
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-messages
 */
export interface APIMessageInteractionCallbackData {
	allowed_mentions?: APIAllowedMentions;
	components?: APIMessageComponents[];
	content?: string;
	embeds?: APIEmbed[];
	tts?: boolean;
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
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-resolved-data-structure
 */
export interface APIInteractionResolvedData {
	attachments?: Record<Snowflake, APIAttachment>;
	channels?: Record<Snowflake, APIPartialInteractionChannel>;
	members?: Record<Snowflake, APIPartialInteractionMember>;
	messages?: Record<Snowflake, APIPartialMessage>;
	roles?: Record<Snowflake, APIRole>;
	users?: Record<Snowflake, APIUser>;
}

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-message-component-data-structure
 */
export interface APIMessageComponentInteractionDataBase<Type extends ComponentType> {
	component_type: Type;
	custom_id: string;
	resolved?: APIInteractionResolvedData;
}

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-modal-submit-data-structure
 */
export interface APIModalSubmitInteractionData {
	components: APIModalComponents;
	custom_id: string;
	resolved?: APIInteractionResolvedData;
}

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-message-component-data-structure
 */
export interface APISelectMenuComponentInteractionData extends APIMessageComponentInteractionDataBase<APISelectMenuComponentType> {
	values: APIStringSelectMenuOption[];
}

/**
 * @see https://discord.com/developers/docs/resources/guild#guild-object-guild-structure
 */
export interface APIPartialInteractionGuild {
	features: GuildFeatures[];
	id: Snowflake;
	locale: Locales;
}

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure
 */
export type APIApplicationCommandInteraction = APIInteractionBase<InteractionType.ApplicationCommand, APIApplicationCommandInteractionData>;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-application-command-data-structure
 */
export type APIApplicationCommandInteractionData = APIContextApplicationCommandInteractionData;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-message-component-data-structure
 */
export type APIButtonComponentInteractionData = APIMessageComponentInteractionDataBase<ComponentType.Button>;

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
export type APIInteraction =
	| APIApplicationCommandInteraction
	| APIMessageComponentInteraction
	| APIModalSubmitInteraction
	| APIPingInteraction;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-data
 */
export type APIInteractionData = APIApplicationCommandInteractionData | APIMessageComponentInteractionData | APIModalSubmitInteractionData;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-application-command-data-structure
 */
export type APIMessageApplicationCommandInteractionData = APIContextApplicationCommandDataBase<ApplicationCommandType.Message>;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure
 */
export type APIMessageComponentInteraction = APIInteractionBase<InteractionType.MessageComponent, APIMessageComponentInteractionData>;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-message-component-data-structure
 */
export type APIMessageComponentInteractionData = APIButtonComponentInteractionData | APISelectMenuComponentInteractionData;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure
 */
export type APIModalSubmitInteraction = APIInteractionBase<InteractionType.ModalSubmit, APIModalSubmitInteractionData>;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-resolved-data-structure
 */
export type APIPartialInteractionChannel = Pick<
	APIChannel,
	// @ts-expect-error
	| "flags"
	| "guild_id"
	| "id"
	| "last_message_id"
	| "last_ping_timestamp"
	| "name"
	| "nsfw"
	| "parent_id"
	| "permissions"
	| "position"
	| "rate_limit_per_user"
	| "topic"
	| "type"
>;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-resolved-data-structure
 */
export type APIPartialInteractionMember = Omit<APIGuildMember, "deaf" | "mute" | "user">;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure
 */
export type APIPingInteraction = Omit<APIInteractionBase<InteractionType.Ping, never>, "locale">;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-application-command-data-structure
 */
export type APIUserApplicationCommandInteractionData = APIContextApplicationCommandDataBase<ApplicationCommandType.User>;
