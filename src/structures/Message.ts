import type { Client } from '#client/index.js';
import { deserializeMessageComponentsArray } from '#transformers/Components/Deserializer.js';
import { deserializeEmbedsArray } from '#transformers/Messages/Deserializer.js';
import type { APIMessage, Embed, GatewayDispatchMessageCreateEventPayload, MessageComponents, Snowflake } from '#types/index.js';
import { isUndefined } from '#utils/helpers/AssertionUtils.js';
import { type If, messageLink } from '#utils/index.js';
import { Base } from './Base.js';
import type { Guild } from './Guild.js';

/**
 * @see https://discord.com/developers/docs/resources/message#message-object-message-structure
 */
export class Message<InGuild extends boolean = boolean> extends Base {
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
	/** The ID of the guild, if any. */
	guildId: If<InGuild, Snowflake>;

	constructor(client: Client, data: APIMessage) {
		super(client);

		const { channel_id, components, content, embeds, id } = data;

		this.channelId = channel_id;
		this.components = deserializeMessageComponentsArray(components);
		this.content = content;
		this.embeds = deserializeEmbedsArray(embeds);
		this.guildId = null as If<InGuild, Snowflake>;
		this.id = id;
		this.patch(data);
	}

	/** The guild where the message was sent, if any. */
	get guild(): If<InGuild, Guild> {
		const { client, guildId } = this;
		const {
			cache: { guilds },
		} = client;

		// @ts-expect-error
		const cachedGuild = guilds.get(String(guildId));

		if (!cachedGuild) {
			throw new TypeError(`Unable to get 'Guild' in message '${this.id}'. Guild is not cached.`);
		}

		return cachedGuild as If<InGuild, Guild>;
	}

	/** The formatted link to the message. */
	get messageLink() {
		return messageLink(this.channelId, this.id);
	}

	protected patch(data?: Partial<APIMessage & GatewayDispatchMessageCreateEventPayload>): void {
		const { components, content, embeds, guild_id } = data ?? {};

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
			this.guildId = guild_id as If<InGuild, Snowflake>;
		}
	}

	inGuild(): this is Message<true> {
		return Boolean(this.guildId);
	}
}
