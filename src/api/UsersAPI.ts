import { Endpoints, RESTMethods } from "#rest/index.js";
import type {
	RESTDeleteUserGuild,
	RESTGetUser,
	RESTGetUserApplicationRoleConnection,
	RESTGetUserConnections,
	RESTGetUserCurrent,
	RESTGetUserGuildMember,
	RESTGetUserGuilds,
	RESTGetUserGuildsQueryStringParams,
	RESTPatchUserCurrent,
	RESTPatchUserCurrentJSONParams,
	RESTPostUserChannel,
	RESTPostUserChannelDM,
	RESTPostUserChannelDMJSONParams,
	RESTPostUserChannelJSONParams,
	RESTPutUserApplicationRoleConnection,
	RESTPutUserApplicationRoleConnectionJSONParams,
	Snowflake,
} from "#types/index.js";
import { APIBase } from "./base/APIBase.js";

/**
 * @public
 */
export class UsersAPI extends APIBase {
	/**
	 * @see https://discord.com/developers/docs/resources/user#leave-guild
	 */
	async deleteUserGuild<Result = RESTDeleteUserGuild>(guildId: Snowflake): Promise<Result> {
		return await super.makeRequest<Result>(
			RESTMethods.Delete,
			Endpoints.userGuild("@me", guildId),
		);
	}

	/**
	 * @see https://discord.com/developers/docs/resources/user#get-user
	 */
	async getUser<Result = RESTGetUser>(userId: Snowflake): Promise<Result> {
		return await super.makeRequest<Result>(RESTMethods.Get, Endpoints.user(userId));
	}

	/**
	 * @see https://discord.com/developers/docs/resources/user#get-current-user-application-role-connection
	 */
	async getUserApplicationRoleConnection<Result = RESTGetUserApplicationRoleConnection>(
		applicationId: Snowflake,
	): Promise<Result> {
		return await super.makeRequest<Result>(
			RESTMethods.Get,
			Endpoints.userApplicationRoleConnection("@me", applicationId),
		);
	}

	/**
	 * @see https://discord.com/developers/docs/resources/user#get-current-user-connections
	 */
	async getUserConnections<Result = RESTGetUserConnections>(): Promise<Result> {
		return await super.makeRequest<Result>(RESTMethods.Get, Endpoints.userConnections("@me"));
	}

	/**
	 * @see https://discord.com/developers/docs/resources/user#get-current-user
	 */
	async getUserCurrent<Result = RESTGetUserCurrent>(): Promise<Result> {
		return await super.makeRequest<Result>(RESTMethods.Get, Endpoints.user("@me"));
	}

	/**
	 * @see https://discord.com/developers/docs/resources/user#get-current-user-guilds
	 */
	async getUserGuilds<Result = RESTGetUserGuilds>(
		options?: GetUserGuildsOptions,
	): Promise<Result> {
		return await super.makeRequest<Result, never, RESTGetUserGuildsQueryStringParams>(
			RESTMethods.Get,
			Endpoints.userGuilds("@me"),
			{
				queryString: options,
			},
		);
	}

	/**
	 * @see https://discord.com/developers/docs/resources/user#get-current-user-guild-member
	 */
	async getUserMember<Result = RESTGetUserGuildMember>(guildId: Snowflake): Promise<Result> {
		return await super.makeRequest<Result>(
			RESTMethods.Get,
			Endpoints.userGuildMember("@me", guildId),
		);
	}

	/**
	 * @see https://discord.com/developers/docs/resources/user#modify-current-user
	 */
	async patchUser<Result = RESTPatchUserCurrent>(options: PatchUserOptions): Promise<Result> {
		return await super.makeRequest<Result, RESTPatchUserCurrentJSONParams>(
			RESTMethods.Patch,
			Endpoints.user("@me"),
			{
				json: options,
			},
		);
	}

	/**
	 * @see https://discord.com/developers/docs/resources/user#create-dm
	 */
	async postUserChannel<Result = RESTPostUserChannel>(
		options: PostUserChannelOptions,
	): Promise<Result> {
		return await super.makeRequest<Result, RESTPostUserChannelJSONParams>(
			RESTMethods.Post,
			Endpoints.userChannels("@me"),
			{
				json: options,
			},
		);
	}

	/**
	 * @see https://discord.com/developers/docs/resources/user#create-group-dm
	 */
	async postUserChannelDM<Result = RESTPostUserChannelDM>(
		options: PostUserChannelDMOptions,
	): Promise<Result> {
		return await super.makeRequest<Result, RESTPostUserChannelDMJSONParams>(
			RESTMethods.Post,
			Endpoints.userChannels("@me"),
			{
				json: options,
			},
		);
	}

	/**
	 * @see https://discord.com/developers/docs/resources/user#update-current-user-application-role-connection
	 */
	async putUserApplicationRoleConnection<Result = RESTPutUserApplicationRoleConnection>(
		applicationId: Snowflake,
		options: PutUserApplicationRoleConnectionOptions,
	): Promise<Result> {
		return await super.makeRequest<Result, RESTPutUserApplicationRoleConnectionJSONParams>(
			RESTMethods.Put,
			Endpoints.userApplicationRoleConnection("@me", applicationId),
			{
				json: options,
			},
		);
	}
}

/**
 * @internal
 */
type GetUserGuildsOptions = RESTGetUserGuildsQueryStringParams;

/**
 * @internal
 */
type PatchUserOptions = RESTPatchUserCurrentJSONParams;

/**
 * @internal
 */
type PostUserChannelDMOptions = RESTPostUserChannelDMJSONParams;

/**
 * @internal
 */
type PostUserChannelOptions = RESTPostUserChannelJSONParams;

/**
 * @internal
 */
type PutUserApplicationRoleConnectionOptions = RESTPutUserApplicationRoleConnectionJSONParams;
