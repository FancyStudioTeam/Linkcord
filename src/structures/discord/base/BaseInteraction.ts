import type { Client } from "#client/Client.js";
import { MonetizationTransformer } from "#structures/transformers/MonetizationTransformer.js";
import type {
	APIInteraction,
	CreateInteractionResponseOptions,
	InteractionContextTypes,
	InteractionTypes,
	JSONBaseInteraction,
	Locales,
	Snowflake,
} from "#types/index.js";
import type { Entitlement } from "../Entitlement.js";
import { Base } from "./Base.js";

/**
 * Represents a base class for all interaction structures.
 *
 * @internal
 */
export class BaseInteraction extends Base {
	/**
	 * The ID of the application associated with the interaction.
	 */
	readonly applicationId: Snowflake;
	/**
	 * The attachment size limit of the interaction.
	 */
	readonly attachmentSizeLimit: number;
	/**
	 * The ID of the channel at which the interaction was sent, if any.
	 */
	readonly channelId: Snowflake | null;
	/**
	 * The context where the interaction was triggered.
	 */
	readonly context: InteractionContextTypes | null;
	/**
	 * The entitlements associated with the interaction.
	 */
	readonly entitlements: Map<Snowflake, Entitlement>;
	/**
	 * The ID of the guild at which the interaction was sent, if any.
	 */
	readonly guildId: Snowflake | null;
	/**
	 * The locale of the guild at which the interaction was sent, if any.
	 */
	readonly guildLocale: Locales | null;
	/**
	 * The ID of the interaction.
	 */
	readonly id: Snowflake;
	/**
	 * The chosen locale of the user that triggered the interaction.
	 */
	readonly locale: Locales;
	/**
	 * The token of the interaction.
	 */
	readonly token: string;
	/**
	 * The type of the interaction.
	 */
	readonly type: InteractionTypes;
	/**
	 * The version of the interaction.
	 */
	readonly version: 1;

	/**
	 * Creates a new {@link BaseInteraction | `BaseInteraction`} instance.
	 *
	 * @param client - The client that instantiated the interaction.
	 * @param data - The raw Discord API interaction data.
	 * @param type - The type of the interaction.
	 */
	constructor(client: Client, data: APIInteraction, type: InteractionTypes) {
		super(client);

		const {
			application_id,
			attachment_size_limit,
			channel_id,
			context,
			entitlements,
			guild_id,
			guild_locale,
			id,
			locale,
			token,
			version,
		} = data;

		this.applicationId = application_id;
		this.attachmentSizeLimit = attachment_size_limit;
		this.channelId = channel_id ?? null;
		this.context = context ?? null;
		this.entitlements = MonetizationTransformer.transformEntitlementsMap(entitlements, client);
		this.guildId = guild_id ?? null;
		this.guildLocale = guild_locale ?? null;
		this.id = id;
		this.locale = locale;
		this.token = token;
		this.type = type;
		this.version = version;
	}

	/**
	 * @internal
	 */
	protected _patch(): void {
		undefined;
	}

	/**
	 * Creates an interaction response.
	 *
	 * @param options - The options to use when creating the interaction
	 * response.
	 *
	 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#create-interaction-response
	 */
	async createInteractionResponse(options: CreateInteractionResponseOptions): Promise<void> {
		const { id, token } = this;

		return void (await super._api.postInteractionResponse(id, token, options));
	}

	/**
	 * Converts the {@link BaseInteraction | `BaseInteraction`} instance to a
	 * JSON object.
	 *
	 * @returns The JSON interaction data.
	 */
	toJSON(): JSONBaseInteraction {
		const {
			applicationId,
			attachmentSizeLimit,
			channelId,
			context,
			entitlements,
			guildId,
			guildLocale,
			id,
			locale,
			token,
			type,
			version,
		} = this;

		return Object.freeze({
			applicationId,
			attachmentSizeLimit,
			channelId,
			context,
			entitlements,
			guildId,
			guildLocale,
			id,
			locale,
			token,
			type,
			version,
		});
	}
}
