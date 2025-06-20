import type {
  RESTGetDefaultSoundboardSounds,
  RESTGetGateway,
  RESTGetGatewayBot,
  RESTGetSticker,
  RESTGetStickerPack,
  RESTGetStickerPacks,
  RESTGetVoiceRegions,
  Snowflake,
} from "@fancystudioteam/linkcord-types";
import { Endpoints } from "../../utils/index.js";
import { BaseAPI } from "./base/BaseAPI.js";

/**
 * @public
 */
export class Miscellaneous extends BaseAPI {
  /**
   * @see https://discord.com/developers/docs/resources/soundboard#list-default-soundboard-sounds
   */
  async getDefaultSoundboardSounds<Result = RESTGetDefaultSoundboardSounds>(): Promise<Result> {
    return await super.get<Result>(Endpoints.soundboardDefaultSounds());
  }

  /**
   * @see https://discord.com/developers/docs/events/gateway#get-gateway
   */
  async getGateway<Result = RESTGetGateway>(): Promise<Result> {
    return await super.get<Result>(Endpoints.gateway());
  }

  /**
   * @see https://discord.com/developers/docs/events/gateway#get-gateway-bot
   */
  async getGatewayBot<Result = RESTGetGatewayBot>(): Promise<Result> {
    return await super.get<Result>(Endpoints.gatewayBot());
  }

  /**
   * @see https://discord.com/developers/docs/resources/sticker#get-sticker
   */
  async getSticker<Result = RESTGetSticker>(stickerId: Snowflake): Promise<Result> {
    return await super.get<Result>(Endpoints.sticker(stickerId));
  }

  /**
   * @see https://discord.com/developers/docs/resources/sticker#get-sticker-pack
   */
  async getStickerPack<Result = RESTGetStickerPack>(stickerPackId: Snowflake): Promise<Result> {
    return await super.get<Result>(Endpoints.stickerPack(stickerPackId));
  }

  /**
   * @see https://discord.com/developers/docs/resources/sticker#list-sticker-packs
   */
  async getStickerPacks<Result = RESTGetStickerPacks>(): Promise<Result> {
    return await super.get<Result>(Endpoints.stickerPacks());
  }

  /**
   * @see https://discord.com/developers/docs/resources/voice#list-voice-regions
   */
  async getVoiceRegions<Result = RESTGetVoiceRegions>(): Promise<Result> {
    return await super.get<Result>(Endpoints.voiceRegions());
  }
}
