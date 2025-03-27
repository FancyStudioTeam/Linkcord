import type { RESTManager } from "#rest";
import type { DiscordGateway, DiscordGatewayBot, Gateway, GatewayBot } from "#types/miscellaneous/gateway";
import type { DiscordSoundboardSound, SoundboardSound } from "#types/miscellaneous/soundboard";
import type { Snowflake } from "#types/shared";

export class MiscellaneousTransformer {
  protected _restManager: RESTManager;

  constructor(restManager: RESTManager) {
    this._restManager = restManager;
  }

  /**
   * Transforms a raw gateway bot object into a parsed gateway bot object.
   *
   * @param rawGatewayBot - The raw gateway bot object to transform.
   *
   * @returns The parsed gateway bot object.
   */
  rawGatewayBotToParsed(rawGatewayBot: DiscordGatewayBot): GatewayBot {
    const { session_start_limit, shards, url } = rawGatewayBot;
    const { max_concurrency, remaining, reset_after, total } = session_start_limit;
    const gatewayBot: GatewayBot = {
      sessionStartLimit: {
        maxConcurrency: max_concurrency,
        remaining: remaining,
        resetAfter: reset_after,
        total: total,
      },
      shards,
      url,
    };

    return gatewayBot;
  }

  /**
   * Transforms a raw gateway object into a parsed gateway object.
   *
   * @param rawGateway - The raw gateway object to transform.
   *
   * @returns The parsed gateway object.
   */
  rawGatewayToParsed(rawGateway: DiscordGateway): Gateway {
    const { url } = rawGateway;
    const gateway: Gateway = {
      url,
    };

    return gateway;
  }

  /**
   * Transforms a raw soundboard sound object into a parsed soundboard sound object.
   *
   * @param rawSoundboardSound - The raw soundboard sound object to transform.
   *
   * @returns The parsed soundboard sound object.
   */
  rawSoundboardSoundToParsed(rawSoundboardSound: DiscordSoundboardSound): SoundboardSound {
    const { available, emoji_id, emoji_name, guild_id, name, sound_id, volume } = rawSoundboardSound;
    const SoundboardSoundProperties: SoundboardSoundProperties = {
      available,
      emojiId: emoji_id,
      emojiName: emoji_name,
      guildId: guild_id,
      name,
      soundId: sound_id,
      volume,
    };
    const soundboardSound: SoundboardSound = {
      ...SoundboardSoundProperties,
      sendSoundboardSound: async (channelId: Snowflake, sourceGuildId?: Snowflake) => {
        const { soundId } = SoundboardSoundProperties;
        const { _restManager } = this;
        const { channels } = _restManager;

        await channels.sendSoundboardSound(soundId, channelId, sourceGuildId);
      },
    };

    return soundboardSound;
  }
}

type SoundboardSoundProperties = Omit<SoundboardSound, "sendSoundboardSound">;
