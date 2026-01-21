import { APPLICATION_COMMANDS_ENDPOINT } from '#rest/endpoints/Endpoints.js';
import { RESTContentType, RESTMethod } from '#rest/structures/RESTManager.types.js';
import type { CreateApplicationCommand, RawApplicationCommand, Snowflake } from '#types/index.js';
import { ResourceBase } from './ResourceBase.js';

export class ApplicationsResource extends ResourceBase {
	/**
	 * @see https://discord.com/developers/docs/interactions/application-commands#create-global-application-command
	 */
	async bulkOverwriteApplicationCommands(applicationId: Snowflake, options: CreateApplicationCommand[]): Promise<unknown[]> {
		const { rest } = this;
		const body: unknown[] = [];

		for (const option of options) {
			body.push({
				// @ts-expect-error
				description: option.description as string,
				name: option.name,
				// @ts-expect-error
				options: option.options as never,
				type: option.type,
			});
		}

		await rest.makeRequest<RawApplicationCommand[]>(APPLICATION_COMMANDS_ENDPOINT(applicationId), {
			body: JSON.stringify(body),
			contentType: RESTContentType.ApplicationJSON,
			method: RESTMethod.Put,
		});

		return [];
	}
}
