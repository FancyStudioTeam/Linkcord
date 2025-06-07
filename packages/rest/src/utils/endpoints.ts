import type { Snowflake } from "@fancystudioteam/linkcord-types";

export const Endpoints = {
  guildsVoiceState: (guildId: Snowflake, userId: Snowflake | "@me") => `guilds/${guildId}/voice-states/${userId}`,
  voiceRegions: () => "voice/regions",
};
