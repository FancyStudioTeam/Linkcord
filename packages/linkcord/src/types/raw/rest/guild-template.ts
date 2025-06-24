import type { APIGuild } from "../payloads/guild.js";
import type { APIGuildTemplate } from "../payloads/guild-template.js";
import type { ImageDataUri } from "../shared/discord.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild-template#create-guild-from-guild-template-json-params
 */
export interface RESTCreateGuildFromGuildTemplateJSONParams {
  icon?: ImageDataUri;
  name: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild-template#create-guild-template-json-params
 */
export interface RESTCreateGuildTemplateJSONParams {
  description?: string | null;
  name: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild-template#modify-guild-template-json-params
 */
export interface RESTModifyGuildTemplateJSONParams {
  description?: string | null;
  name?: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild-template#create-guild-template
 */
export type RESTCreateGuildFromGuildTemplate = APIGuild;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild-template#create-guild-template
 */
export type RESTCreateGuildTemplate = APIGuildTemplate;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild-template#delete-guild-template
 */
export type RESTDeleteGuildTemplate = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild-template#get-guild-template
 */
export type RESTGetGuildTemplate = APIGuildTemplate;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild-template#get-guild-templates
 */
export type RESTGetGuildTemplates = APIGuildTemplate[];

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild-template#modify-guild-template
 */
export type RESTModifyGuildTemplate = APIGuildTemplate;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild-template#sync-guild-template
 */
export type RESTSyncGuildTemplate = undefined;
