import type {
  RESTDeleteGuild,
  RESTDeleteGuildBan,
  RESTDeleteGuildIntegration,
  RESTDeleteGuildMember,
  RESTDeleteGuildMemberRole,
  RESTDeleteGuildRole,
  RESTGetActiveGuildThreads,
  RESTGetGuild,
  RESTGetGuildBan,
  RESTGetGuildBans,
  RESTGetGuildBansStringParams,
  RESTGetGuildChannels,
  RESTGetGuildIntegrations,
  RESTGetGuildInvites,
  RESTGetGuildMember,
  RESTGetGuildMembers,
  RESTGetGuildMembersSearch,
  RESTGetGuildMembersSearchStringParams,
  RESTGetGuildMembersStringParams,
  RESTGetGuildOnboarding,
  RESTGetGuildPreview,
  RESTGetGuildPruneCount,
  RESTGetGuildPruneCountStringParams,
  RESTGetGuildRole,
  RESTGetGuildRoles,
  RESTGetGuildStringParams,
  RESTGetGuildVanityUrl,
  RESTGetGuildVoiceRegions,
  RESTGetGuildWelcomeScreen,
  RESTGetGuildWidget,
  RESTGetGuildWidgetImage,
  RESTGetGuildWidgetImageStringParams,
  RESTGetGuildWidgetSettings,
  RESTPatchGuild,
  RESTPatchGuildChannelPositions,
  RESTPatchGuildChannelPositionsJSONParams,
  RESTPatchGuildJSONParams,
  RESTPatchGuildMember,
  RESTPatchGuildMemberCurrent,
  RESTPatchGuildMemberCurrentJSONParams,
  RESTPatchGuildMemberJSONParams,
  RESTPatchGuildRole,
  RESTPatchGuildRoleJSONParams,
  RESTPatchGuildRolePositions,
  RESTPatchGuildRolePositionsJSONParams,
  RESTPatchGuildWelcomeScreen,
  RESTPatchGuildWelcomeScreenJSONParams,
  RESTPatchGuildWidgetSettings,
  RESTPatchGuildWidgetSettingsJSONParams,
  RESTPostGuildBanBulk,
  RESTPostGuildBanBulkJSONParams,
  RESTPostGuildChannel,
  RESTPostGuildChannelJSONParams,
  RESTPostGuildMFALevel,
  RESTPostGuildMFALevelJSONParams,
  RESTPostGuildPrune,
  RESTPostGuildPruneJSONParams,
  RESTPostGuildRole,
  RESTPostGuildRoleJSONParams,
  RESTPutGuildBan,
  RESTPutGuildBanJSONParams,
  RESTPutGuildIncidentActions,
  RESTPutGuildIncidentActionsJSONParams,
  RESTPutGuildMember,
  RESTPutGuildMemberJSONParams,
  RESTPutGuildMemberRole,
  RESTPutGuildOnboarding,
  RESTPutGuildOnboardingJSONParams,
  Snowflake,
} from "@fancystudioteam/linkcord-types";
import { Endpoints } from "../utils/index.js";
import type { RESTManager } from "./RESTManager.js";

/**
 * @public
 */
export class GuildREST {
  private _restManager: RESTManager;

  constructor(restManager: RESTManager) {
    this._restManager = restManager;
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#delete-guild
   */
  async deleteGuild<Result = RESTDeleteGuild>(guildId: Snowflake): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.delete<Result>(Endpoints.guild(guildId));

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#remove-guild-ban
   */
  async deleteGuildBan<Result = RESTDeleteGuildBan>(
    guildId: Snowflake,
    userId: Snowflake,
    options?: DeleteGuildBanOptions,
  ): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.delete<Result>(Endpoints.guildBan(guildId, userId), options);

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#get-guild-integrations
   */
  async deleteGuildIntegration<Result = RESTDeleteGuildIntegration>(
    guildId: Snowflake,
    integrationId: Snowflake,
    options?: DeleteGuildIntegrationOptions,
  ): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.delete<Result>(Endpoints.guildIntegration(guildId, integrationId), options);

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#remove-guild-member
   */
  async deleteGuildMember<Result = RESTDeleteGuildMember>(
    guildId: Snowflake,
    userId: Snowflake,
    options?: DeleteGuildMemberOptions,
  ): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.delete<Result>(Endpoints.guildMember(guildId, userId), options);

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#remove-guild-member-role
   */
  async deleteGuildMemberRole<Result = RESTDeleteGuildMemberRole>(
    guildId: Snowflake,
    userId: Snowflake,
    roleId: Snowflake,
    options?: DeleteGuildMemberRoleOptions,
  ): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.delete<Result>(Endpoints.guildMemberRole(guildId, userId, roleId), options);

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#delete-guild-role
   */
  async deleteGuildRole<Result = RESTDeleteGuildRole>(
    guildId: Snowflake,
    roleId: Snowflake,
    options?: DeleteGuildRoleOptions,
  ): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.delete<Result>(Endpoints.guildRole(guildId, roleId), options);

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#list-active-guild-threads
   */
  async getActiveGuildThreads<Result = RESTGetActiveGuildThreads>(guildId: Snowflake): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.get<Result>(Endpoints.guildThreadsActive(guildId));

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#get-guild
   */
  async getGuild<Result = RESTGetGuild>(guildId: Snowflake, options?: GetGuildOptions): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.get<Result, RESTGetGuildStringParams>(Endpoints.guild(guildId), options);

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#get-guild-ban
   */
  async getGuildBan<Result = RESTGetGuildBan>(guildId: Snowflake, userId: Snowflake): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.get<Result>(Endpoints.guildBan(guildId, userId));

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#get-guild-bans
   */
  async getGuildBans<Result = RESTGetGuildBans>(guildId: Snowflake, options?: GetGuildBansOptions): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.get<Result, RESTGetGuildBansStringParams>(Endpoints.guildBans(guildId), options);

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#get-guild-channels
   */
  async getGuildChannels<Result = RESTGetGuildChannels>(guildId: Snowflake): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.get<Result>(Endpoints.guildChannels(guildId));

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#get-guild-integrations
   */
  async getGuildIntegrations<Result = RESTGetGuildIntegrations>(guildId: Snowflake): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.get<Result>(Endpoints.guildIntegrations(guildId));

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#get-guild-invites
   */
  async getGuildInvites<Result = RESTGetGuildInvites>(guildId: Snowflake): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.get<Result>(Endpoints.guildInvites(guildId));

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#get-guild-member
   */
  async getGuildMember<Result = RESTGetGuildMember>(guildId: Snowflake, userId: Snowflake): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.get<Result>(Endpoints.guildMember(guildId, userId));

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#list-guild-members
   */
  async getGuildMembers<Result = RESTGetGuildMembers>(
    guildId: Snowflake,
    options?: GetGuildMembersOptions,
  ): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.get<Result, RESTGetGuildMembersStringParams>(
      Endpoints.guildMembers(guildId),
      options,
    );

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#search-guild-members
   */
  async getGuildMembersSearch<Result = RESTGetGuildMembersSearch>(
    guildId: Snowflake,
    options: GetGuildMembersSearchOptions,
  ): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.get<Result, RESTGetGuildMembersSearchStringParams>(
      Endpoints.guildMembersSearch(guildId),
      options,
    );

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#get-guild-onboarding
   */
  async getGuildOnboarding<Result = RESTGetGuildOnboarding>(guildId: Snowflake): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.get<Result>(Endpoints.guildOnboarding(guildId));

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#get-guild-preview
   */
  async getGuildPreview<Result = RESTGetGuildPreview>(guildId: Snowflake): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.get<Result>(Endpoints.guildPreview(guildId));

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#get-guild-prune-count
   */
  async getGuildPruneCount<Result = RESTGetGuildPruneCount>(
    guildId: Snowflake,
    options?: GetGuildPruneCountOptions,
  ): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.get<Result, RESTGetGuildPruneCountStringParams>(
      Endpoints.guildPrune(guildId),
      options,
    );

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#get-guild-role
   */
  async getGuildRole<Result = RESTGetGuildRole>(guildId: Snowflake, roleId: Snowflake): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.get<Result>(Endpoints.guildRole(guildId, roleId));

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#get-guild-roles
   */
  async getGuildRoles<Result = RESTGetGuildRoles>(guildId: Snowflake): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.get<Result>(Endpoints.guildRoles(guildId));

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#get-guild-vanity-url
   */
  async getGuildVanityUrl<Result = RESTGetGuildVanityUrl>(guildId: Snowflake): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.get<Result>(Endpoints.guildVanityUrl(guildId));

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#get-guild-voice-regions
   */
  async getGuildVoiceRegions<Result = RESTGetGuildVoiceRegions>(guildId: Snowflake): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.get<Result>(Endpoints.guildRegions(guildId));

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#get-guild-welcome-screen
   */
  async getGuildWelcomeScreen<Result = RESTGetGuildWelcomeScreen>(guildId: Snowflake): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.get<Result>(Endpoints.guildWelcomeScreen(guildId));

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#get-guild-widget
   */
  async getGuildWidget<Result = RESTGetGuildWidget>(guildId: Snowflake): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.get<Result>(Endpoints.guildWidget(guildId));

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#get-guild-widget-image
   */
  async getGuildWidgetImage<Result = RESTGetGuildWidgetImage>(
    guildId: Snowflake,
    options?: GetGuildWidgetImageOptions,
  ): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.get<Result, RESTGetGuildWidgetImageStringParams>(
      Endpoints.guildWidgetPNG(guildId),
      options,
    );

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#get-guild-widget-settings
   */
  async getGuildWidgetSettings<Result = RESTGetGuildWidgetSettings>(guildId: Snowflake): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.get<Result>(Endpoints.guildWidget(guildId));

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#modify-guild
   */
  async patchGuild<Result = RESTPatchGuild>(guildId: Snowflake, options: PatchGuildOptions): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.patch<Result, RESTPatchGuildJSONParams>(Endpoints.guild(guildId), options);

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#modify-guild-channel-positions
   */
  async patchGuildChannelPositions<Result = RESTPatchGuildChannelPositions>(
    guildId: Snowflake,
    options: PatchGuildChannelPositionsOptions,
  ): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.patch<Result, RESTPatchGuildChannelPositionsJSONParams>(
      Endpoints.guildChannels(guildId),
      options,
    );

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#modify-guild-member
   */
  async patchGuildMember<Result = RESTPatchGuildMember>(
    guildId: Snowflake,
    userId: Snowflake,
    options: PatchGuildMemberOptions,
  ): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.patch<Result, RESTPatchGuildMemberJSONParams>(
      Endpoints.guildMember(guildId, userId),
      options,
    );

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#modify-current-member
   */
  async patchGuildMemberCurrent<Result = RESTPatchGuildMemberCurrent>(
    guildId: Snowflake,
    options: PatchGuildMemberCurrentOptions,
  ): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.patch<Result, RESTPatchGuildMemberCurrentJSONParams>(
      Endpoints.guildMember(guildId, "@me"),
      options,
    );

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#modify-guild-role
   */
  async patchGuildRole<Result = RESTPatchGuildRole>(
    guildId: Snowflake,
    roleId: Snowflake,
    options: PatchGuildRoleOptions,
  ): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.patch<Result, RESTPatchGuildRoleJSONParams>(
      Endpoints.guildRole(guildId, roleId),
      options,
    );

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#modify-guild-role-positions
   */
  async patchGuildRolePositions<Result = RESTPatchGuildRolePositions>(
    guildId: Snowflake,
    options: PatchGuildRolePositionsOptions,
  ): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.patch<Result, RESTPatchGuildRolePositionsJSONParams>(
      Endpoints.guildRoles(guildId),
      options,
    );

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#modify-guild-welcome-screen
   */
  async patchGuildWelcomeScreen<Result = RESTPatchGuildWelcomeScreen>(
    guildId: Snowflake,
    options: PatchGuildWelcomeScreenOptions,
  ): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.patch<Result, RESTPatchGuildWelcomeScreenJSONParams>(
      Endpoints.guildWelcomeScreen(guildId),
      options,
    );

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#modify-guild-widget
   */
  async patchGuildWidgetSettings<Result = RESTPatchGuildWidgetSettings>(
    guildId: Snowflake,
    options: PatchGuildWidgetSettingsOptions,
  ): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.patch<Result, RESTPatchGuildWidgetSettingsJSONParams>(
      Endpoints.guildWidget(guildId),
      options,
    );

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#bulk-guild-ban
   */
  async postGuildBanBulk<Result = RESTPostGuildBanBulk>(
    guildId: Snowflake,
    options: PostGuildBanBulkOptions,
  ): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.post<Result, RESTPostGuildBanBulkJSONParams>(
      Endpoints.guildBulkBan(guildId),
      options,
    );

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#create-guild-channel
   */
  async postGuildChannel<Result = RESTPostGuildChannel>(
    guildId: Snowflake,
    options: PostGuildChannelOptions,
  ): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.post<Result, RESTPostGuildChannelJSONParams>(
      Endpoints.guildChannels(guildId),
      options,
    );

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#modify-guild-mfa-level
   */
  async postGuildMFALevel<Result = RESTPostGuildMFALevel>(
    guildId: Snowflake,
    options: PostGuildMFALevelOptions,
  ): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.post<Result, RESTPostGuildMFALevelJSONParams>(
      Endpoints.guildMfa(guildId),
      options,
    );

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#begin-guild-prune-json-params
   */
  async postGuildPrune<Result = RESTPostGuildPrune>(
    guildId: Snowflake,
    options: PostGuildPruneOptions,
  ): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.post<Result, RESTPostGuildPruneJSONParams>(
      Endpoints.guildPrune(guildId),
      options,
    );

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#create-guild-role
   */
  async postGuildRole<Result = RESTPostGuildRole>(guildId: Snowflake, options: PostGuildRoleOptions): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.post<Result, RESTPostGuildRoleJSONParams>(
      Endpoints.guildRoles(guildId),
      options,
    );

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#create-guild-ban
   */
  async putGuildBan<Result = RESTPutGuildBan>(
    guildId: Snowflake,
    userId: Snowflake,
    options?: PutGuildBanOptions,
  ): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.put<Result, RESTPutGuildBanJSONParams>(
      Endpoints.guildBan(guildId, userId),
      options,
    );

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#modify-guild-incident-actions
   */
  async putGuildIncidentActions<Result = RESTPutGuildIncidentActions>(
    guildId: Snowflake,
    options: PutGuildIncidentActionsOptions,
  ): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.put<Result, RESTPutGuildIncidentActionsJSONParams>(
      Endpoints.guildIncidentActions(guildId),
      options,
    );

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#add-guild-member
   */
  async putGuildMember<Result = RESTPutGuildMember>(
    guildId: Snowflake,
    userId: Snowflake,
    options: PutGuildMemberOptions,
  ): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.put<Result, RESTPutGuildMemberJSONParams>(
      Endpoints.guildMember(guildId, userId),
      options,
    );

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#add-guild-member-role
   */
  async putGuildMemberRole<Result = RESTPutGuildMemberRole>(
    guildId: Snowflake,
    userId: Snowflake,
    roleId: Snowflake,
    options?: PutGuildMemberRoleOptions,
  ): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.put<Result>(Endpoints.guildMemberRole(guildId, userId, roleId), options);

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#modify-guild-onboarding
   */
  async putGuildOnboarding<Result = RESTPutGuildOnboarding>(
    guildId: Snowflake,
    options: PutGuildOnboardingOptions,
  ): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.put<Result, RESTPutGuildOnboardingJSONParams>(
      Endpoints.guildOnboarding(guildId),
      options,
    );

    return request;
  }
}

/**
 * @public
 */
export interface DeleteGuildBanOptions {
  reason?: string;
}

/**
 * @public
 */
export interface DeleteGuildIntegrationOptions {
  reason?: string;
}

/**
 * @public
 */
export interface DeleteGuildMemberOptions {
  reason?: string;
}

/**
 * @public
 */
export interface DeleteGuildMemberRoleOptions {
  reason?: string;
}

/**
 * @public
 */
export interface DeleteGuildRoleOptions {
  reason?: string;
}

/**
 * @public
 */
export interface GetGuildBansOptions {
  query?: RESTGetGuildBansStringParams;
}

/**
 * @public
 */
export interface GetGuildMembersOptions {
  query?: RESTGetGuildMembersStringParams;
}

/**
 * @public
 */
export interface GetGuildMembersSearchOptions {
  query: RESTGetGuildMembersSearchStringParams;
}

/**
 * @public
 */
export interface GetGuildOptions {
  query?: RESTGetGuildStringParams;
}

/**
 * @public
 */
export interface GetGuildPruneCountOptions {
  query?: RESTGetGuildPruneCountStringParams;
}

/**
 * @public
 */
export interface GetGuildWidgetImageOptions {
  query?: RESTGetGuildWidgetImageStringParams;
}

/**
 * @public
 */
export interface PatchGuildChannelPositionsOptions {
  json: RESTPatchGuildChannelPositionsJSONParams;
  reason?: string;
}

/**
 * @public
 */
export interface PatchGuildMemberCurrentOptions {
  json: RESTPatchGuildMemberCurrentJSONParams;
  reason?: string;
}

/**
 * @public
 */
export interface PatchGuildMemberOptions {
  json: RESTPatchGuildMemberJSONParams;
  reason?: string;
}

/**
 * @public
 */
export interface PatchGuildRoleOptions {
  json: RESTPatchGuildRoleJSONParams;
  reason?: string;
}

/**
 * @public
 */
export interface PatchGuildRolePositionsOptions {
  json: RESTPatchGuildRolePositionsJSONParams;
  reason?: string;
}

/**
 * @public
 */
export interface PatchGuildOptions {
  json: RESTPatchGuildJSONParams;
  reason?: string;
}

/**
 * @public
 */
export interface PatchGuildWelcomeScreenOptions {
  json: RESTPatchGuildWelcomeScreenJSONParams;
  reason?: string;
}

/**
 * @public
 */
export interface PatchGuildWidgetSettingsOptions {
  json: RESTPatchGuildWidgetSettingsJSONParams;
  reason?: string;
}

/**
 * @public
 */
export interface PostGuildBanBulkOptions {
  json: RESTPostGuildBanBulkJSONParams;
  reason?: string;
}

/**
 * @public
 */
export interface PostGuildChannelOptions {
  json: RESTPostGuildChannelJSONParams;
  reason?: string;
}

export interface PostGuildMFALevelOptions {
  json: RESTPostGuildMFALevelJSONParams;
  reason?: string;
}

/**
 * @public
 */
export interface PostGuildPruneOptions {
  json: RESTPostGuildPruneJSONParams;
  reason?: string;
}

/**
 * @public
 */
export interface PostGuildRoleOptions {
  json: RESTPostGuildRoleJSONParams;
  reason?: string;
}

/**
 * @public
 */
export interface PutGuildBanOptions {
  json: RESTPutGuildBanJSONParams;
  reason?: string;
}

/**
 * @public
 */
export interface PutGuildIncidentActionsOptions {
  json: RESTPutGuildIncidentActionsJSONParams;
  reason?: string;
}

/**
 * @public
 */
export interface PutGuildMemberOptions {
  json: RESTPutGuildMemberJSONParams;
}

/**
 * @public
 */
export interface PutGuildMemberRoleOptions {
  reason?: string;
}

/**
 * @public
 */
export interface PutGuildOnboardingOptions {
  json: RESTPutGuildOnboardingJSONParams;
  reason?: string;
}
