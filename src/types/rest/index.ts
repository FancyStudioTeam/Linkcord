export * from "./miscellaneous.js";
export * from "./user.js";

/**
 * ====================================================
 * = Enums - Used to define a set of fixed constants. =
 * ====================================================
 */

/**
 * https://discord.com/developers/docs/topics/opcodes-and-status-codes#json-json-error-codes
 */
export enum JSONErrorCodes {
  GeneralError = 0,
  UnknownAccount = 10001,
  UnknownApplication = 10002,
  UnknownChannel = 10003,
  UnknownGuild = 10004,
  UnknownIntegration = 10005,
  UnknownInvite = 10006,
  UnknownMember = 10007,
  UnknownMessage = 10008,
  UnknownPermissionOverwrite = 10009,
  UnknownProvider = 10010,
  UnknownRole = 10011,
  UnknownToken = 10012,
  UnknownUser = 10013,
  UnknownEmoji = 10014,
  UnknownWebhook = 10015,
  UnknownWebhookService = 10016,
  UnknownSession = 10020,
  UnknownAsset = 10021,
  UnknownBan = 10026,
  UnknownSku = 10027,
  UnknownStoreListing = 10028,
  UnknownEntitlement = 10029,
  UnknownBuild = 10030,
  UnknownLobby = 10031,
  UnknownBranch = 10032,
  UnknownStoreDirectory = 10033,
  UnknownRedistributable = 10036,
  UnknownGiftCode = 10038,
  UnknownStream = 10049,
  UnknownPremiumServiceSubscribeCooldown = 10050,
  UnknownGuildTemplate = 10057,
  UnknownDiscoverableServerCategory = 10059,
  UnknownSticker = 10060,
  UnknownStickerPack = 10061,
  UnknownInteraction = 10062,
  UnknownApplicationCommand = 10063,
  UnknownVoiceState = 10065,
  UnknownApplicationCommandPermission = 10066,
  UnknownStageInstance = 10067,
  UnknownGuildMemberVerificationForm = 10068,
  UnknownGuildWelcomeScreen = 10069,
  UnknownGuildScheduledEvent = 10070,
  UnknownGuildScheduledEventUser = 10071,
  UnknownTag = 10087,
  UnknownSound = 10087,
  BotsCannotUseThisEndpoint = 20001,
  OnlyBotsCanUseThisEndpoint = 20002,
  CannotSendExplicitContentToUser = 20009,
  CannotPerformThisActionOnThisApplication = 20012,
  CannotPerformThisActionDueRateLimit = 20016,
  OnlyTheOwnerOfThisAccountCanPerformThisAction = 20018,
  CannotEditMessageDueAnnouncementRateLimit = 20022,
  UnderMinimumAge = 20024,
  ChannelReachedWriteRateLimit = 20028,
  GuildReachedWriteRateLimit = 20029,
  WordsNotAllowed = 20031,
  GuildPremiumSubscriptionTooLow = 20035,
  MaximumNumberOfGuildsReached = 30001,
  MaximumNumberOfFriendsReached = 30002,
  MaximumNumberOfPinsReachedForTheChannel = 30003,
  MaximumNumberOfRecpientsReached = 30004,
  MaximumNumberOfGuildRolesReached = 30005,
  MaximumNumberOfWebhooksReached = 30007,
  MaximumNumberOfEmojisReached = 30008,
  MaximumNumberOfReactionsReached = 30010,
  MaximumNumberOfDMGroupsReached = 30011,
  MaximumNumberOfGuildChannelsReached = 30013,
  MaximumNumberOfAttachmentsInAMessageReached = 30015,
  MaximumNumberOfInvitesReached = 30016,
  MaximumNumberOfAnimatedEmojisReached = 30018,
  MaximumNumberOfGuildMembersReached = 30019,
  MaximumNumberOfGuildCategoriesReached = 30030,
  GuildAlreadyHasATemplate = 30031,
  MaximumNumberOfApplicationCommandsReached = 30032,
  MaximumNumberOfThreadParticipantsReached = 30033,
  MaximumNumberOfDailyApplicationCommandsReached = 30034,
  MaximumNumberOfNonGuildMemberBansExceeded = 30035,
  MaximumNumberOfBanFetchesReached = 30037,
  MaximumNumberOfUncompletedGuildScheduledEventsReached = 30038,
  MaximumNumberOfStickersReached = 30039,
  MaximumNumberOfPruneRequestsReached = 30040,
  MaximumNumberOfGuildWidgetUpdatesReached = 30042,
  MaximumNumberOfSoundboardSoundsReached = 30045,
  MaximumNumberOfMessageEditsOlderThanOneHourReached = 30046,
  MaximumNumberOfPinnedThreadsInAForumReached = 30047,
  MaximumNumberOfTagsInAForumReached = 30048,
  BitrateTooHighForThisChannel = 30052,
  MaximumNumberOfPremiumEmojisReached = 30056,
  MaximumNumberOfWebhooksPerGuildReached = 30058,
  MaximumNumberOfChannelPermissionOverwritesReached = 30060,
  ChannelsForThisGuildAreTooLarge = 30061,
  Unauthorized = 40001,
  VerifyYourAccount = 40002,
  OpeningDirectMessagesTooFast = 40003,
  SendMessagesHasBeenTemporarilyDisabled = 40004,
  RequestEntityTooLarge = 40005,
  FeatureHasBeenTemporarilyDisabled = 40006,
  UserBannedFromThisGuild = 40007,
  ConnectionHasBeenRevoked = 40012,
  OnlyConsumableSkusCanBeConsumed = 40018,
  OnlyDeleteSandboxEntitlements = 40019,
  TargetUserIsNotConnectedToVoice = 40032,
  MessageAlreadyCrossposted = 40033,
  DuplicatedApplicationCommandName = 40041,
  FailedToSendApplicationInteraction = 40043,
  CannotSendAMessageInAForum = 40058,
  InteractionHasAlreadyBeenAcknowledged = 40060,
  TagNamesMustBeUnique = 40061,
  ServiceResourceIsBeingRateLimited = 40062,
  NoAvailableTagsThatCanBeSetByNonModerators = 40066,
  RequiredTagToCreateForumPost = 40067,
  EntitlementAlreadyGrantedForThisResource = 40074,
  InteractionHitTheMaximumNumberOfFollowUpMessages = 40094,
  CloudflareBlockedTheRequest = 40333,
  MissingAccess = 50001,
  InvalidAccountType = 50002,
  CannotExecuteActionOnDMChannel = 50003,
  GuildWidgetDisabled = 50004,
  CannotEditAMessageAuthoredByAnotherUser = 50005,
  CannotSendAnEmptyMessage = 50006,
  CannotSendMessagesToThisUser = 50007,
  CannotSendMessagesInNonTextChannels = 50008,
  ChannelVerificationLevelTooHighForYouToGainAccess = 50009,
  OAuth2ApplicationDoesNotHaveABot = 50010,
  OAuth2ApplicationLimitReached = 50011,
  InvalidOAuth2State = 50012,
  MissingPermissionsToPerformThisAction = 50013,
  InvalidAuthenticationTokenProvided = 50014,
  NoteTooLong = 50015,
  ProvidedTooFewOrTooManyMessagesToDelete = 50016,
  InvalidMFALevel = 50017,
  MessageCanBePinnedOnlyInTheChannelItWasSent = 50019,
  InviteCodeWasEitherInvalidOrTaken = 50020,
  CannotExecuteActionOnSystemMessage = 50021,
  CannotExecuteActionOnThisChannelType = 50024,
  InvalidOAuth2AccessTokenProvided = 50025,
  MissingRequiredoAuth2Scope = 50026,
  InvalidWebhookTokenProvided = 50027,
  InvalidRole = 50028,
  InvalidRecipient = 50033,
  ProvidedMessageWasTooOldToBulkDelete = 50034,
  InvalidFormBodyOrContentType = 50035,
  InviteWasAcceptedToAGuildTheApplicationBotIsNotIn = 50036,
  InvalidActivityAction = 50039,
  InvalidAPIVersion = 50041,
  FileExceedsMaximumSize = 50045,
  InvalidUploadedFile = 50046,
  CannotSelfRedeemThisGift = 50054,
  InvalidGuild = 50055,
  InvalidSku = 50057,
  InvalidRequestOrigin = 50067,
  InvalidMessageType = 50068,
  RequiredPaymentSourceToRedeemGift = 50070,
  CannotModifyASystemWebhook = 50073,
  CannotDeleteARequiredChannelForCommunityGuild = 50074,
  CannotEditSticketsWithinAMessage = 50080,
  InvalidSticker = 50081,
  InvalidActionOnArchivedThread = 50083,
  InvalidThreadNotificationSettings = 50084,
  ParameterEarlierThanCreation = 50085,
  CommunityGuildChannelsMustBeTextChannels = 50086,
  DifferentEntityTypeFromEntityTryingToStartTheEvent = 50091,
  GuildIsNotAvailableInYourLocation = 50095,
  GuildNeedsMonetizationEnabledToPerformThisAction = 50097,
  GuildNeedsMoreBoostsToPerformThisAction = 50101,
  RequestBodyContainsInvalidJSON = 50109,
  InvalidFile = 50110,
  InvalidTypeFile = 50123,
  FileDurationExceedsMaximumLimit = 50124,
  OwnerCannotBeAPendingMember = 50131,
  OwnershipCannotBeTransferredToABotUser = 50132,
  FailedToResizeAsset = 50138,
  CannotMixSubscriptionAndNonSubscriptionRolesForAnEmoji = 50144,
  CannotConvertBetweenPremiumEmojiAndNormalEmoji = 50145,
  UploadedFileNotFound = 50146,
  InvalidEmoji = 50151,
  VoiceMessagesCannotHaveAditionalContent = 50159,
  VoiceMessagesMustHaveASingleAudioAttachment = 50160,
  VoiceMessagesMustHaveSupportingMetadata = 50161,
  CannotEditVoiceMessages = 50162,
  CannotDeleteGuildSubscriptionIntegration = 50163,
  UserMustBeInAVoiceChannelToSendVoiceChannelEffect = 50168,
  CannotSendVoiceMessagesInThisChannel = 50173,
  UserAccountMustBeVerified = 50178,
  FileDoesNotHaveValidDuration = 50192,
  CannotSendThisSticker = 50600,
  RequiredTwoFactorAuthenticationForOperation = 60003,
  NoUsersWithDiscordTag = 80004,
  ReactionWasBlocked = 90001,
  UserCannotUseBurstReactions = 90002,
  ApplicationNotAvailable = 110001,
  APIResourceOverloaded = 130000,
  StageIsAlreadyOpen = 150006,
  CannotReplyWithoutReadMessageHistoryPermission = 160002,
  ThreadAlreadyCreatedForMessage = 160004,
  ThreadIsLocked = 160005,
  MaximumNumberOfActiveThreadsReached = 160006,
  MaximumNumberOfActiveAnnouncementThreadsReached = 160007,
  InvalidJSONForUploadedLottieFile = 170001,
  UploadedLottiesCannotContainRasterizedImages = 170002,
  StickerMaximumFramerateExceeded = 170003,
  StickerFrameCountExceedsMaximumLimit = 170004,
  LottieAnimationMaximumDimensionsExceeded = 170005,
  StickerFrameRateIsTooSmallOrTooLarge = 170006,
  StickerAnimationDurationExceedsMaximumLimit = 170007,
  CannotUpdateAFinishedEvent = 180000,
  FaliedToCreateStageNeededForStageEvent = 180002,
  MessageWasBlockedByAutomaticModeration = 200000,
  TitleWasBlockedByAutomaticModeration = 200001,
  WebhooksPostedToForumsMustHaveAThreadNameOrThreadId = 220001,
  WebhooksPostedToForumsCannotHaveBothThreadNameAndThreadId = 220002,
  WebhooksCanOnlyCreateThreadsInForums = 220003,
  WebhookServicesCannotBeUsedInForums = 220004,
  BlockedMessageByHarmfulLinksFilter = 240000,
  CannotEnableOnboarding = 350000,
  CannotUpdateOnboardingWhileBelowRequeriments = 350001,
  FailedToBanUsers = 500000,
  PollVotingBlocked = 520000,
  PollExpired = 520001,
  InvalidChannelTypeForPollCreation = 520002,
  CannotEditAPollMessage = 520003,
  CannotUseAnEmojiIncludedWithThePoll = 520004,
  CannotExpireANonPollMessage = 520006,
}

/**
 * https://discord.com/developers/docs/topics/opcodes-and-status-codes#http-http-response-codes
 */
export enum RESTStatusCodes {
  Ok = 200,
  Created = 201,
  NoContent = 204,
  NotModified = 304,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  MethodNotAllowed = 405,
  TooManyRequests = 429,
  InternalServerError = 500,
  GatewayUnavailable = 502,
}
