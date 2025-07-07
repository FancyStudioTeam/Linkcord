import { GuildTransformer } from "#structures/transformers/GuildTransformer.js";
import type {
	APIGuild,
	DefaultMessageNotificationLevels,
	ExplicitContentFilterLevels,
	GatewayDispatchGuildCreatePayload,
	GuildFeatures,
	GuildNSFWLevels,
	IncidentsData,
	Locales,
	MFALevels,
	PremiumTiers,
	Snowflake,
	VerificationLevels,
	WelcomeScreen,
} from "#types/index.js";
import { BitFieldResolver } from "#utils/index.js";
import { Base } from "./base/Base.js";

/**
 * @public
 */
/**
 * TODO: Add `voiceAdapterCreator` to support `@discordjs/voice`.
 */
export class Guild extends Base {
	afkChannelId: Snowflake | null;
	afkTimeout: number;
	approximateMemberCount: number | null;
	approximatePresenceCount: number | null;
	banner: string | null;
	defaultMessageNotifications: DefaultMessageNotificationLevels;
	description: string | null;
	discoverySplash!: string | null;
	explicitContentFilter!: ExplicitContentFilterLevels;
	features: GuildFeatures[];
	icon: string | null;
	iconHash: string | null;
	incidentsData: IncidentsData | null;
	large: boolean;
	maximumMembers: number | null;
	maximumPresences: number | null;
	maximumStageVideoChannelUsers: number | null;
	maximumVideoChannelUsers: number | null;
	memberCount: number;
	mfaLevel: MFALevels;
	name: string;
	nsfwLevel: GuildNSFWLevels;
	ownerId: Snowflake;
	preferredLocale: Locales;
	premiumProgressBarEnabled: boolean;
	premiumSubscriptionCount: number | null;
	premiumTier: PremiumTiers;
	publicUpdatesChannelId: Snowflake | null;
	rulesChannelId: Snowflake | null;
	safetyAlertsChannelId: Snowflake | null;
	splash: string | null;
	systemChannelFlags: BitFieldResolver;
	systemChannelId: Snowflake | null;
	vanityURLCode: string | null;
	verificationLevel: VerificationLevels;
	welcomeScreen: WelcomeScreen | null;
	widgetChannelId: Snowflake | null;
	widgetEnabled: boolean;

	constructor(id: Snowflake, data: APIGuild) {
		super(id);

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
			icon_hash,
			incidents_data,
			max_members,
			max_presences,
			max_stage_video_channel_users,
			max_video_channel_users,
			mfa_level,
			name,
			nsfw_level,
			owner_id,
			preferred_locale,
			premium_progress_bar_enabled,
			premium_subscription_count,
			premium_tier,
			public_updates_channel_id,
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

		this.afkChannelId = afk_channel_id;
		this.afkTimeout = afk_timeout;
		this.approximateMemberCount = approximate_member_count ?? null;
		this.approximatePresenceCount = approximate_presence_count ?? null;
		this.banner = banner;
		this.defaultMessageNotifications = default_message_notifications;
		this.description = description;
		this.discoverySplash = discovery_splash;
		this.explicitContentFilter = explicit_content_filter;
		this.features = features;
		this.icon = icon;
		this.iconHash = icon_hash ?? null;
		this.incidentsData = GuildTransformer.transformIncidentsData(incidents_data);
		this.large = false;
		this.maximumMembers = max_members ?? null;
		this.maximumPresences = max_presences ?? null;
		this.maximumStageVideoChannelUsers = max_stage_video_channel_users ?? null;
		this.maximumVideoChannelUsers = max_video_channel_users ?? null;
		this.memberCount = 0;
		this.mfaLevel = mfa_level;
		this.name = name;
		this.nsfwLevel = nsfw_level;
		this.ownerId = owner_id;
		this.preferredLocale = preferred_locale;
		this.premiumProgressBarEnabled = premium_progress_bar_enabled ?? false;
		this.premiumSubscriptionCount = premium_subscription_count ?? null;
		this.premiumTier = premium_tier;
		this.publicUpdatesChannelId = public_updates_channel_id;
		this.rulesChannelId = rules_channel_id;
		this.safetyAlertsChannelId = safety_alerts_channel_id;
		this.splash = splash;
		this.systemChannelFlags = new BitFieldResolver(system_channel_flags);
		this.systemChannelId = system_channel_id;
		this.vanityURLCode = vanity_url_code;
		this.verificationLevel = verification_level;
		this.welcomeScreen = GuildTransformer.transformWelcomeScreen(welcome_screen);
		this.widgetChannelId = widget_channel_id ?? null;
		this.widgetEnabled = widget_enabled ?? false;
		this.patch(data);
	}

	/**
	 * @internal
	 */
	private patch(data: GuildData): void {
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
			icon_hash,
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
			owner_id,
			preferred_locale,
			premium_progress_bar_enabled,
			premium_subscription_count,
			premium_tier,
			public_updates_channel_id,
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
		}

		if (afk_timeout) {
			this.afkTimeout = afk_timeout;
		}

		if (approximate_member_count) {
			this.approximateMemberCount = approximate_member_count;
		}

		if (approximate_presence_count) {
			this.approximatePresenceCount = approximate_presence_count;
		}

		if (banner) {
			this.banner = banner;
		}

		if (default_message_notifications) {
			this.defaultMessageNotifications = default_message_notifications;
		}

		if (description) {
			this.description = description;
		}

		if (discovery_splash) {
			this.discoverySplash = discovery_splash;
		}

		if (explicit_content_filter) {
			this.explicitContentFilter = explicit_content_filter;
		}

		if (features) {
			this.features = features;
		}

		if (icon) {
			this.icon = icon;
		}

		if (icon_hash) {
			this.iconHash = icon_hash;
		}

		if (incidents_data) {
			this.incidentsData = GuildTransformer.transformIncidentsData(incidents_data);
		}

		if (large) {
			this.large = large;
		}

		if (max_members) {
			this.maximumMembers = max_members;
		}

		if (max_presences) {
			this.maximumPresences = max_presences;
		}

		if (max_stage_video_channel_users) {
			this.maximumStageVideoChannelUsers = max_stage_video_channel_users;
		}

		if (max_video_channel_users) {
			this.maximumVideoChannelUsers = max_video_channel_users;
		}

		if (member_count) {
			this.memberCount = member_count;
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

		if (owner_id) {
			this.ownerId = owner_id;
		}

		if (preferred_locale) {
			this.preferredLocale = preferred_locale;
		}

		if (premium_progress_bar_enabled) {
			this.premiumProgressBarEnabled = premium_progress_bar_enabled;
		}

		if (premium_subscription_count) {
			this.premiumSubscriptionCount = premium_subscription_count;
		}

		if (premium_tier) {
			this.premiumTier = premium_tier;
		}

		if (public_updates_channel_id) {
			this.publicUpdatesChannelId = public_updates_channel_id;
		}

		if (rules_channel_id) {
			this.rulesChannelId = rules_channel_id;
		}

		if (safety_alerts_channel_id) {
			this.safetyAlertsChannelId = safety_alerts_channel_id;
		}

		if (splash) {
			this.splash = splash;
		}

		if (system_channel_flags) {
			this.systemChannelFlags = new BitFieldResolver(system_channel_flags);
		}

		if (system_channel_id) {
			this.systemChannelId = system_channel_id;
		}

		if (vanity_url_code) {
			this.vanityURLCode = vanity_url_code;
		}

		if (verification_level) {
			this.verificationLevel = verification_level;
		}

		if (welcome_screen) {
			this.welcomeScreen = GuildTransformer.transformWelcomeScreen(welcome_screen);
		}

		if (widget_channel_id) {
			this.widgetChannelId = widget_channel_id;
		}

		if (widget_enabled) {
			this.widgetEnabled = widget_enabled;
		}
	}
}

/**
 * @internal
 */
type GuildData = Partial<APIGuild & GatewayDispatchGuildCreatePayload>;
