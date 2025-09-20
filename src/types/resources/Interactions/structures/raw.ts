import type { Snowflake } from "#types/miscellaneous/discord.js";
import type { Locales } from "#types/miscellaneous/enums.js";
import type { APIUser } from "#types/resources/Users/index.js";
import type { InteractionContextTypes, InteractionTypes } from "../enums.js";

/**
 * Represents the base structure of an interaction.
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure
 */
export interface APIBaseInteraction<Type extends InteractionTypes> {
	/** The ID of the application that the interaction is for. */
	application_id: Snowflake;
	/** The size limit of attachments in the interaction. */
	attachment_size_limit: number;
	/** The ID of the channel where the interaction was sent. */
	channel_id: Snowflake;
	/** THe context of the interaction. */
	context?: InteractionContextTypes;
	/** The ID of the guild where the interaction was sent. */
	guild_id?: Snowflake;
	/** The preferred locale of the guild in the interaction. */
	guild_locale?: Locales;
	/** The ID of the interaction. */
	id: Snowflake;
	/** The token of the interaction. */
	token: string;
	/** The type of the interaction. */
	type: Type;
	/** The user that triggered the interaction. */
	user: APIUser;
	/** The version of the interaction. */
	version: 1;
}
