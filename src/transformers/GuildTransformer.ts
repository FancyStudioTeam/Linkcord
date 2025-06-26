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
  static transformRoleTags(tags?: APIRoleTags): RoleTags {
    const {
      available_for_purchase,
      bot_id,
      guild_connections,
      integration_id,
      premium_subscriber,
      subscription_listing_id,
    } = tags ?? {};

    return {
      availableForPurchase: available_for_purchase === null ? true : undefined,
      botId: bot_id ?? undefined,
      guildConnections: guild_connections === null ? true : undefined,
      integrationId: integration_id ?? undefined,
      premiumSubscriber: premium_subscriber === null ? true : undefined,
      subscriptionListingId: subscription_listing_id ?? undefined,
    };
  }
}
