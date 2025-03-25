import type { DiscordGuild, GatewayDispatchGuildCreateEventData, Guild } from "#types";

export class GuildsTransformer {
  rawGuildToParsed(rawGuild: RawGuild): Guild {
    const { id, name } = rawGuild;
    const guild: Guild = {
      id,
      name,
    };

    return guild;
  }
}

type RawGuild = DiscordGuild | GatewayDispatchGuildCreateEventData;
