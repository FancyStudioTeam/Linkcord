import type { Client } from '#client/index.js';
import { deserializeMessageComponentsArray } from '#transformers/Components/Deserializer.js';
import { deserializeEmbedsArray } from '#transformers/Messages/Deserializer.js';
import type { APIMessage, Embed, GatewayDispatchMessageCreateEventPayload, MessageComponents, Snowflake } from '#types/index.js';
import { isUndefined } from '#utils/helpers/AssertionUtils.js';
import { type If, messageLink } from '#utils/index.js';
import { Base } from './Base.js';
import type { Guild } from './Guild.js';
import { User } from './User.js';

/**
 * @see https://discord.com/developers/docs/resources/message#message-object-message-structure
 */
export class Message<InGuild extends boolean = false> extends Base {
	/** The author of the message. */
	readonly author: User;
	/** The ID of the channel where the message was sent. */
	readonly channelId: Snowflake;
	/** The ID of the message. */
	readonly id: Snowflake;

	/** The components of the message. */
	components: MessageComponents[];
	/** The content of the message. */
	content: string;
	/** The embeds of the message. */
	embeds: Embed[];
	/** The ID of the guild where the message was sent, if any. */
	guildId: If<InGuild, Snowflake, null> = null as never;

	constructor(client: Client, rawMessage: APIMessage) {
		super(client);

		const { author, channel_id, components, content, embeds, id } = rawMessage;

		this.author = new User(client, author);
		this.channelId = channel_id;
		this.components = deserializeMessageComponentsArray(components);
		this.content = content;
		this.embeds = deserializeEmbedsArray(embeds);
		this.id = id;
		this.patch(rawMessage);
	}

	/**
	 * The formatted link to the message.
	 */
	get messageLink() {
		const { channelId, id } = this;

		return messageLink(channelId, id);
	}

	/**
	 * Patches the current {@link Message} instance with the provided
	 * {@link RawMessage} structure.
	 */
	protected patch(rawMessage: Partial<APIMessage & GatewayDispatchMessageCreateEventPayload>): void {
		const { components, content, embeds, guild_id } = rawMessage;

		if (!isUndefined(components)) {
			this.components = deserializeMessageComponentsArray(components);
		}

		if (!isUndefined(content)) {
			this.content = content;
		}

		if (!isUndefined(embeds)) {
			this.embeds = deserializeEmbedsArray(embeds);
		}

		if (!isUndefined(guild_id)) {
			this.guildId = guild_id as never;
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
			throw new TypeError(`Unable to get 'Guild' in message '${id}'. Guild id is null.`);
		}

		const cachedGuild = guilds.get(guildId);

		if (!cachedGuild && required) {
			throw new TypeError(`Unable to get 'Guild' in message '${id}'. Guild '${guildId}' is not cached.`);
		}

		return cachedGuild ?? null;
	}

	/**
	 * Checks whether the message was sent in a guild.
	 */
	inGuild(): this is Message<true> {
		const { guildId } = this;

		return Boolean(guildId);
	}
}
