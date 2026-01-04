import type { Message } from '#structures/Message.js';
import type { User } from '#structures/User.js';
import type { ISO8601Date, Snowflake } from '#types/miscellaneous/discord.js';
import type { ChannelType } from '#types/resources/Channels/enums.js';
import type { PartialEmoji } from '#types/resources/Emojis/index.js';
import type { InteractionType } from '#types/resources/Interactions/enums.js';
import type { AuthorizingIntegrationOwners } from '#types/resources/Interactions/index.js';
import type { AllowedMentionType, AttachmentFlags, EmbedType, MessageActivityType, MessageReferenceType } from '../enums.js';

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
 * @see https://discord.com/developers/docs/resources/message#message-interaction-metadata-object-application-command-interaction-metadata-structure
 */
export interface ApplicationCommandInteractionMetadata extends MessageInteractionMetadataBase {
	targetUser?: User;
	targetMessageId?: Snowflake;
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
	iconUrl?: string;
	name: string;
	proxyIconUrl?: string;
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
	iconUrl?: string;
	proxyIconUrl?: string;
	text: string;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-image-structure
 */
export interface EmbedImage {
	height?: number;
	proxyUrl?: string;
	url: string;
	width?: number;
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
	height?: number;
	proxyUrl?: string;
	url: string;
	width?: number;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-video-structure
 */
export interface EmbedVideo {
	height?: number;
	proxyUrl?: string;
	url?: string;
	width?: number;
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
export interface MessageComponentInteractionMetadata extends MessageInteractionMetadataBase {
	interactedMessageId: Snowflake;
}

/**
 * @see https://discord.com/developers/docs/resources/message#message-interaction-metadata-object
 */
export interface MessageInteractionMetadataBase {
	authorizingIntegrationOwners: AuthorizingIntegrationOwners;
	id: Snowflake;
	originalResponseMessageId?: Snowflake;
	type: InteractionType;
	user: User;
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
 * @see https://discord.com/developers/docs/resources/message#message-snapshot-structure
 */
export interface MessageSnapshot {
	message: MessageSnapshotMessage;
}

/**
 * @see https://discord.com/developers/docs/resources/message#message-interaction-metadata-object-modal-submit-interaction-metadata-structure
 */
export interface ModalSubmitInteractionMetadata extends MessageInteractionMetadataBase {
	triggeringInteractionMetadata: ApplicationCommandInteractionMetadata | MessageComponentInteractionMetadata;
}

/**
 * @see https://discord.com/developers/docs/resources/message#attachment-object-attachment-structure
 */
export interface PartialAttachment extends Omit<Partial<Attachment>, 'id'> {
	id: Snowflake;
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
 * @see https://discord.com/developers/docs/resources/message#message-interaction-metadata-object
 */
export type MessageInteractionMetadata =
	| ApplicationCommandInteractionMetadata
	| MessageComponentInteractionMetadata
	| ModalSubmitInteractionMetadata;

/**
 * @see https://discord.com/developers/docs/resources/message#message-snapshot-structure
 */
export type MessageSnapshotMessage = Pick<
	Message,
	// @ts-expect-error
	| 'attachments'
	| 'components'
	| 'content'
	| 'edited_timestamp'
	| 'embeds'
	| 'flags'
	| 'mention_roles'
	| 'mentions'
	| 'sticker_items'
	| 'timestamp'
	| 'type'
>;
