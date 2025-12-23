import { serializeMessageComponentsArray } from "#transformers/Components/Serializer.js";
import type { AllowedMentions, APIAllowedMentions, CreateMessageOptions, RESTPostAPIMessageJSONParams } from "#types/index.js";
import { isUndefined } from "#utils/helpers/AssertionUtils.js";
import { normalizeMessageFlags } from "./Normalizer.js";

/**
 * @see https://discord.com/developers/docs/resources/message#allowed-mentions-object
 */
export function serializeAllowedMentions(allowedMentions: AllowedMentions): APIAllowedMentions {
	return {
		parse: allowedMentions.parse,
		replied_user: allowedMentions.repliedUser,
		roles: allowedMentions.roles,
		users: allowedMentions.users,
	};
}

/**
 * @see https://discord.com/developers/docs/resources/message#create-message-jsonform-params
 */
export function serializeCreateMessageOptions(createMessageOptions: CreateMessageOptions): RESTPostAPIMessageJSONParams {
	return {
		allowed_mentions: isUndefined(createMessageOptions.allowedMentions)
			? undefined
			: serializeAllowedMentions(createMessageOptions.allowedMentions),
		components: isUndefined(createMessageOptions.components)
			? undefined
			: serializeMessageComponentsArray(createMessageOptions.components),
		content: createMessageOptions.content,
		flags: isUndefined(createMessageOptions.flags) ? undefined : normalizeMessageFlags(createMessageOptions.flags),
	};
}
