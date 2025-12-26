import { APPLICATION_COMMANDS_ENDPOINT } from '#rest/endpoints/Endpoints.js';
import { RESTMethod } from '#rest/structures/RESTManager.types.js';
import type { CreateApplicationCommandOptions, RESTPutAPIApplicationCommandsJSONParams, Snowflake } from '#types/index.js';
import { BaseAPI } from './BaseAPI.js';

export class ApplicationsAPI extends BaseAPI {
	/**
	 * @see https://discord.com/developers/docs/interactions/application-commands#create-global-application-command
	 */
	async bulkOverwriteApplicationCommands(applicationId: Snowflake, options: CreateApplicationCommandOptions[]): Promise<unknown[]> {
		const { rest } = this;
		const body: unknown[] = [];

		for (const option of options) {
			body.push({
				// @ts-expect-error
				description: option.description as string,
				name: option.name,
				type: option.type,
			});
		}

		await rest.makeRequest<RESTPutAPIApplicationCommandsJSONParams>(APPLICATION_COMMANDS_ENDPOINT(applicationId), {
			body: JSON.stringify(body),
			method: RESTMethod.Put,
		});

		return [];
	}
}
