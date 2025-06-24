import type {
  RESTDeleteWebhook,
  RESTDeleteWebhookMessage,
  RESTDeleteWebhookMessageQueryStringParams,
  RESTGetWebhook,
  RESTGetWebhookMessage,
  RESTGetWebhookMessageQueryStringParams,
  RESTPatchWebhook,
  RESTPatchWebhookJSONParams,
  RESTPatchWebhookMessage,
  RESTPatchWebhookMessageJSONParams,
  RESTPatchWebhookMessageQueryStringParams,
  RESTPostWebhook,
  RESTPostWebhookJSONParams,
  RESTPostWebhookQueryStringParams,
  Snowflake,
} from "@fancystudioteam/linkcord-types";
import { Endpoints } from "../../utils/index.js";
import { BaseAPI } from "./base/BaseAPI.js";

/**
 * @public
 */
export class Webhooks extends BaseAPI {
  /**
   * @see https://discord.com/developers/docs/resources/webhook#delete-webhook
   */
  async deleteWebhook<Result = RESTDeleteWebhook>(
    webhookId: Snowflake,
    webhookToken?: string,
    options?: DeleteWebhookOptions,
  ): Promise<Result> {
    return await super.delete<Result>(Endpoints.webhook(webhookId, webhookToken), options);
  }

  /**
   * @see https://discord.com/developers/docs/resources/webhook#delete-webhook-message
   */
  async deleteWebhookMessage<Result = RESTDeleteWebhookMessage>(
    webhookId: Snowflake,
    webhookToken: string,
    messageId: Snowflake,
    options?: DeleteWebhookMessageOptions,
  ): Promise<Result> {
    return await super.delete<Result, RESTDeleteWebhookMessageQueryStringParams>(
      Endpoints.webhookMessage(webhookId, webhookToken, messageId),
      options,
    );
  }

  /**
   * @see https://discord.com/developers/docs/resources/webhook#get-webhook-with-token
   */
  async getWebhook<Result = RESTGetWebhook>(webhookId: Snowflake, webhookToken?: string): Promise<Result> {
    return await super.get<Result>(Endpoints.webhook(webhookId, webhookToken));
  }

  /**
   * @see https://discord.com/developers/docs/resources/webhook#get-webhook-message
   */
  async getWebhookMessage<Result = RESTGetWebhookMessage>(
    webhookId: Snowflake,
    webhookToken: string,
    messageId: Snowflake,
    options?: GetWebhookMessageOptions,
  ): Promise<Result> {
    return await super.get<Result, RESTGetWebhookMessageQueryStringParams>(
      Endpoints.webhookMessage(webhookId, webhookToken, messageId),
      options,
    );
  }

  /**
   * @see https://discord.com/developers/docs/resources/webhook#modify-webhook
   */
  async patchWebhook<Result = RESTPatchWebhook>(webhookId: Snowflake, options: PatchWebhookOptions): Promise<Result> {
    return await super.patch<Result, RESTPatchWebhookJSONParams>(Endpoints.webhook(webhookId), options);
  }

  /**
   * @see https://discord.com/developers/docs/resources/webhook#edit-webhook-message
   */
  async patchWebhookMessage<Result = RESTPatchWebhookMessage>(
    webhookId: Snowflake,
    webhookToken: string,
    messageId: Snowflake,
    options: PatchWebhookMessageOptions,
  ): Promise<Result> {
    return await super.patch<Result, RESTPatchWebhookMessageJSONParams, RESTPatchWebhookMessageQueryStringParams>(
      Endpoints.webhookMessage(webhookId, webhookToken, messageId),
      options,
    );
  }

  /**
   * @see https://discord.com/developers/docs/resources/webhook#execute-webhook
   */
  async postWebhook<Result = RESTPostWebhook>(
    webhookId: Snowflake,
    webhookToken: string,
    options: PostWebhookOptions,
  ): Promise<Result> {
    return await super.post<Result, RESTPostWebhookJSONParams, RESTPostWebhookQueryStringParams>(
      Endpoints.webhook(webhookId, webhookToken),
      options,
    );
  }
}

/**
 * @public
 */
export interface DeleteWebhookMessageOptions {
  query?: RESTDeleteWebhookMessageQueryStringParams;
}

/**
 * @public
 */
export interface DeleteWebhookOptions {
  reason?: string;
}

/**
 * @public
 */
export interface GetWebhookMessageOptions {
  query?: RESTGetWebhookMessageQueryStringParams;
}

/**
 * @public
 */
export interface PatchWebhookMessageOptions {
  json: RESTPatchWebhookMessageJSONParams;
  query?: RESTPatchWebhookMessageQueryStringParams;
}

/**
 * @public
 */
export interface PatchWebhookOptions {
  json: RESTPatchWebhookJSONParams;
  reason?: string;
}

/**
 * @public
 */
export interface PostWebhookOptions {
  json: RESTPostWebhookJSONParams;
  query?: RESTPostWebhookQueryStringParams;
}
