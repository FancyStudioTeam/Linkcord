/*
 * biome-ignore-all lint/complexity/useLiteralKeys: Allow to use bracket
 * notation when accessing private or protected members from some structures.
 */

import { Endpoints } from "#rest/endpoints/Endpoints.js";
import { Guild, Role } from "#structures/index.js";
import type { RESTGetGuild, RESTGetGuildRole, Snowflake } from "#types/index.js";
import { BaseAPI } from "./BaseAPI.js";

/**
 * API class that handles all API requests related to guilds.
 * @group REST/API
 * @public
 */
export class GuildsAPI extends BaseAPI {
	/**
	 * Gets a guild.
	 * @param guildId - The ID of the guild to get.
	 * @returns The {@link Guild | `Guild`} instance.
	 * @see https://discord.com/developers/docs/resources/guild#get-guild
	 */
	async getGuild(guildId: Snowflake): Promise<Guild> {
		const { client } = this;
		const { guilds } = client;

		const guildData = await super.__get__<RESTGetGuild>(Endpoints.guild(guildId));
		const guild = new Guild(client, guildData);

		const { id } = guild;

		guilds["__add__"](id, guild);

		return guild;
	}

	/**
	 * Gets a role from a guild
	 * @param guildId - The ID of the guild where the role was created.
	 * @param roleId - The ID of the role.
	 * @returns The {@link Role | `Role`} instance.
	 * @see https://discord.com/developers/docs/resources/guild#get-guild-role
	 */
	async getGuildRole(guildId: Snowflake, roleId: Snowflake): Promise<Role> {
		const { client } = this;
		const { guilds: guildsManager } = client;
		const { cache: guildsCache } = guildsManager;

		const roleData = await super.__get__<RESTGetGuildRole>(
			Endpoints.guildRole(guildId, roleId),
		);
		const role = new Role(client, roleData, guildId);

		const cachedGuild = guildsCache.get(guildId);

		if (cachedGuild) {
			const { roles: rolesManager } = cachedGuild;
			const { id } = role;

			rolesManager["__add__"](id, role);
		}

		return role;
	}
}
