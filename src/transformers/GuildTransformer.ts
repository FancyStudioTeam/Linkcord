import type { APIRoleColors, APIRoleTags, RoleColors, RoleTags } from "#types/index.js";

/**
 * @internal
 */
export class GuildTransformer {
  /**
   * @internal
   */
  static transformRoleColors(colors: APIRoleColors): RoleColors {
    const { primary_color, secondary_color, tertiary_color } = colors;

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
}
