import type { Client } from '#client/index.js';
import type { APIGuild, Snowflake } from '#types/index.js';
import { isUndefined } from '#utils/helpers/AssertionUtils.js';
import { Base } from './Base.js';

/**
 * @see https://discord.com/developers/docs/resources/guild#guild-object-guild-structure
 */
export class Guild extends Base {
	/** The ID of the guild. */
	readonly id: Snowflake;

	/** The name of the guild. */
	name: string;

	constructor(client: Client, data: APIGuild) {
		super(client);

		const { id, name } = data;

		this.id = id;
		this.name = name;
	}

	protected patch(data?: Partial<APIGuild>): void {
		const { name } = data ?? {};

		if (!isUndefined(name)) this.name = name;
	}
}
