import type { ISO8601Date, Snowflake } from "#types/miscellaneous/discord.js";
import type { ApplicationIntegrationType } from "#types/resources/Applications/enums.js";
import type { ChannelType } from "#types/resources/Channels/enums.js";
import type { APIMessageComponent } from "#types/resources/Components/index.js";
import type { APIPartialEmoji } from "#types/resources/Emojis/index.js";
import type { InteractionType } from "#types/resources/Interactions/enums.js";
import type { APIPoll } from "#types/resources/Polls/index.js";
import type { APIUser } from "#types/resources/Users/index.js";
import type {
	AllowedMentionType,
	AttachmentFlags,
	EmbedType,
	MessageActivityType,
	MessageFlags,
	MessageReferenceType,
	MessageType,
} from "../enums.js";

/**
 * @see https://discord.com/developers/docs/resources/message#allowed-mentions-object
 */
export interface APIAllowedMentions {
	parse?: AllowedMentionType[];
	replied_user?: boolean;
	roles?: Snowflake[];
	users?: Snowflake[];
}

/**
 * @see https://discord.com/developers/docs/resources/message#message-interaction-metadata-object-application-command-interaction-metadata-structure
 */
export interface APIApplicationCommandInteractionMetadata extends APIBaseMessageInteractionMetadata {
	target_user?: APIUser;
	target_message_id?: Snowflake;
}

/**
 * @see https://discord.com/developers/docs/resources/message#attachment-object-attachment-structure
 */
export interface APIAttachment {
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
 * @see https://discord.com/developers/docs/resources/message#message-interaction-metadata-object
 */
export interface APIBaseMessageInteractionMetadata {
	authorizing_integration_owners: APIAuthorizingIntegrationOwners;
	id: Snowflake;
	type: InteractionType;
	user: APIUser;
}

/**
 * @see https://discord.com/developers/docs/resources/message#channel-mention-object-channel-mention-structure
 */
export interface APIChannelMention {
	guild_id: Snowflake;
	id: Snowflake;
	name: string;
	type: ChannelType;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-structure
 */
export interface APIEmbed {
	author?: APIEmbedAuthor;
	color?: number;
	description?: string;
	fields?: APIEmbedField[];
	footer?: APIEmbedFooter;
	image?: APIEmbedImage;
	provider?: APIEmbedProvider;
	thumbnail?: APIEmbedThumbnail;
	timestamp?: ISO8601Date;
	title?: string;
	type?: EmbedType;
	url?: string;
	video?: APIEmbedVideo;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-author-structure
 */
export interface APIEmbedAuthor {
	icon_url?: string;
	name: string;
	proxy_icon_url?: string;
	url?: string;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-field-structure
 */
export interface APIEmbedField {
	inline?: boolean;
	name: string;
	value: string;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-footer-structure
 */
export interface APIEmbedFooter {
	icon_url?: string;
	proxy_icon_url?: string;
	text: string;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-image-structure
 */
export interface APIEmbedImage {
	height?: number;
	proxy_url?: string;
	url: string;
	width?: number;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-provider-structure
 */
export interface APIEmbedProvider {
	name?: string;
	url?: string;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-thumbnail-structure
 */
export interface APIEmbedThumbnail {
	height?: number;
	proxy_url?: string;
	url: string;
	width?: number;
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-video-structure
 */
export interface APIEmbedVideo {
	height?: number;
	proxy_url?: string;
	url: string;
	width?: number;
}

/**
 * @see https://discord.com/developers/docs/resources/message#message-object-message-structure
 */
// TODO: Add "resolved", "sticker_items" and "thread" to "APIMessage".
export interface APIMessage {
	activity?: APIMessageActivity;
	application_id?: Snowflake;
	attachments: APIAttachment[];
	author: APIUser;
	call?: APIMessageCall;
	channel_id: Snowflake;
	components: APIMessageComponent[];
	content: string;
	edited_timestamp: ISO8601Date | null;
	embeds: APIEmbed[];
	flags?: MessageFlags;
	id: Snowflake;
	interaction_metadata?: APIMessageInteractionMetadata;
	mention_channels?: APIChannelMention[];
	mention_everyone: boolean;
	message_reference?: APIMessageReference;
	mention_roles: Snowflake[];
	mentions: APIUser[];
	nonce?: number | string;
	pinned: boolean;
	position?: number;
	poll?: APIPoll;
	reactions?: APIReaction[];
	referenced_message?: APIMessage | null;
	// resolved?: APIResolved;
	role_subscription_data?: APIRoleSubscriptionData;
	// sticker_items?: APIStickerItem[];
	// thread?: APIThreadChannel;
	timestamp: ISO8601Date;
	tts: boolean;
	type: MessageType;
	webhook_id?: Snowflake;
}

/**
 * @see https://discord.com/developers/docs/resources/message#message-object-message-activity-structure
 */
export interface APIMessageActivity {
	party_id?: string;
	type: MessageActivityType;
}

/**
 * @see https://discord.com/developers/docs/resources/message#message-call-object-message-call-object-structure
 */
export interface APIMessageCall {
	ended_timestamp?: ISO8601Date | null;
	participants: Snowflake[];
}

/**
 * @see https://discord.com/developers/docs/resources/message#message-interaction-metadata-object-message-component-interaction-metadata-structure
 */
export interface APIMessageComponentInteractionMetadata extends APIBaseMessageInteractionMetadata {
	interacted_message_id: Snowflake;
	original_response_message_id?: Snowflake;
}

/**
 * @see https://discord.com/developers/docs/resources/message#message-pin-object-message-pin-object-struture
 */
export interface APIMessagePin {
	message: APIMessage;
	pinned_at: ISO8601Date;
}

/**
 * @see https://discord.com/developers/docs/resources/message#message-reference-structure
 */
export interface APIMessageReference {
	channel_id?: Snowflake;
	fail_if_not_exists?: boolean;
	guild_id?: Snowflake;
	message_id?: Snowflake;
	type?: MessageReferenceType;
}

/**
 * @see https://discord.com/developers/docs/resources/message#message-snapshot-structure
 */
export interface APIMessageSnapshot {
	message: Pick<
		APIMessage,
		| "attachments"
		| "components"
		| "content"
		| "edited_timestamp"
		| "embeds"
		| "flags"
		| "mention_roles"
		| "mentions"
		| "sticker_items"
		| "timestamp"
		| "type"
	>;
}

/**
 * @see https://discord.com/developers/docs/resources/message#message-interaction-metadata-object-modal-submit-interaction-metadata-structure
 */
export interface APIModalSubmitInteractionMetadata extends APIBaseMessageInteractionMetadata {
	original_response_message_id?: Snowflake;
	triggering_interaction_metadata: APIApplicationCommandInteractionMetadata | APIMessageComponentInteractionMetadata;
}

/**
 * @see https://discord.com/developers/docs/resources/message#reaction-object-reaction-structure
 */
export interface APIReaction {
	burst_colors: string[];
	count: number;
	count_details: APIReactionCountDetails;
	emoji: APIPartialEmoji;
	me: boolean;
	me_burst: boolean;
}

/**
 * @see https://discord.com/developers/docs/resources/message#reaction-count-details-object-reaction-count-details-structure
 */
export interface APIReactionCountDetails {
	burst: number;
	normal: number;
}

/**
 * @see https://discord.com/developers/docs/resources/message#role-subscription-data-object-role-subscription-data-object-structure
 */
export interface APIRoleSubscriptionData {
	is_renewal: boolean;
	role_subscription_listing_id: Snowflake;
	tier_name: string;
	total_months_subscribed: number;
}

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-authorizing-integration-owners-object
 */
export type APIAuthorizingIntegrationOwners = {
	[Type in ApplicationIntegrationType]?: Snowflake;
};

/**
 * @see https://discord.com/developers/docs/resources/message#message-interaction-metadata-object
 */
export type APIMessageInteractionMetadata =
	| APIApplicationCommandInteractionMetadata
	| APIMessageComponentInteractionMetadata
	| APIModalSubmitInteractionMetadata;

/**
 * @see https://discord.com/developers/docs/resources/message#attachment-object-attachment-structure
 */
export type APIPartialAttachent = Partial<APIAttachment>;
