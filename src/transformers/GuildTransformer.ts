import { Role, SoundboardSound } from "#structures/index.js";
import type {
  APIGuildSoundboardSound,
  APIIncidentsData,
  APIRole,
  APIRoleColors,
  APIRoleTags,
  APIWelcomeScreenChannel,
  IncidentsData,
  RoleColors,
  RoleTags,
  Snowflake,
  WelcomeScreen,
  WelcomeScreenChannel,
} from "#types/index.js";
import type { APIWelcomeScreen } from "../../dist/index.mjs";

/**
 * @internal
 */
export class GuildTransformer {
  /**
   * @internal
   */
  static transformIncidentsData(incidentsData: APIIncidentsData | null): IncidentsData | null {
    if (!incidentsData) {
      return null;
    }

    const { dm_spam_detected_at, dms_disabled_until, invites_disabled_until, raid_detected_at } =
      incidentsData;

    return {
      dmSpamDetectedAt: dm_spam_detected_at ? new Date(dm_spam_detected_at) : null,
      dmsDisabledUntil: dms_disabled_until ? new Date(dms_disabled_until) : null,
      invitesDisabledUntil: invites_disabled_until ? new Date(invites_disabled_until) : null,
      raidDetectedAt: raid_detected_at ? new Date(raid_detected_at) : null,
    };
  }

  /**
   * @internal
   */
  static transformRoleColors(colorsData: APIRoleColors): RoleColors {
    const { primary_color, secondary_color, tertiary_color } = colorsData;

    return {
      primaryColor: primary_color,
      secondaryColor: secondary_color ?? null,
      tertiaryColor: tertiary_color ?? null,
    };
  }

  /**
   * @internal
   */
  static transformRoleTags(tagsData?: APIRoleTags): RoleTags | null {
    if (!tagsData) {
      return null;
    }

    const tags: RoleTags = {};
    const {
      available_for_purchase,
      bot_id,
      guild_connections,
      integration_id,
      premium_subscriber,
      subscription_listing_id,
    } = tagsData;

    if (available_for_purchase === null) {
      tags.availableForPurchase = true;
    }

    if (bot_id) {
      tags.botId = bot_id;
    }

    if (guild_connections === null) {
      tags.guildConnections = true;
    }

    if (integration_id) {
      tags.integrationId = integration_id;
    }

    if (premium_subscriber === null) {
      tags.premiumSubscriber = true;
    }

    if (subscription_listing_id) {
      tags.subscriptionListingId = subscription_listing_id;
    }

    return tags;
  }

  /**
   * @internal
   */
  static transformRoles(roles: APIRole[]): Map<Snowflake, Role> {
    const transformedRoles = roles.map((role) => new Role(role.id, role));
    const rolesMap = transformedRoles.map<[Snowflake, Role]>((role) => [role.id, role]);

    return new Map(rolesMap);
  }

  /**
   * @internal
   */
  static transformSoundboardSounds(
    soundboardSounds: APIGuildSoundboardSound[],
  ): Map<Snowflake, SoundboardSound> {
    const transformedSoundboardSounds = soundboardSounds.map(
      (soundboardSound) => new SoundboardSound(soundboardSound.sound_id, soundboardSound),
    );
    const soundboardSoundsMap = transformedSoundboardSounds.map<[Snowflake, SoundboardSound]>(
      (soundboardSound) => [soundboardSound.soundId, soundboardSound],
    );

    return new Map(soundboardSoundsMap);
  }

  /**
   * @internal
   */
  static transformWelcomeScreen(welcomeScreen?: APIWelcomeScreen): WelcomeScreen | null {
    if (!welcomeScreen) {
      return null;
    }

    const { description, welcome_channels } = welcomeScreen;
    const welcomeChannels = welcome_channels.map((welcomeChannel) =>
      GuildTransformer.transformWelcomeScreenChannel(welcomeChannel),
    );

    return {
      description,
      welcomeChannels,
    };
  }

  /**
   * @internal
   */
  static transformWelcomeScreenChannel(
    welcomeScreenChannel: APIWelcomeScreenChannel,
  ): WelcomeScreenChannel {
    const { channel_id, description, emoji_id, emoji_name } = welcomeScreenChannel;

    return {
      channelId: channel_id,
      description,
      emojiId: emoji_id ?? null,
      emojiName: emoji_name ?? null,
    };
  }
}
