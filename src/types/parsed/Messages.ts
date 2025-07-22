import type { Message } from "#structures/discord/Message.js";
import type { PollAnswer } from "#structures/discord/PollAnswer.js";
import type { ISO8601Date, MessageActivityTypes, Snowflake } from "#types/discord/index.js";
import type { JSONProperties } from "#utils/types.js";

/**
 * @public
 */
export interface Embed {
	author?: EmbedAuthor;
	color?: number;
	description?: string;
	fields?: EmbedField;
	url?: string;
	footer?: EmbedFooter;
	image?: EmbedImage;
	thumbnail?: EmbedThumbnail;
	timestamp?: string;
	title?: string;
}

/**
 * @public
 */
export interface EmbedAuthor {
	iconURL?: string;
	name: string;
	url?: string;
}

/**
 * @public
 */
export interface EmbedField {
	inline?: boolean;
	name: string;
	value: string;
}

/**
 * @public
 */
export interface EmbedFooter {
	iconURL?: string;
	text: string;
}

/**
 * @public
 */
export interface EmbedImage {
	url: string;
}

/**
 * @public
 */
export interface EmbedThumbnail {
	url: string;
}

/**
 * Represents a Discord message activity.
 *
 * @public
 */
export interface MessageActivity {
	/**
	 * The ID of the party associated with the activity, if any.
	 */
	partyId: string | null;
	/**
	 * The type of the activity.
	 */
	type: MessageActivityTypes;
}

/**
 * Represents a Discord message call.
 *
 * @public
 */
export interface MessageCall {
	/**
	 * The timestamp at which the call ended.
	 */
	endedTimestamp: ISO8601Date | null;
	/**
	 * The IDs of the users that participated in the call.
	 */
	participants: Snowflake[];
}

/**
 * @public
 */
export type JSONMessage<InGuild extends boolean = boolean> = JSONProperties<
	typeof Message<InGuild>
>;

/**
 * @public
 */
export type JSONPollAnswer = JSONProperties<typeof PollAnswer>;
