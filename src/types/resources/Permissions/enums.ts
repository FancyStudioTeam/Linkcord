/**
 * @see https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags
 */
// biome-ignore-start lint/style/useNamingConvention: (x)
export const PermissionsFlags = {
	AddReactions: 64n,
	Administrator: 8n,
	AttachFiles: 32_768n,
	BanMembers: 4n,
	BypassSlowmode: 4_503_599_627_370_496n,
	ChangeNickname: 67_108_864n,
	Connect: 1_048_576n,
	CreateEvents: 17_592_186_044_416n,
	CreateGuildExpressions: 8_796_093_022_208n,
	CreateInstantInvite: 1n,
	CreatePrivateThreads: 68_719_476_736n,
	CreatePublicThreads: 34_359_738_368n,
	DeafenMembers: 8_388_608n,
	EmbedLinks: 16_384n,
	KickMembers: 2n,
	ManageChannels: 16n,
	ManageEvents: 8_589_934_592n,
	ManageGuild: 32n,
	ManageGuildExpressions: 1_073_741_824n,
	ManageMessages: 8_192n,
	ManageNicknames: 134_217_728n,
	ManageRoles: 268_435_456n,
	ManageThreads: 17_179_869_184n,
	ManageWebhooks: 536_870_912n,
	MentionEveryone: 131_072n,
	ModerateMembers: 1_099_511_627_776n,
	MoveMembers: 16_777_216n,
	MuteMembers: 4_194_304n,
	PinMessages: 2_251_799_813_685_248n,
	PrioritySpeaker: 256n,
	ReadMessageHistory: 65_536n,
	RequestToSpeak: 4_294_967_296n,
	SendMessages: 2_048n,
	SendMessagesInThreads: 274_877_906_944n,
	SendPolls: 562_949_953_421_312n,
	SendTTSMessages: 4_096n,
	SendVoiceMessages: 70_368_744_177_664n,
	Speak: 2_097_152n,
	Stream: 512n,
	UseApplicationCommands: 2_147_483_648n,
	UseEmbeddedActivities: 549_755_813_888n,
	UseExternalApps: 1_125_899_906_842_624n,
	UseExternalEmojis: 262_144n,
	UseExternalSounds: 35_184_372_088_832n,
	UseExternalStickers: 137_438_953_472n,
	UseSoundboard: 4_398_046_511_104n,
	UseVoiceActivityDetection: 33_554_432n,
	ViewAuditLog: 128n,
	ViewChannel: 1_024n,
	ViewCreatorMonetizationAnalytics: 2_199_023_255_552n,
	ViewGuildInsights: 524_288n,
} as const;
// biome-ignore-end lint/style/useNamingConvention: (x)

/**
 * @see https://discord.com/developers/docs/topics/permissions#role-object-role-flags
 */
export enum RoleFlags {
	InPrompt = 1 << 0,
}
