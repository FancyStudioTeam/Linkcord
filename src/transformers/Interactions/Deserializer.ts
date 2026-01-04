import {
	type ApplicationCommandInteractionData,
	ApplicationCommandType,
	type ChatInputApplicationCommandInteractionData,
	type InteractionCallback,
	type InteractionCallbackResponse,
	type RawApplicationCommandInteractionData,
	type RawChatInputApplicationCommandInteractionData,
	type RawInteractionCallback,
	type RawInteractionCallbackResponse,
} from '#types/index.js';
import { isUndefined } from '#utils/helpers/AssertionUtils.js';

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-application-command-data-structure
 */
export function deserializeApplicationCommandInteractionData(
	rawApplicationCommandInteractionData: RawApplicationCommandInteractionData,
): ApplicationCommandInteractionData {
	const { type } = rawApplicationCommandInteractionData;

	switch (type) {
		case ApplicationCommandType.ChatInput:
			return deserializeChatInputApplicationCommandInteractionData(rawApplicationCommandInteractionData);
		default:
			throw new TypeError('Application command type not handled');
	}
}

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-application-command-data-structure
 */
export function deserializeChatInputApplicationCommandInteractionData(
	rawChatInputApplicationCommandInteractionData: RawChatInputApplicationCommandInteractionData,
): ChatInputApplicationCommandInteractionData {
	const { guild_id, id, name, type } = rawChatInputApplicationCommandInteractionData;
	const chatInputApplicationCommandInteractionData: ChatInputApplicationCommandInteractionData = {
		id,
		name,
		type,
	};

	if (!isUndefined(guild_id)) {
		chatInputApplicationCommandInteractionData.guildId = guild_id;
	}

	return chatInputApplicationCommandInteractionData;
}

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-callback-interaction-callback-object
 */
export function deserializeInteractionCallback(rawInteractionCallback: RawInteractionCallback): InteractionCallback {
	const { id, type } = rawInteractionCallback;
	const interactionCallback: InteractionCallback = {
		id,
		type,
	};

	return interactionCallback;
}

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-callback-interaction-callback-response-object
 */
export function deserializeInteractionCallbackResponse(
	rawInteractionCallbackResponse: RawInteractionCallbackResponse,
): InteractionCallbackResponse {
	const { interaction } = rawInteractionCallbackResponse;
	const interactionCallbackResponse: InteractionCallbackResponse = {
		interaction: deserializeInteractionCallback(interaction),
	};

	return interactionCallbackResponse;
}
