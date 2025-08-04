import type { Client } from "#client/index.js";
import {
	INTERACTION_ALREADY_REPLIED_OR_DEFERRED,
	MISSING_REQUIRED_FIELD_FROM_DATA,
} from "#errors/messages.js";
import {
	type APIApplicationCommandInteraction,
	type ApplicationCommandTypes,
	type CreateModalOptions,
	InteractionCallbackTypes,
	InteractionTypes,
	type Snowflake,
} from "#types/index.js";
import { BaseInteraction } from "./BaseInteraction.js";

/**
 * The base class for all command interaction structures.
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure
 * @public
 */
export class BaseCommandInteraction<
	CommandType extends ApplicationCommandTypes = ApplicationCommandTypes,
> extends BaseInteraction {
	/**
	 * The ID of the guild at which the application command was executed, if
	 * any.
	 */
	readonly commandGuildId: Snowflake | null;
	/**
	 * The ID of the application command.
	 */
	readonly commandId: Snowflake;
	/**
	 * The name of the application command.
	 */
	readonly commandName: string;
	/**
	 * The type of the application command.
	 */
	readonly commandType: CommandType;
	/**
	 * Whether the interaction was deferred.
	 */
	deferred: boolean;
	/**
	 * Whether the interaction was already replied.
	 */
	replied: boolean;

	/**
	 * Creates a new {@link BaseCommandInteraction | `BaseCommandInteraction`}
	 * instance.
	 * @param client - The client that instantiated the interaction.
	 * @param data - The
	 * {@link APIApplicationCommandInteraction | `APIApplicationCommandInteraction`}
	 * object.
	 * @param type - The type of the application command interaction.
	 */
	constructor(client: Client, data: APIApplicationCommandInteraction, type: CommandType) {
		super(client, data, InteractionTypes.ApplicationCommand);

		const { data: _data } = data;

		if (!_data) {
			throw new TypeError(
				MISSING_REQUIRED_FIELD_FROM_DATA("data", "APIApplicationCommandInteraction"),
			);
		}

		const { guild_id, id, name } = _data;

		this.commandGuildId = guild_id ?? null;
		this.commandId = id;
		this.commandName = name;
		this.commandType = type;
		this.deferred = false;
		this.replied = false;
	}

	/**
	 * Creates a modal interaction response.
	 * @param options - The options to use when creating the modal interaction
	 * response.
	 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#create-interaction-response
	 */
	async createModal(options: CreateModalOptions): Promise<void> {
		const { deferred, id, replied, token } = this;

		if (deferred || replied) {
			throw new Error(INTERACTION_ALREADY_REPLIED_OR_DEFERRED());
		}

		this.replied = true;

		return await super._api.postInteractionResponse(id, token, {
			data: options,
			type: InteractionCallbackTypes.Modal,
		});
	}

	/**
	 * Defers the reply to the interaction.
	 * @param flags - The flags to use when deferring the reply.
	 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#create-interaction-response
	 */
	async deferReply(flags?: number): Promise<void> {
		const { deferred, id, token } = this;

		if (deferred) {
			throw new Error(INTERACTION_ALREADY_REPLIED_OR_DEFERRED());
		}

		this.deferred = true;

		return await super._api.postInteractionResponse(id, token, {
			data: {
				flags,
			},
			type: InteractionCallbackTypes.DeferredChannelMessageWithSource,
		});
	}
}
