import type { Client } from "#client/Client.js";
import { METHOD_NOT_IMPLEMENTED } from "#errors/messages.js";
import { MonetizationTransformer } from "#structures/transformers/MonetizationTransformer.js";
import type {
	APIInteraction,
	InteractionContextTypes,
	InteractionTypes,
	JSONBaseInteraction,
	Locales,
	Snowflake,
} from "#types/index.js";
import type { Entitlement } from "../Entitlement.js";
import { Base } from "./Base.js";

/**
 * Represents a base class for all interactions.
 *
 * @internal
 */
export class BaseInteraction<InteractionType extends InteractionTypes> extends Base {
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
	readonly type: InteractionType;
	/**
	 * The version of the interaction.
	 */
	readonly version: 1;

	constructor(client: Client, data: APIInteraction, type: InteractionType) {
		super(client);

		const {
			application_id,
			attachment_size_limit,
			channel_id,
			context,
			entitlements,
			guild_id,
			guild_locale,
			locale,
			token,
			version,
		} = data;

		this.applicationId = application_id;
		this.attachmentSizeLimit = attachment_size_limit;
		this.channelId = channel_id ?? null;
		this.context = context ?? null;
		this.entitlements = MonetizationTransformer.transformEntitlementsMap(entitlements, client);
		this.locale = locale;
		this.guildId = guild_id ?? null;
		this.guildLocale = guild_locale ?? null;
		this.token = token;
		this.type = type;
		this.version = version;
	}

	/**
	 * @internal
	 */
	protected _patch(): void {
		throw new Error(METHOD_NOT_IMPLEMENTED());
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
			locale,
			token,
			type,
			version,
		});
	}
}
