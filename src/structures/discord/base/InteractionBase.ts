import type {
  APIEntitlement,
  APIInteraction,
  InteractionContextTypes,
  InteractionTypes,
  Locale,
  Snowflake,
} from "#types/index.js";
import { Entitlement } from "../Entitlement.js";
import { Base } from "./Base.js";

/**
 * @public
 */
export class InteractionBase<InteractionType extends InteractionTypes> extends Base {
  applicationId: Snowflake;
  attachmentSizeLimit: number;
  channelId: Snowflake | null;
  context: InteractionContextTypes | null;
  entitlements: Map<Snowflake, Entitlement>;
  guildId: Snowflake | null;
  guildLocale: Locale | null;
  locale: Locale;
  token: string;
  type: InteractionType;
  version: 1;

  constructor(id: Snowflake, data: APIInteraction, type: InteractionType) {
    super(id);

    this.applicationId = data.application_id;
    this.attachmentSizeLimit = data.attachment_size_limit;
    this.channelId = data.channel_id ?? null;
    this.context = data.context ?? null;
    this.entitlements = this._transformEntitlements(data.entitlements);
    this.guildId = data.guild_id ?? null;
    this.guildLocale = data.guild_locale ?? null;
    this.locale = data.locale;
    this.token = data.token;
    this.type = type;
    this.version = data.version;
  }

  /**
   * @internal
   */
  private _transformEntitlements(entitlements: APIEntitlement[]): Map<Snowflake, Entitlement> {
    const transformedEntitlements = entitlements.map((entitlement) => new Entitlement(entitlement.id, entitlement));
    const entitlementsMap = transformedEntitlements.map<[Snowflake, Entitlement]>((entitlement) => [
      entitlement.id,
      entitlement,
    ]);

    return new Map(entitlementsMap);
  }
}
