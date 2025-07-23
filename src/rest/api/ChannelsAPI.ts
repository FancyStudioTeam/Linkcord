import { Endpoints } from "#rest/endpoints/Endpoints.js";
import { Message } from "#structures/discord/Message.js";
import { User } from "#structures/index.js";
import type {
	RESTGetChannelPollAnswerVoters,
	RESTGetChannelPollAnswerVotersQueryStringParams,
	RESTPostChannelPollExpire,
	Snowflake,
} from "#types/index.js";
import type { GetChannelPollAnswerVotersOptions } from "#types/parsed/rest/Channels.js";
import { BaseAPI } from "./base/BaseAPI.js";

const DEFAULT_POLL_ANSWER_VOTERS_TO_FETCH = 25;

const MAXIMUM_POLL_ANSWER_VOTERS_TO_FETCH = 100;

/**
 * Class that handles all API requests related to channels.
 *
 * @public
 */
export class ChannelsAPI extends BaseAPI {
	/**
	 * Gets the users that voted for the poll answer.
	 *
	 * @param channelId - The ID of the channel at which the poll was created.
	 * @param messageId - The ID of the message that contains the poll.
	 * @param answerId - The ID of the answer to check its voters.
	 * @param options - The options to use when fetching the voters.
	 *
	 * @returns The users that voted for the poll answer.
	 *
	 * @see https://discord.com/developers/docs/resources/poll#get-answer-voters
	 */
	async getChannelPollAnswerVoters(
		channelId: Snowflake,
		messageId: Snowflake,
		answerId: number,
		options: GetChannelPollAnswerVotersOptions = {},
	): Promise<Map<Snowflake, User>> {
		const { client } = this;
		const { users: usersCache } = client;

		const { limit: _limit } = options;

		let limit = _limit ?? DEFAULT_POLL_ANSWER_VOTERS_TO_FETCH;

		const request = async ({
			after,
			limit,
		}: GetChannelPollAnswerVotersOptions = {}): Promise<Map<Snowflake, User>> => {
			const request = await super.get<
				RESTGetChannelPollAnswerVoters,
				RESTGetChannelPollAnswerVotersQueryStringParams
			>(Endpoints.channelPollAnswer(channelId, messageId, answerId), {
				queryString: {
					after,
					limit,
				},
			});

			const { users } = request;

			const userStructures = users.map((user) => new User(client, user));
			const usersIterableMap = userStructures.map<[Snowflake, User]>((user) => {
				const { id: userId } = user;

				/**
				 * biome-ignore lint/complexity/useLiteralKeys: Accessing
				 * private members from the manager.
				 */
				usersCache["add"](userId, user);

				return [userId, user];
			});
			const usersMap = new Map(usersIterableMap);

			return usersMap;
		};

		/**
		 *
		 * Check whether the limit is greater than the maximum amount of
		 * voters to fetch.
		 */
		if (limit > MAXIMUM_POLL_ANSWER_VOTERS_TO_FETCH) {
			const users: User[] = [];
			let continueAfterUserId: Snowflake;

			const iterator = {
				async *[Symbol.asyncIterator]() {
					while (limit > 0) {
						const votersToFetch = Math.min(limit, MAXIMUM_POLL_ANSWER_VOTERS_TO_FETCH);
						const requestOptions: GetChannelPollAnswerVotersOptions = {
							limit: votersToFetch,
						};

						if (continueAfterUserId) {
							requestOptions.after = continueAfterUserId;
						}

						const users = await request(requestOptions);
						const { size: usersLength } = users;

						if (!usersLength) {
							return;
						}

						const usersArray = [...users.values()];
						const { id: lastUserId } = usersArray.at(-1) ?? {};

						if (lastUserId) {
							continueAfterUserId = lastUserId;
						}

						limit -= usersLength;

						yield usersArray;
					}
				},
			};

			for await (const usersChunk of iterator) {
				users.push(...usersChunk);
			}

			const usersIterableMap = users.map<[Snowflake, User]>((user) => [user.id, user]);
			const usersMap = new Map(usersIterableMap);

			return usersMap;
		}

		return await request(options);
	}

	/**
	 * Expires a poll in a channel.
	 *
	 * @param channelId - The ID of the channel at which the poll was created.
	 * @param messageId - The ID of the message associated with the poll.
	 *
	 * @returns The {@link Message | `Message`} associated with the poll.
	 */
	async postChannelPollExpire(channelId: Snowflake, messageId: Snowflake): Promise<Message> {
		const { client } = this;

		const request = await super.post<RESTPostChannelPollExpire>(
			Endpoints.channelPollExpire(channelId, messageId),
		);
		const message = new Message(client, request);

		return message;
	}
}
