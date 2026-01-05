import type { Client } from '#client/index.js';
import { deserializeMessageChildComponentsArray } from '#transformers/Components/Deserializer.js';
import { deserializeEmbedsArray, deserializeMessageActivity, deserializeMessageCall } from '#transformers/Messages/Deserializer.js';
import type {
	Embed,
	GatewayDispatchMessageCreateEventPayload,
	MessageActivity,
	MessageCall,
	MessageChildComponent,
	MessageType,
	RawMessage,
	Snowflake,
} from '#types/index.js';
import { isNull, isUndefined } from '#utils/helpers/AssertionUtils.js';
import { BitField, type If, messageLink } from '#utils/index.js';
import { Base } from './Base.js';
import type { Guild } from './Guild.js';
import { User } from './User.js';

/**
 * @see https://discord.com/developers/docs/resources/message#message-object-message-structure
 */
export class Message<InGuild extends boolean = boolean> extends Base {
	/** The activity associated with the message. */
	readonly activity: MessageActivity | null;
	/** The ID of the parent application. */
	readonly applicationId: Snowflake | null;
	/** The author of the message. */
	readonly author: User;
	/** The ID of the channel where the message was sent. */
	readonly channelId: Snowflake;
	/** The ID of the guild where the message was sent, if any. */
	readonly guildId: If<InGuild, Snowflake, null>;
	/** The ID of the message. */
	readonly id: Snowflake;
	/** The nonce of the message. */
	readonly nonce: number | string | null;
	/** The timestamp at which the message was sent. */
	readonly timestamp: number;
	/** Whether the message was sent as Text-To-Speech. */
	readonly tts: boolean;
	/** The type of the message. */
	readonly type: MessageType;
	/** The ID of the parent webhook. */
	readonly webhookId: Snowflake | null;

	/** The call associated with the message. */
	call: MessageCall | null = null;
	/** The components of the message. */
	components: MessageChildComponent[];
	/** The content of the message. */
	content: string;
	/** The timestamp at which the message was edited, if any. */
	editedTimestamp: number | null = null;
	/** The embeds of the message. */
	embeds: Embed[];
	/** The flags of the message. */
	flags: BitField;
	/** Whether the message was pinned. */
	pinned: boolean;

	constructor(client: Client, rawMessage: RawMessage) {
		super(client);

		const {
			activity,
			application_id,
			author,
			channel_id,
			components,
			content,
			embeds,
			flags,
			id,
			nonce,
			pinned,
			timestamp,
			tts,
			type,
			webhook_id,
		} = rawMessage;
		const guildId = this.#getMessageGuildId(rawMessage);

		this.activity = deserializeMessageActivity(activity);
		this.applicationId = application_id ?? null;
		this.author = new User(client, author);
		this.channelId = channel_id;
		this.components = deserializeMessageChildComponentsArray(components);
		this.content = content;
		this.embeds = deserializeEmbedsArray(embeds);
		this.flags = new BitField(flags);
		this.guildId = guildId as never;
		this.id = id;
		this.nonce = nonce ?? null;
		this.pinned = pinned;
		this.timestamp = Date.parse(timestamp);
		this.tts = tts;
		this.type = type;
		this.webhookId = webhook_id ?? null;
		this.patch(rawMessage);
	}

	#getMessageGuildId(rawMessage: RawMessage): Snowflake | null {
		return Reflect.get(rawMessage, 'guild_id') ?? null;
	}

	/**
	 * The date at which the message was sent.
	 */
	get createdAt(): Date {
		const { timestamp } = this;

		return new Date(timestamp);
	}

	/** The date at which the message was edited, if any. */
	get editedAt(): Date | null {
		const { editedTimestamp } = this;

		if (!editedTimestamp) {
			return null;
		}

		return new Date(editedTimestamp);
	}

	/** The formatted link to the message. */
	get messageLink() {
		const { channelId, id } = this;

		return messageLink(channelId, id);
	}

	/**
	 * Patches the current {@link Message} instance with the provided
	 * {@link RawMessage} structure.
	 */
	protected patch(rawMessage: Partial<RawMessage & GatewayDispatchMessageCreateEventPayload>): void {
		const { call, components, content, edited_timestamp, embeds, flags, pinned } = rawMessage;

		if (!isUndefined(call)) {
			this.call = deserializeMessageCall(call);
		}

		if (!isUndefined(components)) {
			this.components = deserializeMessageChildComponentsArray(components);
		}

		if (!isUndefined(content)) {
			this.content = content;
		}

		if (!(isUndefined(edited_timestamp) || isNull(edited_timestamp))) {
			this.editedTimestamp = Date.parse(edited_timestamp);
		}

		if (!isUndefined(embeds)) {
			this.embeds = deserializeEmbedsArray(embeds);
		}

		if (!isUndefined(flags)) {
			this.flags = new BitField(flags);
		}

		if (!isUndefined(pinned)) {
			this.pinned = pinned;
		}
	}

	/**
	 * Gets the {@link Guild} instance associated with the message.
	 *
	 * @param required - Whether the {@link Guild} instance must be present.
	 */
	async guild(required?: false): Promise<If<InGuild, Guild, null> | null>;

	/**
	 * Gets the {@link Guild} instance associated with the message.
	 *
	 * @param required - Whether the {@link Guild} instance must be present.
	 *
	 * @remarks
	 * This method throws an error if {@link Guild} is not cached.
	 */
	async guild(required: true): Promise<If<InGuild, Guild, null>>;

	// biome-ignore lint/suspicious/useAwait: (x)
	async guild(required?: boolean): Promise<Guild | null> {
		const { client, guildId, id } = this;
		const { cache } = client;
		const { guilds } = cache;

		if (!guildId) {
			throw new TypeError(`Unable to get 'Guild' in message '${id}'. Guild ID is null.`);
		}

		const cachedGuild = guilds.get(guildId);

		if (!cachedGuild && required) {
			throw new TypeError(`Unable to get 'Guild' in message '${id}'. Guild '${guildId}' is not cached.`);
		}

		return cachedGuild ?? null;
	}

	/** Checks whether the message was sent in a guild. */
	inGuild(): this is Message<true> {
		const { guildId } = this;

		return Boolean(guildId);
	}
}
