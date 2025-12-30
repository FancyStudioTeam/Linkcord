import type { Client } from '#client/index.js';
import type { RawWebhookBase, Snowflake, WebhookType } from '#types/index.js';
import { isNull, isUndefined } from '#utils/helpers/AssertionUtils.js';
import { Base } from './Base.js';
import type { Guild } from './Guild.js';

/**
 * @see https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-structure
 */
export abstract class WebhookBase extends Base {
	readonly #guildId: Snowflake | null;

	/** The ID of the parent application. */
	readonly applicationId: Snowflake | null;
	/** The ID of the webhook. */
	readonly id: Snowflake;
	/** The type of the webhook. */
	readonly type: WebhookType;

	/** The avatar of the webhook. */
	avatar: string | null = null;
	/** The name of the webhook. */
	name: string;

	constructor(client: Client, rawWebhookBase: RawWebhookBase<WebhookType>) {
		super(client);

		const { application_id, guild_id, id, name, type } = rawWebhookBase;

		if (isNull(name)) {
			throw new TypeError('Received a webhook without a name');
		}

		this.#guildId = guild_id ?? null;

		this.applicationId = application_id;
		this.id = id;
		this.name = name;
		this.type = type;
	}

	protected patch(data: Partial<RawWebhookBase<WebhookType>>): void {
		const { avatar, name } = data;

		if (!isUndefined(avatar)) {
			this.avatar = avatar;
		}

		if (!(isUndefined(name) || isNull(name))) {
			this.name = name;
		}
	}

	/**
	 * Gets the {@link Guild} instance associated with the webhook.
	 *
	 * @param required - Whether the returned value cannot be `null`.
	 */
	async guild(required?: false): Promise<Guild | null>;

	/**
	 * Gets the {@link Guild} instance associated with the webhook.
	 *
	 * @param required - Whether the returned value cannot be `null`.
	 *
	 * @remarks
	 * This method throws an error if the {@link Guild} instance is not cached.
	 */
	async guild(required: true): Promise<Guild>;

	// biome-ignore lint/suspicious/useAwait: (x)
	async guild(required?: boolean): Promise<Guild | null> {
		const guildId = this.#guildId;

		const { client } = this;
		const { cache } = client;
		const { guilds } = cache;

		const cachedGuild = guilds.get(String(guildId) as Snowflake);

		if (!cachedGuild && required) {
			throw new TypeError(`Guild (${guildId}) is not cached`);
		}

		return cachedGuild ?? null;
	}
}
