import { GUILD_MEMBER_ROLE } from '#rest/endpoints/Endpoints.js';
import { RESTMethod } from '#rest/structures/RESTManager.types.js';
import type { Snowflake } from '#types/index.js';
import { ResourceBase } from './ResourceBase.js';

export class GuildsResource extends ResourceBase {
	/**
	 * @see https://discord.com/developers/docs/resources/guild#add-guild-member-role
	 */
	async putGuildMemberRole(guildId: Snowflake, memberId: Snowflake, roleId: Snowflake): Promise<void> {
		const { rest } = this;
		const guildMemberRoleResponseData = await rest.makeRequest<void>(GUILD_MEMBER_ROLE(guildId, memberId, roleId), {
			body: undefined,
			method: RESTMethod.Put,
		});

		return guildMemberRoleResponseData;
	}
}
