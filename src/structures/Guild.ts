import type { Client } from '#client/index.js';
import type { APIGuild, GatewayDispatchGuildCreateEventPayload, RawRole, Snowflake } from '#types/index.js';
import { isUndefined } from '#utils/helpers/AssertionUtils.js';
import { Collection } from '#utils/index.js';
import { Base } from './Base.js';
import { Role } from './Role.js';

/**
 * @see https://discord.com/developers/docs/resources/guild#guild-object-guild-structure
 */
export class Guild extends Base {
	/** The ID of the guild. */
	readonly id: Snowflake;
	/** The cached roles of the guild. */
	readonly roles: Collection<Snowflake, Role>;

	/** The name of the guild. */
	name: string;

	constructor(client: Client, data: APIGuild) {
		super(client);

		const { id, name, roles } = data;

		this.id = id;
		this.name = name;
		this.roles = this.#rolesArrayToCollection(roles);
		this.patch(data);
	}

	#rolesArrayToCollection(rawRolesArray: RawRole[]): Collection<Snowflake, Role> {
		const { client } = this;
		const rolesCollection = new Collection<Snowflake, Role>();

		for (const rawRole of rawRolesArray) {
			const role = new Role(client, rawRole);
			const { id: roleId } = role;

			rolesCollection.set(roleId, role);
		}

		return rolesCollection;
	}

	protected patch(data?: Partial<APIGuild & GatewayDispatchGuildCreateEventPayload>): void {
		const { name } = data ?? {};

		if (!isUndefined(name)) {
			this.name = name;
		}
	}
}
