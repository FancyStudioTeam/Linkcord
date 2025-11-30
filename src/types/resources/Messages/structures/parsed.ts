import type { Message } from "#structures/Message.js";
import type { User } from "#structures/User.js";
import type { ISO8601Date, Snowflake } from "#types/miscellaneous/discord.js";
import type { ApplicationIntegrationType } from "#types/resources/Applications/enums.js";
import type { ChannelType } from "#types/resources/Channels/enums.js";
import type { PartialEmoji } from "#types/resources/Emojis/index.js";
import type { InteractionType } from "#types/resources/Interactions/enums.js";
import type {
	AllowedMentionType,
	AttachmentFlags,
	EmbedType,
	MessageActivityType,
	MessageReferenceType,
} from "../enums.js";

// TODO: Add `MessageSnapshot`

/**
 * @see https://discord.com/developers/docs/resources/message#allowed-mentions-object
 */
export interface AllowedMentions {
	parse?: AllowedMentionType[];
	repliedUser?: boolean;
	roles?: Snowflake[];
	users?: Snowflake[];
}

/**
 * @see https://discord.com/developers/docs/resources/message#attachment-object-attachment-structure
 */
export interface Attachment {
	contentType?: string;
	description?: string;
	durationSecs?: number;
	ephemeral?: boolean;
	filename: string;
	flags: AttachmentFlags;
	heigth?: number | null;
	id: Snowflake;
	proxyUrl: string;
	size: number;
	title?: string;
	url: string;
	waveform?: string;
	width?: number | null;
}

/**
 * @see https://discord.com/developers/docs/resources/message#message-interaction-metadata-object-application-command-interaction-metadata-structure
 */
export interface ApplicationCommandInteractionMetadata extends BaseMessageInteractionMetadata {
	targetUser?: User;
	targetMessageId?: Snowflake;
}

/**
 * @see https://discord.com/developers/docs/resources/message#message-interaction-metadata-object
 */
export interface BaseMessageInteractionMetadata {
	authorizing_integration_owners: AuthorizingIntegrationOwners;
	id: Snowflake;
	type: InteractionType;
	user: User;
}

/**
 * @see https://discord.com/developers/docs/resources/message#channel-mention-object-channel-mention-structure
 */
export interface ChannelMention {
	guildId: Snowflake;
	id: Snowflake;
	name: string;
	type: ChannelType;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-structure
 */
export interface Embed {
	author?: EmbedAuthor;
	color?: number;
	description?: string;
	fields?: EmbedField[];
	footer?: EmbedFooter;
	image?: EmbedImage;
	provider?: EmbedProvider;
	thumbnail?: EmbedThumbnail;
	timestamp?: ISO8601Date;
	title?: string;
	type?: EmbedType;
	url?: string;
	video?: EmbedVideo;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-author-structure
 */
export interface EmbedAuthor {
	iconURL?: string;
	name: string;
	url?: string;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-field-structure
 */
export interface EmbedField {
	inline?: boolean;
	name: string;
	value: string;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-footer-structure
 */
export interface EmbedFooter {
	iconURL?: string;
	text: string;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-image-structure
 */
export interface EmbedImage {
	url: string;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-provider-structure
 */
export interface EmbedProvider {
	name?: string;
	url?: string;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-thumbnail-structure
 */
export interface EmbedThumbnail {
	url: string;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-video-structure
 */
export interface EmbedVideo {
	url: string;
}

/**
 * @see https://discord.com/developers/docs/resources/message#message-object-message-activity-structure
 */
export interface MessageActivity {
	partyId?: string;
	type: MessageActivityType;
}

/**
 * @see https://discord.com/developers/docs/resources/message#message-call-object-message-call-object-structure
 */
export interface MessageCall {
	endedTimestamp?: ISO8601Date | null;
	participants: Snowflake[];
}

/**
 * @see https://discord.com/developers/docs/resources/message#message-interaction-metadata-object-message-component-interaction-metadata-structure
 */
export interface MessageComponentInteractionMetadata extends BaseMessageInteractionMetadata {
	interactedMessageId: Snowflake;
	originalResponseMessageId?: Snowflake;
}

/**
 * @see https://discord.com/developers/docs/resources/message#message-pin-object-message-pin-object-struture
 */
export interface MessagePin {
	message: Message;
	pinnedAt: ISO8601Date;
}

/**
 * @see https://discord.com/developers/docs/resources/message#message-reference-structure
 */
export interface MessageReference {
	channelId?: Snowflake;
	failIfNotExists?: boolean;
	guildId?: Snowflake;
	messageId?: Snowflake;
	type?: MessageReferenceType;
}

/**
 * @see https://discord.com/developers/docs/resources/message#message-interaction-metadata-object-modal-submit-interaction-metadata-structure
 */
export interface ModalSubmitInteractionMetadata extends BaseMessageInteractionMetadata {
	originalResponseMessageId?: Snowflake;
	triggeringInteractionMetadata: ApplicationCommandInteractionMetadata | MessageComponentInteractionMetadata;
}

/**
 * @see https://discord.com/developers/docs/resources/message#reaction-object-reaction-structure
 */
export interface Reaction {
	burstColors: string[];
	count: number;
	countDetails: ReactionCountDetails;
	emoji: PartialEmoji;
	me: boolean;
	meBurst: boolean;
}

/**
 * @see https://discord.com/developers/docs/resources/message#reaction-count-details-object-reaction-count-details-structure
 */
export interface ReactionCountDetails {
	burst: number;
	normal: number;
}

/**
 * @see https://discord.com/developers/docs/resources/message#role-subscription-data-object-role-subscription-data-object-structure
 */
export interface RoleSubscriptionData {
	isRenewal: boolean;
	roleSubscriptionListingId: Snowflake;
	tierName: string;
	totalMonthsSubscribed: number;
}

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-authorizing-integration-owners-object
 */
export type AuthorizingIntegrationOwners = {
	[Type in ApplicationIntegrationType]?: Snowflake;
};

/**
 * @see https://discord.com/developers/docs/resources/message#message-interaction-metadata-object
 */
export type MessageInteractionMetadata =
	| ApplicationCommandInteractionMetadata
	| MessageComponentInteractionMetadata
	| ModalSubmitInteractionMetadata;

/**
 * @see https://discord.com/developers/docs/resources/message#attachment-object-attachment-structure
 */
export type PartialAttachment = Partial<Attachment>;
