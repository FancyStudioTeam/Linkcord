import type { Snowflake } from "@fancystudioteam/linkcord-types";

/**
 * @public
 */
export class Endpoints {
  static guildsVoiceState(guildId: Snowflake, userId: Snowflake | "@me"): string {
    return `guilds/${guildId}/voice-states/${userId}`;
  }

  static voiceRegions(): string {
    return "voice/regions";
  }
}
