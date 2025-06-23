import type {
  APIChannel,
  APIFollowedChannel,
  APIPrivateThreadChannel,
  APIPublicThreadChannel,
  APIThreadChannel,
  APIThreadMember,
} from "../payloads/channel.js";
import type { APIInvite } from "../payloads/invite.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#add-thread-member
 */
export type RESTAddThreadMember = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#create-channel-invite
 */
export type RESTCreateChannelInvite = APIInvite;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#deleteclose-channel
 */
export type RESTDeleteChannel = APIChannel;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#delete-channel-permission
 */
export type RESTDeleteChannelPermission = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#edit-channel-permissions
 */
export type RESTEditChannelPermissions = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#follow-announcement-channel
 */
export type RESTFollowAnnouncementChannel = APIFollowedChannel;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#get-channel
 */
export type RESTGetChannel = APIChannel;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#get-channel-invites
 */
export type RESTGetChannelInvites = APIInvite[];

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#get-thread-member
 */
export type RESTGetThreadMember = APIThreadMember;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#group-dm-add-recipient
 */
export type RESTGroupDMAddRecipient = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#group-dm-remove-recipient
 */
export type RESTGroupDMRemoveRecipient = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#join-thread
 */
export type RESTJoinThread = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#leave-thread
 */
export type RESTLeaveThread = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#list-joined-private-archived-threads
 */
export type RESTListJoinedPrivateArchivedThreads = APIPrivateThreadChannel[];

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#list-private-archived-threads
 */
export type RESTListPrivateArchivedThreads = APIPrivateThreadChannel[];

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#list-public-archived-threads
 */
export type RESTListPublicArchivedThreads = APIPublicThreadChannel[];

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#list-thread-members
 */
export type RESTListThreadMembers = APIThreadMember[];

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#modify-channel
 */
export type RESTModifyChannel = APIChannel;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#remove-thread-member
 */
export type RESTRemoveThreadMember = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#start-thread-from-channel
 */
export type RESTStartThreadFromMessage = APIThreadChannel;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#start-thread-in-forum-or-media-channel
 */
export type RESTStartThreadInForumOrMediaChannel = APIThreadChannel;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#start-thread-without-message
 */
export type RESTStartThreadWithoutMessage = APIThreadChannel;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#trigger-typing-indicator
 */
export type RESTTriggerTypingIndicator = undefined;
