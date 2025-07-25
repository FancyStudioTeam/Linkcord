import type { Client } from "#client/Client.js";
import { MessageTransformer } from "#structures/transformers/MessageTransformer.js";
import type {
	APIMessage,
	ISO8601Date,
	JSONMessage,
	MessageActivity,
	MessageCall,
	MessageTypes,
	Snowflake,
} from "#types/index.js";
import { BitFieldResolver } from "#utils/index.js";
import { Base } from "./base/Base.js";
import { Poll } from "./Poll.js";
import { User } from "./User.js";

export class Message<InGuild extends boolean = boolean> extends Base {
	/**
	 * The activity associated with the message.
	 */
	activity!: MessageActivity | null;
	/**
	 * The ID of the application of the interaction that sent the message.
	 */
	readonly applicationId: Snowflake | null;
	/**
	 * The attachments of the message.
	 *
	 * TODO: Add `Attachment` class.
	 */
	// attachments: Attachment[];
	/**
	 * The author that sent the message.
	 */
	readonly author: User;
	/**
	 * The call associated with the message.
	 */
	call!: MessageCall | null;
	/**
	 * The ID of the channel at which the message was sent.
	 */
	readonly channelId: Snowflake;
	/**
	 * The components of the message.
	 *
	 * TODO: Add `Component` class or type.
	 */
	// components: Component[];
	/**
	 * The content of the message.
	 */
	content: string;
	/**
	 * The timestamp at which the message was edited, if any.
	 */
	editedTimestamp!: ISO8601Date | null;
	/**
	 * The embeds of the message.
	 *
	 * TODO: Add `Embed` class.
	 */
	// embeds: Embed[];
	/**
	 * The flags of the message.
	 */
	flags!: BitFieldResolver | null;
	/**
	 * The ID of the message.
	 */
	readonly id: Snowflake;
	/**
	 * The interaction metadata of the message.
	 *
	 * TODO: Add `MessageInteractionMetadata` class.
	 */
	// readonly interactionMetadata: MessageInteractionMetadata;
	/**
	 * The users that were mentioned in the message.
	 */
	// mentions: User[];
	/**
	 * The channel ids that were mentioned in the message.
	 */
	// mentionChannels: Snowflake[];
	/**
	 * Whether the message mentions everyone.
	 */
	// mentionEveryone: boolean;
	/**
	 * The role ids that were mentioned in the message.
	 */
	// mentionRoles: Snowflake[];
	/**
	 * TODO: Add `MessageReference` class and documentation.
	 */
	// messageReference: MessageReference | null;
	/**
	 * TODO: Add `MessageSnapshot` class and documentation.
	 */
	// messageSnapshots: MessageSnapshot[];
	/**
	 * The nonce of the message.
	 */
	nonce!: number | string | null;
	/**
	 * Whether the message is pinned.
	 */
	pinned: boolean;
	/**
	 * The poll associated with the message.
	 */
	poll!: Poll | null;
	/**
	 * The position of the message in a thread.
	 */
	position!: number | null;
	/**
	 * The reactions of the message.
	 *
	 * TODO: Add `MessageReaction` class.
	 */
	// reactions: MessageReaction[];
	/**
	 * The message referenced to the message ref
	 */
	referencedMessage!: Message<InGuild> | null;
	/**
	 * TODO: Add `ResolvedData` class and documentation.
	 */
	// resolved: ResolvedData;
	/**
	 * TODO: Add `MessageReference` class and documentation.
	 */
	// roleSubscriptionData: RoleSubscriptionData;
	/**
	 * The sticker items of the message.
	 *
	 * TODO: Add `StickerItem` class.
	 */
	// stickerItems: StickerItem[];
	/**
	 * The timestamp at which the message was sent.
	 */
	readonly timestamp: ISO8601Date;
	/**
	 * Whether the message is Text-to-Speech.
	 */
	readonly tts: boolean;
	/**
	 * The type of the message.
	 */
	readonly type: MessageTypes;
	/**
	 * The ID of the webhook that sent the message.
	 */
	readonly webhookId: Snowflake | null;

	/**
	 * Creates a new {@link Message} instance.
	 *
	 * @param client - The client that instantiated the message.
	 * @param data - The raw Discord API message data.
	 */
	constructor(client: Client, data: APIMessage) {
		super(client);

		const {
			application_id,
			author,
			channel_id,
			content,
			id,
			pinned,
			timestamp,
			tts,
			type,
			webhook_id,
		} = data;

		this.applicationId = application_id ?? null;
		this.author = new User(client, author);
		this.channelId = channel_id;
		this.content = content;
		this.id = id;
		this.pinned = pinned;
		this.timestamp = timestamp;
		this.tts = tts;
		this.type = type;
		this.webhookId = webhook_id ?? null;
		this._patch(data);
	}

	/**
	 * Patches the message properties with the given data.
	 *
	 * @param data - The data to use when patching the message properties.
	 *
	 * @internal
	 */
	protected _patch(data: MessageData = {}): void {
		const {
			activity,
			call,
			content,
			edited_timestamp,
			flags,
			nonce,
			pinned,
			poll,
			position,
			referenced_message,
		} = data;

		if (activity) {
			this.activity = MessageTransformer.transformMessageActivity(activity);
		} else {
			this.activity ??= null;
		}

		if (call) {
			this.call = MessageTransformer.transformMessageCall(call);
		} else {
			this.call ??= null;
		}

		if (content) {
			this.content = content;
		}

		if (edited_timestamp) {
			this.editedTimestamp = edited_timestamp;
		} else {
			this.editedTimestamp ??= null;
		}

		if (flags) {
			this.flags = new BitFieldResolver(flags);
		} else {
			this.flags ??= null;
		}

		if (nonce) {
			this.nonce = nonce;
		} else {
			this.nonce ??= null;
		}

		if (pinned) {
			this.pinned = pinned;
		}

		if (poll) {
			const { client } = this;

			this.poll = new Poll(client, poll, this);
		} else {
			this.poll ??= null;
		}

		if (position) {
			this.position = position;
		} else {
			this.position ??= null;
		}

		if (referenced_message) {
			const { client } = this;

			this.referencedMessage = new Message(client, referenced_message);
		} else {
			this.referencedMessage ??= null;
		}
	}

	/**
	 * Converts the {@link Message} instance to a JSON object.
	 *
	 * @returns The JSON message data.
	 */
	toJSON(): JSONMessage<InGuild> {
		const {
			activity,
			applicationId,
			author,
			call,
			channelId,
			content,
			editedTimestamp,
			flags,
			id,
			nonce,
			pinned,
			poll,
			position,
			referencedMessage,
			timestamp,
			tts,
			type,
			webhookId,
		} = this;

		return Object.freeze({
			activity,
			applicationId,
			author,
			call,
			channelId,
			content,
			editedTimestamp,
			flags,
			id,
			nonce,
			pinned,
			poll,
			position,
			referencedMessage,
			timestamp,
			tts,
			type,
			webhookId,
		});
	}
}

type MessageData = Partial<APIMessage>;
