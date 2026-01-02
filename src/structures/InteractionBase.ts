import type { Client } from '#client/index.js';
import type { InteractionType, RawUser, Snowflake } from '#types/index.js';
import type { RawInteraction } from '#types/resources/Interactions/structures/raw.js';
import type { If } from '#utils/index.js';
import { Base } from './Base.js';
import type { Guild } from './Guild.js';
import { GuildMember } from './GuildMember.js';
import { User } from './User.js';

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure
 */
export abstract class InteractionBase<InGuild extends boolean = false> extends Base {
	/** The ID of the parent application. */
	readonly applicationId: Snowflake;
	/** The permissions of the application. */
	readonly applicationPermissions: string;
	/** The attachment size limit in bytes. */
	readonly attachmentSizeLimit: number;
	/** The ID of the channel where the interaction was triggered. */
	readonly channelId: Snowflake;
	/** The ID of the guild where the interaction was triggered. */
	readonly guildId: GuildIdCondition<InGuild>;
	/** The ID of the interaction. */
	readonly id: Snowflake;
	/** The member who triggered the interaction, if any. */
	readonly member: GuildMemberCondition<InGuild>;
	/** The token of the interaction. */
	readonly token: string;
	/** The type of the interaction. */
	readonly type: InteractionType;
	/** The user who triggered the interaction. */
	readonly user: User;
	/** The version of the interaction. */
	readonly version: 1;

	constructor(client: Client, rawInteraction: RawInteraction) {
		super(client);

		const { app_permissions, application_id, attachment_size_limit, guild_id, id, token, type, version } = rawInteraction;

		const channelId = this.#getInteractionChannelId(rawInteraction);
		const member = this.#getInteractionMember(rawInteraction);
		const user = this.#getInteractionUser(rawInteraction);

		this.applicationId = application_id;
		this.applicationPermissions = app_permissions;
		this.attachmentSizeLimit = attachment_size_limit;
		this.channelId = channelId;
		this.guildId = (guild_id ?? null) as GuildIdCondition<InGuild>;
		this.id = id;
		this.member = member;
		this.token = token;
		this.type = type;
		this.user = new User(client, user);
		this.version = version;
	}

	#getInteractionChannelId(rawInteraction: RawInteraction): Snowflake {
		const { channel_id } = rawInteraction;

		if (!channel_id) {
			throw new TypeError('Received an interaction without a channel id');
		}

		return channel_id;
	}

	#getInteractionMember(rawInteraction: RawInteraction): GuildMemberCondition<InGuild> {
		const { member } = rawInteraction;
		const { client } = this;

		let result: GuildMember | null = null;

		if (member) {
			result = new GuildMember(client, member);
		}

		return result as GuildMemberCondition<InGuild>;
	}

	#getInteractionUser(rawInteraction: RawInteraction): RawUser {
		const { member, user } = rawInteraction;

		if (!(member && user)) {
			throw new TypeError('Received an interaction without a member or user');
		}

		return user ?? member.user;
	}

	/**
	 * Gets the {@link Guild} instance associated with the message.
	 *
	 * @param required - Whether the {@link Guild} instance must be present.
	 */
	async guild(required?: false): Promise<GuildCondition<InGuild> | null>;

	/**
	 * Gets the {@link Guild} instance associated with the message.
	 *
	 * @param required - Whether the {@link Guild} instance must be present.
	 *
	 * @remarks
	 * This method throws an error if {@link Guild} is not cached.
	 */
	async guild(required: true): Promise<GuildCondition<InGuild>>;

	// biome-ignore lint/suspicious/useAwait: (x)
	async guild(required?: boolean): Promise<Guild | null> {
		const { client, guildId } = this;
		const { cache } = client;
		const { guilds } = cache;

		if (!guildId) {
			throw new TypeError(`Unable to get 'Guild' without 'guildId'`);
		}

		const cachedGuild = guilds.get(guildId);

		if (!cachedGuild && required) {
			throw new TypeError(`Unable to get 'Guild' in message '${this.id}'. Guild is not cached.`);
		}

		return cachedGuild ?? null;
	}

	/**
	 * Checks whether the interaction was triggered in a guild.
	 */
	inGuild(): this is InteractionBase<true> {
		return Boolean(this.guildId);
	}
}

export type GuildCondition<InGuild extends boolean> = If<InGuild, Guild, null>;
export type GuildIdCondition<InGuild extends boolean> = If<InGuild, Snowflake, null>;
export type GuildMemberCondition<InGuild extends boolean> = If<InGuild, GuildMember, null>;
