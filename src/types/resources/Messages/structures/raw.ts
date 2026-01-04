import type { ISO8601Date, Snowflake } from '#types/miscellaneous/discord.js';
import type { ChannelType } from '#types/resources/Channels/enums.js';
import type { RawMessageComponents } from '#types/resources/Components/index.js';
import type { RawPartialEmoji } from '#types/resources/Emojis/index.js';
import type { InteractionType } from '#types/resources/Interactions/enums.js';
import type { RawAuthorizingIntegrationOwners, RawInteractionResolvedData } from '#types/resources/Interactions/index.js';
import type { RawPoll } from '#types/resources/Polls/index.js';
import type { RawStickerItem } from '#types/resources/Stickers/structures/raw.js';
import type { RawUser } from '#types/resources/Users/index.js';
import type {
	AllowedMentionType,
	AttachmentFlags,
	EmbedType,
	MessageActivityType,
	MessageFlags,
	MessageReferenceType,
	MessageType,
} from '../enums.js';

/**
 * @see https://discord.com/developers/docs/resources/message#allowed-mentions-object
 */
export interface RawAllowedMentions {
	parse?: AllowedMentionType[];
	replied_user?: boolean;
	roles?: Snowflake[];
	users?: Snowflake[];
}

/**
 * @see https://discord.com/developers/docs/resources/message#message-interaction-metadata-object-application-command-interaction-metadata-structure
 */
export interface RawApplicationCommandInteractionMetadata extends RawMessageInteractionMetadataBase {
	target_user?: RawUser;
	target_message_id?: Snowflake;
}

/**
 * @see https://discord.com/developers/docs/resources/message#attachment-object-attachment-structure
 */
export interface RawAttachment {
	content_type?: string;
	description?: string;
	duration_secs?: number;
	ephemeral?: boolean;
	filename: string;
	flags: AttachmentFlags;
	heigth?: number | null;
	id: Snowflake;
	proxy_url: string;
	size: number;
	title?: string;
	url: string;
	waveform?: string;
	width?: number | null;
}

/**
 * @see https://discord.com/developers/docs/resources/message#channel-mention-object-channel-mention-structure
 */
export interface RawChannelMention {
	guild_id: Snowflake;
	id: Snowflake;
	name: string;
	type: ChannelType;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-structure
 */
export interface RawEmbed {
	author?: RawEmbedAuthor;
	color?: number;
	description?: string;
	fields?: RawEmbedField[];
	footer?: RawEmbedFooter;
	image?: RawEmbedImage;
	provider?: RawEmbedProvider;
	thumbnail?: RawEmbedThumbnail;
	timestamp?: ISO8601Date;
	title?: string;
	type?: EmbedType;
	url?: string;
	video?: RawEmbedVideo;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-author-structure
 */
export interface RawEmbedAuthor {
	icon_url?: string;
	name: string;
	proxy_icon_url?: string;
	url?: string;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-field-structure
 */
export interface RawEmbedField {
	inline?: boolean;
	name: string;
	value: string;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-footer-structure
 */
export interface RawEmbedFooter {
	icon_url?: string;
	proxy_icon_url?: string;
	text: string;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-image-structure
 */
export interface RawEmbedImage {
	height?: number;
	proxy_url?: string;
	url: string;
	width?: number;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-provider-structure
 */
export interface RawEmbedProvider {
	name?: string;
	url?: string;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-thumbnail-structure
 */
export interface RawEmbedThumbnail {
	height?: number;
	proxy_url?: string;
	url: string;
	width?: number;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-video-structure
 */
export interface RawEmbedVideo {
	height?: number;
	proxy_url?: string;
	url?: string;
	width?: number;
}

/**
 * @see https://discord.com/developers/docs/resources/message#message-object-message-structure
 */
// TODO: Add 'application' and 'thread' to 'RawMessage'.
export interface RawMessage {
	activity?: RawMessageActivity;
	application_id?: Snowflake;
	attachments: RawAttachment[];
	author: RawUser;
	call?: RawMessageCall;
	channel_id: Snowflake;
	components: RawMessageComponents[];
	content: string;
	edited_timestamp: ISO8601Date | null;
	embeds: RawEmbed[];
	flags?: MessageFlags;
	id: Snowflake;
	interaction_metadata?: RawMessageInteractionMetadata;
	mention_channels?: RawChannelMention[];
	mention_everyone: boolean;
	message_reference?: RawMessageReference;
	message_snapshots?: RawMessageSnapshot[];
	mention_roles: Snowflake[];
	mentions: RawUser[];
	nonce?: number | string;
	pinned: boolean;
	position?: number;
	poll?: RawPoll;
	reactions?: RawReaction[];
	referenced_message?: RawMessage | null;
	resolved?: RawInteractionResolvedData;
	role_subscription_data?: RawRoleSubscriptionData;
	sticker_items?: RawStickerItem[];
	// thread?: RawThreadChannel;
	timestamp: ISO8601Date;
	tts: boolean;
	type: MessageType;
	webhook_id?: Snowflake;
}

/**
 * @see https://discord.com/developers/docs/resources/message#message-object-message-activity-structure
 */
export interface RawMessageActivity {
	party_id?: string;
	type: MessageActivityType;
}

/**
 * @see https://discord.com/developers/docs/resources/message#message-call-object-message-call-object-structure
 */
export interface RawMessageCall {
	ended_timestamp?: ISO8601Date | null;
	participants: Snowflake[];
}

/**
 * @see https://discord.com/developers/docs/resources/message#message-interaction-metadata-object-message-component-interaction-metadata-structure
 */
export interface RawMessageComponentInteractionMetadata extends RawMessageInteractionMetadataBase {
	interacted_message_id: Snowflake;
}

/**
 * @see https://discord.com/developers/docs/resources/message#message-interaction-metadata-object
 */
export interface RawMessageInteractionMetadataBase {
	authorizing_integration_owners: RawAuthorizingIntegrationOwners;
	id: Snowflake;
	original_response_message_id?: Snowflake;
	type: InteractionType;
	user: RawUser;
}

/**
 * @see https://discord.com/developers/docs/resources/message#message-pin-object-message-pin-object-struture
 */
export interface RawMessagePin {
	message: RawMessage;
	pinned_at: ISO8601Date;
}

/**
 * @see https://discord.com/developers/docs/resources/message#message-reference-structure
 */
export interface RawMessageReference {
	channel_id?: Snowflake;
	fail_if_not_exists?: boolean;
	guild_id?: Snowflake;
	message_id?: Snowflake;
	type?: MessageReferenceType;
}

/**
 * @see https://discord.com/developers/docs/resources/message#message-snapshot-structure
 */
export interface RawMessageSnapshot {
	message: RawMessageSnapshotMessage;
}

/**
 * @see https://discord.com/developers/docs/resources/message#message-snapshot-structure
 */
export type RawMessageSnapshotMessage = Pick<
	RawMessage,
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

/**
 * @see https://discord.com/developers/docs/resources/message#message-interaction-metadata-object-modal-submit-interaction-metadata-structure
 */
export interface RawModalSubmitInteractionMetadata extends RawMessageInteractionMetadataBase {
	triggering_interaction_metadata: RawApplicationCommandInteractionMetadata | RawMessageComponentInteractionMetadata;
}

/**
 * @see https://discord.com/developers/docs/resources/message#attachment-object-attachment-structure
 */
export interface RawPartialAttachment extends Omit<Partial<RawAttachment>, 'id'> {
	id: Snowflake;
}

/**
 * @see https://discord.com/developers/docs/resources/message#reaction-object-reaction-structure
 */
export interface RawReaction {
	burst_colors: string[];
	count: number;
	count_details: RawReactionCountDetails;
	emoji: RawPartialEmoji;
	me: boolean;
	me_burst: boolean;
}

/**
 * @see https://discord.com/developers/docs/resources/message#reaction-count-details-object-reaction-count-details-structure
 */
export interface RawReactionCountDetails {
	burst: number;
	normal: number;
}

/**
 * @see https://discord.com/developers/docs/resources/message#role-subscription-data-object-role-subscription-data-object-structure
 */
export interface RawRoleSubscriptionData {
	is_renewal: boolean;
	role_subscription_listing_id: Snowflake;
	tier_name: string;
	total_months_subscribed: number;
}

/**
 * @see https://discord.com/developers/docs/resources/message#message-interaction-metadata-object
 */
export type RawMessageInteractionMetadata =
	| RawApplicationCommandInteractionMetadata
	| RawMessageComponentInteractionMetadata
	| RawModalSubmitInteractionMetadata;
