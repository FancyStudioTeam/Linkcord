import type { Client } from "#client/Client.js";
import { CacheManager } from "#client/managers/CacheManager.js";
import { GuildTransformer } from "#structures/transformers/GuildTransformer.js";
import type {
	APIGuild,
	DefaultMessageNotificationLevels,
	ExplicitContentFilterLevels,
	GatewayDispatchGuildCreatePayload,
	GuildFeatures,
	GuildNSFWLevels,
	IncidentsData,
	JSONGuild,
	Locales,
	MFALevels,
	PremiumTiers,
	Snowflake,
	VerificationLevels,
	WelcomeScreen,
} from "#types/index.js";
import { BitFieldResolver } from "#utils/index.js";
import { Base } from "./base/Base.js";
import { Role } from "./Role.js";

/**
 * Represents a Discord guild.
 *
 * @public
 */
export class Guild extends Base {
	/**
	 * The ID of the AFK voice channel, if any.
	 */
	afkChannelId!: Snowflake | null;
	/**
	 * The number of seconds before moving the user to the AFK voice channel.
	 */
	afkTimeout!: number;
	/**
	 * The approximate number of members in the guild.
	 */
	approximateMemberCount!: number | null;
	/**
	 * The approximate number of online members in the guild.
	 */
	approximatePresenceCount!: number | null;
	/**
	 * The banner of the guild, if any.
	 */
	banner!: string | null;
	/**
	 * The default message notification level of the guild.
	 */
	defaultMessageNotifications: DefaultMessageNotificationLevels;
	/**
	 * The description of the guild, if any.
	 */
	description!: string | null;
	/**
	 * The discovery splash of the guild, if any.
	 */
	discoverySplash!: string | null;
	/**
	 * The explicit content filter level of the guild.
	 */
	explicitContentFilter: ExplicitContentFilterLevels;
	/**
	 * The features available of the guild.
	 */
	features!: GuildFeatures[];
	/**
	 * The icon of the guild, if any.
	 */
	icon!: string | null;
	/**
	 * The incidents data of the guild, if any.
	 */
	incidentsData!: IncidentsData | null;
	/**
	 * Whether the guild is considered large.
	 */
	large!: boolean;
	/**
	 * The maximum number of members in the guild.
	 */
	maximumMembers!: number | null;
	/**
	 * The maximum number of presences in the guild.
	 */
	maximumPresences!: number | null;
	/**
	 * The maximum number of users in a stage channel in the guild.
	 */
	maximumStageVideoChannelUsers!: number | null;
	/**
	 * The maximum number of users in a video channel in the guild.
	 */
	maximumVideoChannelUsers!: number | null;
	/**
	 * The member count of the guild.
	 */
	memberCount!: number;
	/**
	 * The MFA level of the guild.
	 */
	mfaLevel: MFALevels;
	/**
	 * The name of the guild.
	 */
	name: string;
	/**
	 * The NSFW level of the guild.
	 */
	nsfwLevel: GuildNSFWLevels;
	/**
	 * The ID of the owner of the guild.
	 */
	readonly ownerId: Snowflake;
	/**
	 * The preferred locale of the guild.
	 */
	preferredLocale: Locales;
	/**
	 * Whether the boost progress bar is enabled.
	 */
	premiumProgressBarEnabled!: boolean;
	/**
	 * The number of boosts of the guild.
	 */
	premiumSubscriptionCount!: number | null;
	/**
	 * The premium tier of the guild.
	 */
	premiumTier: PremiumTiers;
	/**
	 * The ID of the channel where public updates are posted.
	 */
	publicUpdatesChannelId!: Snowflake | null;
	/**
	 * The ID of the guild.
	 */
	readonly id: Snowflake;
	/**
	 * The roles of the guild.
	 */
	readonly roles = new CacheManager<Snowflake, Role>();
	/**
	 * The ID of the rules channel of the guild, if any.
	 */
	rulesChannelId!: Snowflake | null;
	/**
	 * The ID of the safety alerts channel of the guild, if any.
	 */
	safetyAlertsChannelId!: Snowflake | null;
	/**
	 * The splash of the guild, if any.
	 */
	splash!: string | null;
	/**
	 * The flags of the system channel of the guild.
	 */
	systemChannelFlags: BitFieldResolver;
	/**
	 * The ID of the system channel of the guild, if any.
	 */
	systemChannelId!: Snowflake | null;
	/**
	 * The code of the vanity URL of the guild, if any.
	 */
	vanityURLCode!: string | null;
	/**
	 * The verification level of the guild.
	 */
	verificationLevel: VerificationLevels;
	/**
	 * The welcome screen of the guild, if any.
	 */
	welcomeScreen!: WelcomeScreen | null;
	/**
	 * The ID of the widget channel of the guild, if any.
	 */
	widgetChannelId!: Snowflake | null;
	/**
	 * Whether the widget is enabled.
	 */
	widgetEnabled!: boolean;

	/**
	 * Creates a new {@link Guild | `Guild`} instance.
	 *
	 * @param client - The client that instantiated the guild.
	 * @param data - The raw Discord API guild data.
	 */
	constructor(client: Client, data: APIGuild) {
		super(client);

		const {
			id,
			default_message_notifications,
			explicit_content_filter,
			mfa_level,
			name,
			nsfw_level,
			owner_id,
			preferred_locale,
			premium_tier,
			system_channel_flags,
			verification_level,
		} = data;

		this.id = id;
		this.defaultMessageNotifications = default_message_notifications;
		this.explicitContentFilter = explicit_content_filter;
		this.mfaLevel = mfa_level;
		this.name = name;
		this.nsfwLevel = nsfw_level;
		this.ownerId = owner_id;
		this.preferredLocale = preferred_locale;
		this.premiumTier = premium_tier;
		this.systemChannelFlags = new BitFieldResolver(system_channel_flags);
		this.verificationLevel = verification_level;
		this._patch(data);
	}

	/**
	 * @internal
	 */
	protected _patch(data: GuildData = {}): void {
		const {
			afk_channel_id,
			afk_timeout,
			approximate_member_count,
			approximate_presence_count,
			banner,
			default_message_notifications,
			description,
			discovery_splash,
			explicit_content_filter,
			features,
			icon,
			incidents_data,
			large,
			max_members,
			max_presences,
			max_stage_video_channel_users,
			max_video_channel_users,
			member_count,
			mfa_level,
			name,
			nsfw_level,
			preferred_locale,
			premium_progress_bar_enabled,
			premium_subscription_count,
			premium_tier,
			public_updates_channel_id,
			roles,
			rules_channel_id,
			safety_alerts_channel_id,
			splash,
			system_channel_flags,
			system_channel_id,
			vanity_url_code,
			verification_level,
			welcome_screen,
			widget_channel_id,
			widget_enabled,
		} = data;

		if (afk_channel_id) {
			this.afkChannelId = afk_channel_id;
		} else {
			this.afkChannelId ??= null;
		}

		if (afk_timeout) {
			this.afkTimeout = afk_timeout;
		} else {
			this.afkTimeout ??= 0;
		}

		if (approximate_member_count) {
			this.approximateMemberCount = approximate_member_count;
		} else {
			this.approximateMemberCount ??= null;
		}

		if (approximate_presence_count) {
			this.approximatePresenceCount = approximate_presence_count;
		} else {
			this.approximatePresenceCount ??= null;
		}

		if (banner) {
			this.banner = banner;
		} else {
			this.banner ??= null;
		}

		if (default_message_notifications) {
			this.defaultMessageNotifications = default_message_notifications;
		}

		if (description) {
			this.description = description;
		} else {
			this.description ??= null;
		}

		if (discovery_splash) {
			this.discoverySplash = discovery_splash;
		} else {
			this.discoverySplash ??= null;
		}

		if (explicit_content_filter) {
			this.explicitContentFilter = explicit_content_filter;
		}

		if (features) {
			this.features = features;
		} else {
			this.features ??= [];
		}

		if (icon) {
			this.icon = icon;
		} else {
			this.icon ??= null;
		}

		if (incidents_data) {
			this.incidentsData = GuildTransformer.transformIncidentsData(incidents_data);
		} else {
			this.incidentsData ??= null;
		}

		if (large) {
			this.large = large;
		} else {
			this.large ??= false;
		}

		if (max_members) {
			this.maximumMembers = max_members;
		} else {
			this.maximumMembers ??= null;
		}

		if (max_presences) {
			this.maximumPresences = max_presences;
		} else {
			this.maximumPresences ??= null;
		}

		if (max_stage_video_channel_users) {
			this.maximumStageVideoChannelUsers = max_stage_video_channel_users;
		} else {
			this.maximumStageVideoChannelUsers ??= null;
		}

		if (max_video_channel_users) {
			this.maximumVideoChannelUsers = max_video_channel_users;
		} else {
			this.maximumVideoChannelUsers ??= null;
		}

		if (member_count) {
			this.memberCount = member_count;
		} else {
			this.memberCount ??= 0;
		}

		if (mfa_level) {
			this.mfaLevel = mfa_level;
		}

		if (name) {
			this.name = name;
		}

		if (nsfw_level) {
			this.nsfwLevel = nsfw_level;
		}

		if (preferred_locale) {
			this.preferredLocale = preferred_locale;
		}

		if (premium_progress_bar_enabled) {
			this.premiumProgressBarEnabled = premium_progress_bar_enabled;
		} else {
			this.premiumProgressBarEnabled ??= false;
		}

		if (premium_subscription_count) {
			this.premiumSubscriptionCount = premium_subscription_count;
		} else {
			this.premiumSubscriptionCount ??= null;
		}

		if (premium_tier) {
			this.premiumTier = premium_tier;
		}

		if (public_updates_channel_id) {
			this.publicUpdatesChannelId = public_updates_channel_id;
		} else {
			this.publicUpdatesChannelId ??= null;
		}

		if (roles) {
			const { client } = this;

			for (const role of roles) {
				const roleStructure = new Role(client, role, this);

				/**
				 * biome-ignore lint/complexity/useLiteralKeys: Accessing
				 * private members from the manager.
				 */
				this.roles["add"](roleStructure.id, roleStructure);
			}
		}

		if (rules_channel_id) {
			this.rulesChannelId = rules_channel_id;
		} else {
			this.rulesChannelId ??= null;
		}

		if (safety_alerts_channel_id) {
			this.safetyAlertsChannelId = safety_alerts_channel_id;
		} else {
			this.safetyAlertsChannelId ??= null;
		}

		if (splash) {
			this.splash = splash;
		} else {
			this.splash ??= null;
		}

		if (system_channel_flags) {
			this.systemChannelFlags = new BitFieldResolver(system_channel_flags);
		}

		if (system_channel_id) {
			this.systemChannelId = system_channel_id;
		} else {
			this.systemChannelId ??= null;
		}

		if (vanity_url_code) {
			this.vanityURLCode = vanity_url_code;
		} else {
			this.vanityURLCode ??= null;
		}

		if (verification_level) {
			this.verificationLevel = verification_level;
		}

		if (welcome_screen) {
			this.welcomeScreen = GuildTransformer.transformWelcomeScreen(welcome_screen);
		} else {
			this.welcomeScreen ??= null;
		}

		if (widget_channel_id) {
			this.widgetChannelId = widget_channel_id;
		} else {
			this.widgetChannelId ??= null;
		}

		if (widget_enabled) {
			this.widgetEnabled = widget_enabled;
		} else {
			this.widgetEnabled ??= false;
		}
	}

	/**
	 * Converts the {@link Guild | `Guild`} instance to a JSON object.
	 *
	 * @returns The JSON guild data.
	 */
	toJSON(): JSONGuild {
		const {
			afkChannelId,
			afkTimeout,
			approximateMemberCount,
			approximatePresenceCount,
			banner,
			defaultMessageNotifications,
			description,
			discoverySplash,
			explicitContentFilter,
			features,
			icon,
			id,
			incidentsData,
			large,
			maximumMembers,
			maximumPresences,
			maximumStageVideoChannelUsers,
			maximumVideoChannelUsers,
			memberCount,
			mfaLevel,
			name,
			nsfwLevel,
			ownerId,
			preferredLocale,
			premiumProgressBarEnabled,
			premiumSubscriptionCount,
			premiumTier,
			publicUpdatesChannelId,
			roles,
			rulesChannelId,
			safetyAlertsChannelId,
			splash,
			systemChannelFlags,
			systemChannelId,
			vanityURLCode,
			verificationLevel,
			welcomeScreen,
			widgetChannelId,
			widgetEnabled,
		} = this;

		return Object.freeze({
			afkChannelId,
			afkTimeout,
			approximateMemberCount,
			approximatePresenceCount,
			banner,
			defaultMessageNotifications,
			description,
			discoverySplash,
			explicitContentFilter,
			features,
			icon,
			id,
			incidentsData,
			large,
			maximumMembers,
			maximumPresences,
			maximumStageVideoChannelUsers,
			maximumVideoChannelUsers,
			memberCount,
			mfaLevel,
			name,
			nsfwLevel,
			ownerId,
			preferredLocale,
			premiumProgressBarEnabled,
			premiumSubscriptionCount,
			premiumTier,
			publicUpdatesChannelId,
			roles,
			rulesChannelId,
			safetyAlertsChannelId,
			splash,
			systemChannelFlags,
			systemChannelId,
			vanityURLCode,
			verificationLevel,
			welcomeScreen,
			widgetChannelId,
			widgetEnabled,
		});
	}
}

/**
 * @internal
 */
type GuildData = Partial<APIGuild & GatewayDispatchGuildCreatePayload>;
