import type { Client } from '#client/index.js';
import {
	type CreateInteractionResponseOptions,
	type InteractionCallbackResponse,
	InteractionType,
	type Locales,
	type Snowflake,
} from '#types/index.js';
import type { RawInteraction } from '#types/resources/Interactions/structures/raw.js';
import type { If } from '#utils/index.js';
import type { ApplicationCommandInteractionBase } from './ApplicationCommandInteractionBase.js';
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
	readonly guildId: If<InGuild, Snowflake, null>;
	/** The locale of the guild, if any. */
	readonly guildLocale: If<InGuild, Locales, null>;
	/** The ID of the interaction. */
	readonly id: Snowflake;
	/** The locale of the user. */
	readonly locale: Locales;
	/** The member who triggered the interaction, if any. */
	readonly member: If<InGuild, GuildMember, null>;
	/** The token of the interaction. */
	readonly token: string;
	/** The type of the interaction. */
	readonly type: InteractionType;
	/** The user who triggered the interaction. */
	readonly user: User;
	/** The version of the interaction. */
	readonly version: 1;

	/** Whether the interaction was acknowledged. */
	acknowledged: boolean = false;

	constructor(client: Client, rawInteraction: RawInteraction) {
		super(client);

		const { app_permissions, application_id, attachment_size_limit, guild_id, guild_locale, id, token, type, version } = rawInteraction;

		const channelId = this.#getInteractionChannelId(rawInteraction);
		const locale = this.#getInteractionLocale(rawInteraction);
		const member = this.#getInteractionMember(rawInteraction);
		const user = this.#getInteractionUser(rawInteraction);

		this.applicationId = application_id;
		this.applicationPermissions = app_permissions;
		this.attachmentSizeLimit = attachment_size_limit;
		this.channelId = channelId;
		this.guildId = (guild_id ?? null) as never;
		this.guildLocale = (guild_locale ?? null) as never;
		this.id = id;
		this.locale = locale;
		this.member = member;
		this.token = token;
		this.type = type;
		this.user = user;
		this.version = version;
	}

	#getInteractionChannelId(rawInteraction: RawInteraction): Snowflake {
		const { channel_id } = rawInteraction;

		if (!channel_id) {
			throw new TypeError('Received an interaction without channel id');
		}

		return channel_id;
	}

	#getInteractionLocale(rawInteraction: RawInteraction): Locales {
		// @ts-expect-error: Gateway interactions always have the 'locale' property.
		const { locale } = rawInteraction;

		if (!locale) {
			throw new TypeError('Received an interaction without locale');
		}

		return locale as Locales;
	}

	#getInteractionMember(rawInteraction: RawInteraction): If<InGuild, GuildMember, null> {
		const { member } = rawInteraction;
		const { client } = this;

		let result: GuildMember | null = null;

		if (member) {
			result = new GuildMember(client, member);
		}

		return result as never;
	}

	#getInteractionUser(rawInteraction: RawInteraction): User {
		const { member, user } = rawInteraction;
		const { client } = this;

		let result: User | null = null;

		if (member) {
			const { user } = member;

			result = new User(client, user);
		}

		if (user) {
			result = new User(client, user);
		}

		if (!result) {
			throw new TypeError('Received an interaction without member or user');
		}

		return result;
	}

	/**
	 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#create-interaction-response
	 */
	async createInteractionResponse(
		options: CreateInteractionResponseOptions & {
			withResponse: true;
		},
	): Promise<InteractionCallbackResponse>;

	/**
	 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#create-interaction-response
	 */
	async createInteractionResponse(
		options: CreateInteractionResponseOptions & {
			withResponse?: false;
		},
	): Promise<void>;

	/**
	 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#create-interaction-response
	 */
	async createInteractionResponse(options: CreateInteractionResponseOptions): Promise<InteractionCallbackResponse | void> {
		const { acknowledged, id, rest, token } = this;

		if (acknowledged) {
			throw new TypeError('The interaction has already been acknowledged');
		}

		this.acknowledged = true;

		const { resources } = rest;
		const { interactions } = resources;

		return await interactions.createInteractionResponse(id, token, options);
	}

	/**
	 * Gets the {@link Guild} instance associated with the interaction.
	 *
	 * @param required - Whether the {@link Guild} instance must be present.
	 */
	async guild(required?: false): Promise<If<InGuild, Guild, null> | null>;

	/**
	 * Gets the {@link Guild} instance associated with the interaction.
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
			throw new TypeError(`Unable to get 'Guild' in interaction '${id}'. Guild id is null.`);
		}

		const cachedGuild = guilds.get(guildId);

		if (!cachedGuild && required) {
			throw new TypeError(`Unable to get 'Guild' in interaction '${id}'. Guild '${guildId}' is not cached.`);
		}

		return cachedGuild ?? null;
	}

	/**
	 * Checks whether the interaction was triggered in a guild.
	 */
	inGuild(): this is InteractionBase<true> {
		const { guildId } = this;

		return Boolean(guildId);
	}

	/**
	 * Checks whether the interaction is an application command interaction.
	 */
	isApplicationCommandInteraction(): this is ApplicationCommandInteractionBase<InGuild> {
		const { type } = this;

		return type === InteractionType.ApplicationCommand;
	}
}
