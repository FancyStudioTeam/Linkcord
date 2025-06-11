import type {
  RESTDeleteGuild,
  RESTDeleteGuildAutoModerationRule,
  RESTDeleteGuildBan,
  RESTDeleteGuildIntegration,
  RESTDeleteGuildMember,
  RESTDeleteGuildMemberRole,
  RESTDeleteGuildRole,
  RESTDeleteGuildSoundboardSound,
  RESTGetGuild,
  RESTGetGuildAuditLog,
  RESTGetGuildAuditLogStringParams,
  RESTGetGuildAutoModerationRule,
  RESTGetGuildAutoModerationRules,
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
  RESTGetGuildSoundboardSound,
  RESTGetGuildSoundboardSounds,
  RESTGetGuildStringParams,
  RESTGetGuildThreadsActive,
  RESTGetGuildVanityUrl,
  RESTGetGuildVoiceRegions,
  RESTGetGuildWebhooks,
  RESTGetGuildWelcomeScreen,
  RESTGetGuildWidget,
  RESTGetGuildWidgetImage,
  RESTGetGuildWidgetImageStringParams,
  RESTGetGuildWidgetSettings,
  RESTPatchGuild,
  RESTPatchGuildAutoModerationRule,
  RESTPatchGuildAutoModerationRuleJSONParams,
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
  RESTPatchGuildSoundboardSound,
  RESTPatchGuildSoundboardSoundJSONParams,
  RESTPatchGuildWelcomeScreen,
  RESTPatchGuildWelcomeScreenJSONParams,
  RESTPatchGuildWidgetSettings,
  RESTPatchGuildWidgetSettingsJSONParams,
  RESTPostGuildAutoModerationRule,
  RESTPostGuildAutoModerationRuleJSONParams,
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
  RESTPostGuildSoundboardSound,
  RESTPostGuildSoundboardSoundJSONParams,
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
import { Endpoints } from "../../utils/index.js";
import { BaseAPI } from "./base/BaseAPI.js";

/**
 * @public
 */
export class Guild extends BaseAPI {
  /**
   * @see https://discord.com/developers/docs/resources/guild#delete-guild
   */
  async deleteGuild<Result = RESTDeleteGuild>(guildId: Snowflake): Promise<Result> {
    return await super.delete<Result>(Endpoints.guild(guildId));
  }

  /**
   * @see https://discord.com/developers/docs/resources/auto-moderation#delete-auto-moderation-rule
   */
  async deleteGuildAutoModerationRule<Result = RESTDeleteGuildAutoModerationRule>(
    guildId: Snowflake,
    autoModerationRuleId: Snowflake,
    options?: DeleteGuildAutoModerationRuleOptions,
  ): Promise<Result> {
    return await super.delete<Result>(Endpoints.guildAutoModerationRule(guildId, autoModerationRuleId), options);
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#remove-guild-ban
   */
  async deleteGuildBan<Result = RESTDeleteGuildBan>(
    guildId: Snowflake,
    userId: Snowflake,
    options?: DeleteGuildBanOptions,
  ): Promise<Result> {
    return await super.delete<Result>(Endpoints.guildBan(guildId, userId), options);
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#get-guild-integrations
   */
  async deleteGuildIntegration<Result = RESTDeleteGuildIntegration>(
    guildId: Snowflake,
    integrationId: Snowflake,
    options?: DeleteGuildIntegrationOptions,
  ): Promise<Result> {
    return await super.delete<Result>(Endpoints.guildIntegration(guildId, integrationId), options);
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#remove-guild-member
   */
  async deleteGuildMember<Result = RESTDeleteGuildMember>(
    guildId: Snowflake,
    userId: Snowflake,
    options?: DeleteGuildMemberOptions,
  ): Promise<Result> {
    return await super.delete<Result>(Endpoints.guildMember(guildId, userId), options);
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
    return await super.delete<Result>(Endpoints.guildMemberRole(guildId, userId, roleId), options);
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#delete-guild-role
   */
  async deleteGuildRole<Result = RESTDeleteGuildRole>(
    guildId: Snowflake,
    roleId: Snowflake,
    options?: DeleteGuildRoleOptions,
  ): Promise<Result> {
    return await super.delete<Result>(Endpoints.guildRole(guildId, roleId), options);
  }

  /**
   * @see https://discord.com/developers/docs/resources/soundboard#delete-guild-soundboard-sound
   */
  async deleteGuildSoundboardSound<Result = RESTDeleteGuildSoundboardSound>(
    guildId: Snowflake,
    soundboardSoundId: Snowflake,
    options?: DeleteGuildSoundboardSoundOptions,
  ): Promise<Result> {
    return await super.delete<Result>(Endpoints.guildSoundboardSound(guildId, soundboardSoundId), options);
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#get-guild
   */
  async getGuild<Result = RESTGetGuild>(guildId: Snowflake, options?: GetGuildOptions): Promise<Result> {
    return await super.get<Result, RESTGetGuildStringParams>(Endpoints.guild(guildId), options);
  }

  /**
   * @see https://discord.com/developers/docs/resources/audit-log#get-guild-audit-log
   */
  async getGuildAuditLog<Result = RESTGetGuildAuditLog>(
    guildId: Snowflake,
    options?: GetGuildAuditLogOptions,
  ): Promise<Result> {
    return await super.get<Result, RESTGetGuildAuditLogStringParams>(Endpoints.guildAuditLogs(guildId), options);
  }

  /**
   * @see https://discord.com/developers/docs/resources/auto-moderation#get-auto-moderation-rule
   */
  async getGuildAutoModerationRule<Result = RESTGetGuildAutoModerationRule>(
    guildId: Snowflake,
    autoModerationRuleId: Snowflake,
  ): Promise<Result> {
    return await super.get<Result>(Endpoints.guildAutoModerationRule(guildId, autoModerationRuleId));
  }

  /**
   * @see https://discord.com/developers/docs/resources/auto-moderation#list-auto-moderation-rules-for-guild
   */
  async getGuildAutoModerationRules<Result = RESTGetGuildAutoModerationRules>(guildId: Snowflake): Promise<Result> {
    return await super.get<Result>(Endpoints.guildAutoModerationRules(guildId));
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#get-guild-ban
   */
  async getGuildBan<Result = RESTGetGuildBan>(guildId: Snowflake, userId: Snowflake): Promise<Result> {
    return await super.get<Result>(Endpoints.guildBan(guildId, userId));
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#get-guild-bans
   */
  async getGuildBans<Result = RESTGetGuildBans>(guildId: Snowflake, options?: GetGuildBansOptions): Promise<Result> {
    return await super.get<Result, RESTGetGuildBansStringParams>(Endpoints.guildBans(guildId), options);
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#get-guild-channels
   */
  async getGuildChannels<Result = RESTGetGuildChannels>(guildId: Snowflake): Promise<Result> {
    return await super.get<Result>(Endpoints.guildChannels(guildId));
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#get-guild-integrations
   */
  async getGuildIntegrations<Result = RESTGetGuildIntegrations>(guildId: Snowflake): Promise<Result> {
    return await super.get<Result>(Endpoints.guildIntegrations(guildId));
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#get-guild-invites
   */
  async getGuildInvites<Result = RESTGetGuildInvites>(guildId: Snowflake): Promise<Result> {
    return await super.get<Result>(Endpoints.guildInvites(guildId));
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#get-guild-member
   */
  async getGuildMember<Result = RESTGetGuildMember>(guildId: Snowflake, userId: Snowflake): Promise<Result> {
    return await super.get<Result>(Endpoints.guildMember(guildId, userId));
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#list-guild-members
   */
  async getGuildMembers<Result = RESTGetGuildMembers>(
    guildId: Snowflake,
    options?: GetGuildMembersOptions,
  ): Promise<Result> {
    return await super.get<Result, RESTGetGuildMembersStringParams>(Endpoints.guildMembers(guildId), options);
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#search-guild-members
   */
  async getGuildMembersSearch<Result = RESTGetGuildMembersSearch>(
    guildId: Snowflake,
    options: GetGuildMembersSearchOptions,
  ): Promise<Result> {
    return await super.get<Result, RESTGetGuildMembersSearchStringParams>(
      Endpoints.guildMembersSearch(guildId),
      options,
    );
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#get-guild-onboarding
   */
  async getGuildOnboarding<Result = RESTGetGuildOnboarding>(guildId: Snowflake): Promise<Result> {
    return await super.get<Result>(Endpoints.guildOnboarding(guildId));
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#get-guild-preview
   */
  async getGuildPreview<Result = RESTGetGuildPreview>(guildId: Snowflake): Promise<Result> {
    return await super.get<Result>(Endpoints.guildPreview(guildId));
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#get-guild-prune-count
   */
  async getGuildPruneCount<Result = RESTGetGuildPruneCount>(
    guildId: Snowflake,
    options?: GetGuildPruneCountOptions,
  ): Promise<Result> {
    return await super.get<Result, RESTGetGuildPruneCountStringParams>(Endpoints.guildPrune(guildId), options);
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#get-guild-role
   */
  async getGuildRole<Result = RESTGetGuildRole>(guildId: Snowflake, roleId: Snowflake): Promise<Result> {
    return await super.get<Result>(Endpoints.guildRole(guildId, roleId));
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#get-guild-roles
   */
  async getGuildRoles<Result = RESTGetGuildRoles>(guildId: Snowflake): Promise<Result> {
    return await super.get<Result>(Endpoints.guildRoles(guildId));
  }

  /**
   * @see https://discord.com/developers/docs/resources/soundboard#get-guild-soundboard-sound
   */
  async getGuildSoundboardSound<Result = RESTGetGuildSoundboardSound>(
    guildId: Snowflake,
    soundboardSoundId: Snowflake,
  ): Promise<Result> {
    return await super.get<Result>(Endpoints.guildSoundboardSound(guildId, soundboardSoundId));
  }

  /**
   * @see https://discord.com/developers/docs/resources/soundboard#list-guild-soundboard-sounds
   */
  async getGuildSoundboardSounds<Result = RESTGetGuildSoundboardSounds>(guildId: Snowflake): Promise<Result> {
    return await super.get<Result>(Endpoints.guildSoundboardSounds(guildId));
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#list-active-guild-threads
   */
  async getGuildThreadsActive<Result = RESTGetGuildThreadsActive>(guildId: Snowflake): Promise<Result> {
    return await super.get<Result>(Endpoints.guildThreadsActive(guildId));
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#get-guild-vanity-url
   */
  async getGuildVanityUrl<Result = RESTGetGuildVanityUrl>(guildId: Snowflake): Promise<Result> {
    return await super.get<Result>(Endpoints.guildVanityUrl(guildId));
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#get-guild-voice-regions
   */
  async getGuildVoiceRegions<Result = RESTGetGuildVoiceRegions>(guildId: Snowflake): Promise<Result> {
    return await super.get<Result>(Endpoints.guildRegions(guildId));
  }

  /**
   * @see https://discord.com/developers/docs/resources/webhook#get-guild-webhooks
   */
  async getGuildWebhooks<Result = RESTGetGuildWebhooks>(guildId: Snowflake): Promise<Result> {
    return await super.get<Result>(Endpoints.guildWebhooks(guildId));
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#get-guild-welcome-screen
   */
  async getGuildWelcomeScreen<Result = RESTGetGuildWelcomeScreen>(guildId: Snowflake): Promise<Result> {
    return await super.get<Result>(Endpoints.guildWelcomeScreen(guildId));
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#get-guild-widget
   */
  async getGuildWidget<Result = RESTGetGuildWidget>(guildId: Snowflake): Promise<Result> {
    return await super.get<Result>(Endpoints.guildWidget(guildId));
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#get-guild-widget-image
   */
  async getGuildWidgetImage<Result = RESTGetGuildWidgetImage>(
    guildId: Snowflake,
    options?: GetGuildWidgetImageOptions,
  ): Promise<Result> {
    return await super.get<Result, RESTGetGuildWidgetImageStringParams>(Endpoints.guildWidgetPNG(guildId), options);
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#get-guild-widget-settings
   */
  async getGuildWidgetSettings<Result = RESTGetGuildWidgetSettings>(guildId: Snowflake): Promise<Result> {
    return await super.get<Result>(Endpoints.guildWidget(guildId));
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#modify-guild
   */
  async patchGuild<Result = RESTPatchGuild>(guildId: Snowflake, options: PatchGuildOptions): Promise<Result> {
    return await super.patch<Result, RESTPatchGuildJSONParams>(Endpoints.guild(guildId), options);
  }

  /**
   * @see https://discord.com/developers/docs/resources/auto-moderation#modify-auto-moderation-rule
   */
  async patchGuildAutoModerationRule<Result = RESTPatchGuildAutoModerationRule>(
    guildId: Snowflake,
    autoModerationRuleId: Snowflake,
    options: PatchGuildAutoModerationRuleOptions,
  ): Promise<Result> {
    return await super.patch<Result, RESTPatchGuildAutoModerationRuleJSONParams>(
      Endpoints.guildAutoModerationRule(guildId, autoModerationRuleId),
      options,
    );
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#modify-guild-channel-positions
   */
  async patchGuildChannelPositions<Result = RESTPatchGuildChannelPositions>(
    guildId: Snowflake,
    options: PatchGuildChannelPositionsOptions,
  ): Promise<Result> {
    return await super.patch<Result, RESTPatchGuildChannelPositionsJSONParams>(
      Endpoints.guildChannels(guildId),
      options,
    );
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#modify-guild-member
   */
  async patchGuildMember<Result = RESTPatchGuildMember>(
    guildId: Snowflake,
    userId: Snowflake,
    options: PatchGuildMemberOptions,
  ): Promise<Result> {
    return await super.patch<Result, RESTPatchGuildMemberJSONParams>(Endpoints.guildMember(guildId, userId), options);
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#modify-current-member
   */
  async patchGuildMemberCurrent<Result = RESTPatchGuildMemberCurrent>(
    guildId: Snowflake,
    options: PatchGuildMemberCurrentOptions,
  ): Promise<Result> {
    return await super.patch<Result, RESTPatchGuildMemberCurrentJSONParams>(
      Endpoints.guildMember(guildId, "@me"),
      options,
    );
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#modify-guild-role
   */
  async patchGuildRole<Result = RESTPatchGuildRole>(
    guildId: Snowflake,
    roleId: Snowflake,
    options: PatchGuildRoleOptions,
  ): Promise<Result> {
    return await super.patch<Result, RESTPatchGuildRoleJSONParams>(Endpoints.guildRole(guildId, roleId), options);
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#modify-guild-role-positions
   */
  async patchGuildRolePositions<Result = RESTPatchGuildRolePositions>(
    guildId: Snowflake,
    options: PatchGuildRolePositionsOptions,
  ): Promise<Result> {
    return await super.patch<Result, RESTPatchGuildRolePositionsJSONParams>(Endpoints.guildRoles(guildId), options);
  }

  /**
   * @see https://discord.com/developers/docs/resources/soundboard#modify-guild-soundboard-sound
   */
  async patchGuildSoundboardSound<Result = RESTPatchGuildSoundboardSound>(
    guildId: Snowflake,
    options: PatchGuildSoundboardSoundOptions,
  ): Promise<Result> {
    return await super.patch<Result, RESTPatchGuildSoundboardSoundJSONParams>(
      Endpoints.guildSoundboardSounds(guildId),
      options,
    );
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#modify-guild-welcome-screen
   */
  async patchGuildWelcomeScreen<Result = RESTPatchGuildWelcomeScreen>(
    guildId: Snowflake,
    options: PatchGuildWelcomeScreenOptions,
  ): Promise<Result> {
    return await super.patch<Result, RESTPatchGuildWelcomeScreenJSONParams>(
      Endpoints.guildWelcomeScreen(guildId),
      options,
    );
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#modify-guild-widget
   */
  async patchGuildWidgetSettings<Result = RESTPatchGuildWidgetSettings>(
    guildId: Snowflake,
    options: PatchGuildWidgetSettingsOptions,
  ): Promise<Result> {
    return await super.patch<Result, RESTPatchGuildWidgetSettingsJSONParams>(Endpoints.guildWidget(guildId), options);
  }

  /**
   * @see https://discord.com/developers/docs/resources/auto-moderation#create-auto-moderation-rule
   */
  async postGuildAutoModerationRule<Result = RESTPostGuildAutoModerationRule>(
    guildId: Snowflake,
    options: PostGuildAutoModerationRuleOptions,
  ): Promise<Result> {
    return await super.post<Result, RESTPostGuildAutoModerationRuleJSONParams>(
      Endpoints.guildAutoModerationRules(guildId),
      options,
    );
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#bulk-guild-ban
   */
  async postGuildBanBulk<Result = RESTPostGuildBanBulk>(
    guildId: Snowflake,
    options: PostGuildBanBulkOptions,
  ): Promise<Result> {
    return await super.post<Result, RESTPostGuildBanBulkJSONParams>(Endpoints.guildBulkBan(guildId), options);
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#create-guild-channel
   */
  async postGuildChannel<Result = RESTPostGuildChannel>(
    guildId: Snowflake,
    options: PostGuildChannelOptions,
  ): Promise<Result> {
    return await super.post<Result, RESTPostGuildChannelJSONParams>(Endpoints.guildChannels(guildId), options);
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#modify-guild-mfa-level
   */
  async postGuildMFALevel<Result = RESTPostGuildMFALevel>(
    guildId: Snowflake,
    options: PostGuildMFALevelOptions,
  ): Promise<Result> {
    return await super.post<Result, RESTPostGuildMFALevelJSONParams>(Endpoints.guildMfa(guildId), options);
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#begin-guild-prune-json-params
   */
  async postGuildPrune<Result = RESTPostGuildPrune>(
    guildId: Snowflake,
    options: PostGuildPruneOptions,
  ): Promise<Result> {
    return await super.post<Result, RESTPostGuildPruneJSONParams>(Endpoints.guildPrune(guildId), options);
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#create-guild-role
   */
  async postGuildRole<Result = RESTPostGuildRole>(guildId: Snowflake, options: PostGuildRoleOptions): Promise<Result> {
    return await super.post<Result, RESTPostGuildRoleJSONParams>(Endpoints.guildRoles(guildId), options);
  }

  /**
   * @see https://discord.com/developers/docs/resources/soundboard#create-guild-soundboard-sound
   */
  async postGuildSoundboardSound<Result = RESTPostGuildSoundboardSound>(
    guildId: Snowflake,
    options: PostGuildSoundboardSoundOptions,
  ): Promise<Result> {
    return await super.post<Result, RESTPostGuildSoundboardSoundJSONParams>(
      Endpoints.guildSoundboardSounds(guildId),
      options,
    );
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#create-guild-ban
   */
  async putGuildBan<Result = RESTPutGuildBan>(
    guildId: Snowflake,
    userId: Snowflake,
    options?: PutGuildBanOptions,
  ): Promise<Result> {
    return await super.put<Result, RESTPutGuildBanJSONParams>(Endpoints.guildBan(guildId, userId), options);
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#modify-guild-incident-actions
   */
  async putGuildIncidentActions<Result = RESTPutGuildIncidentActions>(
    guildId: Snowflake,
    options: PutGuildIncidentActionsOptions,
  ): Promise<Result> {
    return await super.put<Result, RESTPutGuildIncidentActionsJSONParams>(
      Endpoints.guildIncidentActions(guildId),
      options,
    );
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#add-guild-member
   */
  async putGuildMember<Result = RESTPutGuildMember>(
    guildId: Snowflake,
    userId: Snowflake,
    options: PutGuildMemberOptions,
  ): Promise<Result> {
    return await super.put<Result, RESTPutGuildMemberJSONParams>(Endpoints.guildMember(guildId, userId), options);
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
    return await super.put<Result>(Endpoints.guildMemberRole(guildId, userId, roleId), options);
  }

  /**
   * @see https://discord.com/developers/docs/resources/guild#modify-guild-onboarding
   */
  async putGuildOnboarding<Result = RESTPutGuildOnboarding>(
    guildId: Snowflake,
    options: PutGuildOnboardingOptions,
  ): Promise<Result> {
    return await super.put<Result, RESTPutGuildOnboardingJSONParams>(Endpoints.guildOnboarding(guildId), options);
  }
}

/**
 * @public
 */
export interface DeleteGuildAutoModerationRuleOptions {
  reason?: string;
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
export interface DeleteGuildSoundboardSoundOptions {
  reason?: string;
}

/**
 * @public
 */
export interface GetGuildAuditLogOptions {
  query?: RESTGetGuildAuditLogStringParams;
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
export interface PatchGuildAutoModerationRuleOptions {
  json: RESTPatchGuildAutoModerationRuleJSONParams;
  reason?: string;
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
export interface PatchGuildOptions {
  json: RESTPatchGuildJSONParams;
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
export interface PatchGuildSoundboardSoundOptions {
  json: RESTPatchGuildSoundboardSoundJSONParams;
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
export interface PostGuildAutoModerationRuleOptions {
  json: RESTPostGuildAutoModerationRuleJSONParams;
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
export interface PostGuildSoundboardSoundOptions {
  json: RESTPostGuildSoundboardSoundJSONParams;
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
