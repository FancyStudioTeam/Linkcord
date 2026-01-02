import { APPLICATION_COMMANDS_ENDPOINT } from '#rest/endpoints/Endpoints.js';
import { RESTContentType, RESTMethod } from '#rest/structures/RESTManager.types.js';
import type { CreateApplicationCommandOptions, RESTPutAPIApplicationCommandsJSONParams, Snowflake } from '#types/index.js';
import { ResourceBase } from './ResourceBase.js';

export class ApplicationsResource extends ResourceBase {
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
			contentType: RESTContentType.ApplicationJSON,
			method: RESTMethod.Put,
		});

		return [];
	}
}
