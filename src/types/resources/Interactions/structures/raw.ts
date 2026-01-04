import type { Snowflake } from '#types/miscellaneous/discord.js';
import type { Locales } from '#types/miscellaneous/enums.js';
import type { ApplicationCommandType } from '#types/resources/ApplicationCommands/enums.js';
import type { APIChannel, APIPartialChannel } from '#types/resources/Channels/index.js';
import type { ComponentType } from '#types/resources/Components/enums.js';
import type {
	RawChannelSelectInteractionResponse,
	RawFileUploadInteractionResponse,
	RawMentionableSelectInteractionResponse,
	RawRoleSelectInteractionResponse,
	RawSelectMenuComponentType,
	RawStringSelectInteractionResponse,
	RawStringSelectMenuOption,
	RawTextDisplayInteractionResponse,
	RawTextInputInteractionResponse,
	RawUserSelectInteractionResponse,
} from '#types/resources/Components/index.js';
import type { APIEntitlement } from '#types/resources/Entitlements/index.js';
import type { APIGuildMember, GuildFeatures } from '#types/resources/Guilds/index.js';
import type { APIAttachment, APIAuthorizingIntegrationOwners, APIMessage, APIPartialMessage } from '#types/resources/Messages/index.js';
import type { RawRole } from '#types/resources/Permissions/index.js';
import type { RawUser } from '#types/resources/Users/index.js';
import type { InteractionContextType, InteractionType } from '../enums.js';

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure
 */
export interface RawInteractionBase<Type extends InteractionType, Data extends RawInteractionData> {
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
	guild?: RawPartialInteractionGuild;
	guild_locale?: Locales;
	id: Snowflake;
	locale: Locales;
	member?: APIGuildMember;
	message?: APIMessage;
	token: string;
	type: Type;
	user?: RawUser;
	version: 1;
}

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-callback-interaction-callback-object
 */
export interface RawInteractionCallback {
	id: Snowflake;
	type: InteractionType;
}

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-callback-interaction-callback-response-object
 */
export interface RawInteractionCallbackResponse {
	interaction: RawInteractionCallback;
}

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-application-command-data-structure
 */
export interface RawApplicationCommandInteractionDataBase<Type extends ApplicationCommandType> {
	guild_id?: Snowflake;
	id: Snowflake;
	name: string;
	resolved?: RawInteractionResolvedData;
	type: Type;
}

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-application-command-data-structure
 */
export interface RawContextApplicationCommandDataBase<Type extends RawContextApplicationCommandType>
	extends RawApplicationCommandInteractionDataBase<Type> {
	target_id: Snowflake;
}

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-resolved-data-structure
 */
export interface RawInteractionResolvedData {
	attachments?: Record<Snowflake, APIAttachment>;
	channels?: Record<Snowflake, RawPartialInteractionChannel>;
	members?: Record<Snowflake, RawPartialInteractionMember>;
	messages?: Record<Snowflake, APIPartialMessage>;
	roles?: Record<Snowflake, RawRole>;
	users?: Record<Snowflake, RawUser>;
}

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-message-component-data-structure
 */
export interface RawMessageComponentInteractionDataBase<Type extends ComponentType> {
	component_type: Type;
	custom_id: string;
	resolved?: RawInteractionResolvedData;
}

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-modal-submit-data-structure
 */
export interface RawModalSubmitInteractionData {
	components: RawModalSubmitComponentInteractionResponse[];
	custom_id: string;
	resolved?: RawInteractionResolvedData;
}

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-message-component-data-structure
 */
export interface RawSelectMenuComponentInteractionData extends RawMessageComponentInteractionDataBase<RawSelectMenuComponentType> {
	values: RawStringSelectMenuOption[];
}

/**
 * @see https://discord.com/developers/docs/resources/guild#guild-object-guild-structure
 */
export interface RawPartialInteractionGuild {
	features: GuildFeatures[];
	id: Snowflake;
	locale: Locales;
}

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure
 */
export type RawApplicationCommandInteraction = RawChatInputApplicationCommandInteraction | RawContextApplicationCommandInteraction;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-application-command-data-structure
 */
export type RawApplicationCommandInteractionData =
	| RawChatInputApplicationCommandInteractionData
	| RawContextApplicationCommandInteractionData;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-message-component-data-structure
 */
export type RawButtonComponentInteractionData = RawMessageComponentInteractionDataBase<ComponentType.Button>;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure
 */
export type RawChatInputApplicationCommandInteraction = RawInteractionBase<
	InteractionType.ApplicationCommand,
	RawChatInputApplicationCommandInteractionData
>;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-application-command-data-structure
 */
export type RawChatInputApplicationCommandInteractionData = RawApplicationCommandInteractionDataBase<ApplicationCommandType.ChatInput>;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure
 */
export type RawContextApplicationCommandInteraction = RawMessageApplicationCommandInteraction | RawUserApplicationCommandInteraction;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-application-command-data-structure
 */
export type RawContextApplicationCommandInteractionData =
	| RawMessageApplicationCommandInteractionData
	| RawUserApplicationCommandInteractionData;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-types
 */
export type RawContextApplicationCommandType = ApplicationCommandType.Message | ApplicationCommandType.User;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure
 */
export type RawInteraction =
	| RawApplicationCommandInteraction
	| RawMessageComponentInteraction
	| RawModalSubmitInteraction
	| RawPingInteraction;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-data
 */
export type RawInteractionData = RawApplicationCommandInteractionData | RawMessageComponentInteractionData | RawModalSubmitInteractionData;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure
 */
export type RawMessageApplicationCommandInteraction = RawInteractionBase<
	InteractionType.ApplicationCommand,
	RawMessageApplicationCommandInteractionData
>;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-application-command-data-structure
 */
export type RawMessageApplicationCommandInteractionData = RawContextApplicationCommandDataBase<ApplicationCommandType.Message>;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure
 */
export type RawMessageComponentInteraction = RawInteractionBase<InteractionType.MessageComponent, RawMessageComponentInteractionData>;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-message-component-data-structure
 */
export type RawMessageComponentInteractionData = RawButtonComponentInteractionData | RawSelectMenuComponentInteractionData;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure
 */
export type RawModalSubmitInteraction = RawInteractionBase<InteractionType.ModalSubmit, RawModalSubmitInteractionData>;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-component-interaction-response-structures
 */
export type RawModalSubmitComponentInteractionResponse =
	| RawChannelSelectInteractionResponse
	| RawFileUploadInteractionResponse
	| RawMentionableSelectInteractionResponse
	| RawRoleSelectInteractionResponse
	| RawStringSelectInteractionResponse
	| RawTextDisplayInteractionResponse
	| RawTextInputInteractionResponse
	| RawUserSelectInteractionResponse;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-resolved-data-structure
 */
export type RawPartialInteractionChannel = Pick<
	APIChannel,
	// @ts-expect-error
	| 'flags'
	| 'guild_id'
	| 'id'
	| 'last_message_id'
	| 'last_ping_timestamp'
	| 'name'
	| 'nsfw'
	| 'parent_id'
	| 'permissions'
	| 'position'
	| 'rate_limit_per_user'
	| 'topic'
	| 'type'
>;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-resolved-data-structure
 */
export type RawPartialInteractionMember = Omit<APIGuildMember, 'deaf' | 'mute' | 'user'>;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure
 */
export type RawPingInteraction = Omit<RawInteractionBase<InteractionType.Ping, never>, 'data' | 'locale'>;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure
 */
export type RawUserApplicationCommandInteraction = RawInteractionBase<
	InteractionType.ApplicationCommand,
	RawUserApplicationCommandInteractionData
>;

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-application-command-data-structure
 */
export type RawUserApplicationCommandInteractionData = RawContextApplicationCommandDataBase<ApplicationCommandType.User>;
