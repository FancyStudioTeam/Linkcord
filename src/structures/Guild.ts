import type { Client } from '#client/index.js';
import type { APIGuild, APIGuildMember, GatewayDispatchGuildCreateEventPayload, GuildFeatures, RawRole, Snowflake } from '#types/index.js';
import { isUndefined } from '#utils/helpers/AssertionUtils.js';
import { Collection } from '#utils/index.js';
import { Base } from './Base.js';
import { GuildMember } from './GuildMember.js';
import { Role } from './Role.js';

/**
 * @see https://discord.com/developers/docs/resources/guild#guild-object-guild-structure
 */
export class Guild extends Base {
	/** The ID of the guild. */
	readonly id: Snowflake;
	/** The cached members of the guild. */
	readonly members: Collection<Snowflake, GuildMember>;
	/** The cached roles of the guild. */
	readonly roles: Collection<Snowflake, Role>;

	/** The features of the guild. */
	features: GuildFeatures[];
	/** The member count of the guild. */
	memberCount: number = 0;
	/** The name of the guild. */
	name: string;

	constructor(client: Client, data: APIGuild) {
		super(client);

		const { features, id, name } = data;

		this.features = features;
		this.id = id;
		this.members = new Collection();
		this.name = name;
		this.roles = new Collection();
		this.patch(data);
	}

	#appendMembersToCollection(rawMembers: APIGuildMember[]): void {
		const { client, members } = this;

		for (const rawMember of rawMembers) {
			const member = new GuildMember(client, rawMember);
			const { id: memberId } = member;

			members.set(memberId, member);
		}
	}

	#appendRolesToCollection(rawRoles: RawRole[]): void {
		const { client, roles } = this;

		for (const rawRole of rawRoles) {
			const role = new Role(client, rawRole);
			const { id: roleId } = role;

			roles.set(roleId, role);
		}
	}

	protected patch(data?: Partial<APIGuild & GatewayDispatchGuildCreateEventPayload>): void {
		const { features, member_count, members, name, roles } = data ?? {};

		if (!isUndefined(features)) {
			this.features = features;
		}

		if (!isUndefined(member_count)) {
			this.memberCount = member_count;
		}

		if (!isUndefined(members)) {
			this.#appendMembersToCollection(members);
		}

		if (!isUndefined(name)) {
			this.name = name;
		}

		if (!isUndefined(roles)) {
			this.#appendRolesToCollection(roles);
		}
	}
}
