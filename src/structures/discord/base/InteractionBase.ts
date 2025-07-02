import { MonetizationTransformer } from "#structures/transformers/MonetizationTransformer.js";
import type {
	APIInteraction,
	InteractionContextTypes,
	InteractionTypes,
	Locales,
	Snowflake,
} from "#types/index.js";
import type { Entitlement } from "../Entitlement.js";
import { Base } from "./Base.js";

/**
 * @internal
 */
export class InteractionBase<InteractionType extends InteractionTypes> extends Base {
	applicationId: Snowflake;
	attachmentSizeLimit: number;
	channelId: Snowflake | null;
	context: InteractionContextTypes | null;
	entitlements: Map<Snowflake, Entitlement>;
	guildId: Snowflake | null;
	guildLocale: Locales | null;
	locale: Locales;
	token: string;
	type: InteractionType;
	version: 1;

	constructor(id: Snowflake, data: APIInteraction, type: InteractionType) {
		super(id);

		this.applicationId = data.application_id;
		this.attachmentSizeLimit = data.attachment_size_limit;
		this.channelId = data.channel_id ?? null;
		this.context = data.context ?? null;
		this.entitlements = MonetizationTransformer.transformEntitlementsMap(data.entitlements);
		this.guildId = data.guild_id ?? null;
		this.guildLocale = data.guild_locale ?? null;
		this.locale = data.locale;
		this.token = data.token;
		this.type = type;
		this.version = data.version;
	}
}
