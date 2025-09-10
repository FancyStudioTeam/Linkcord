import type { Snowflake } from "#types/index.js";

/**
 * Utility class for working with Discord markdown.
 * @group Utils/Helpers
 */
export class FormatterUtils {
	/**
	 * Formats a string into bold text.
	 *
	 * @param content - The content to format.
	 * @returns The formatted bold text.
	 *
	 * @typeParam Content - The content to format.
	 */
	static bold<Content extends string>(content: Content): `**${Content}**` {
		return `**${content}**`;
	}

	/**
	 * Formats a channel id into a channel mention.
	 *
	 * @param channelId - The ID of the channel to format.
	 * @returns The formatted channel mention.
	 *
	 * @typeParam ChannelId - The ID of the channel.
	 */
	static channelMention<ChannelId extends Snowflake>(channelId: ChannelId): `<#${ChannelId}>` {
		return `<#${channelId}>`;
	}

	/**
	 * Formats a chat input application command id into a chat input application command mention.
	 *
	 * @param commandName - The name of the chat input application command.
	 * @param commandId - The ID of the chat input application command.
	 * @returns The formatted chat input application command mention.
	 *
	 * @typeParam CommandName - The name of the chat input application command.
	 * @typeParam CommandId - The ID of the chat input application command.
	 */
	static chatInputApplicationCommandMention<CommandName extends string, CommandId extends Snowflake>(
		commandName: CommandName,
		commandId: CommandId,
	): `</${CommandName}:${CommandId}>` {
		return `</${commandName}:${commandId}>`;
	}

	/**
	 * Formats a string into code block.
	 *
	 * @param content - The code to format.
	 * @returns The formatted code block.
	 *
	 * @typeParam Content - The code to format.
	 */
	static codeBlock<Code extends string>(code: Code): `\`\`\`\n${Code}\n\`\`\``;

	/**
	 * Formats a string into code block.
	 *
	 * @param language - The language of the code to format.
	 * @param code - The code to format.
	 * @returns The formatted code block.
	 *
	 * @typeParam Language - The language of the code to format.
	 * @typeParam Code - The code to format.
	 */
	static codeBlock<Language extends string, Code extends string>(
		language: Language,
		code: Code,
	): `\`\`\`${Language}\n${Code}\n\`\`\``;

	/**
	 * Formats a string into code block.
	 *
	 * @param languageOrCode - The language of the code to format or the code to format.
	 * @param possibleCode - The code to format, if any.
	 * @returns The formatted code block.
	 */
	static codeBlock(
		languageOrCode: string,
		possibleCode?: string,
	): `\`\`\`\n${string}\n\`\`\`` | `\`\`\`${string}\n${string}\n\`\`\`` {
		if (typeof possibleCode === "string") {
			return `\`\`\`${languageOrCode}\n${possibleCode}\n\`\`\``;
		}

		return `\`\`\`\n${languageOrCode}\n\`\`\``;
	}

	/**
	 * Formats a string into inline code.
	 *
	 * @param code - The code to format.
	 * @returns The formatted inline code.
	 *
	 * @typeParam Code - The code to format.
	 */
	static inlineCode<Code extends string>(code: Code): `\`${Code}\`` {
		return `\`${code}\``;
	}

	/**
	 * Formats a role id into a role mention.
	 *
	 * @param roleId - The ID of the role to format.
	 * @returns The formatted role mention.
	 *
	 * @typeParam RoleId - The ID of the role.
	 */
	static roleMention<RoleId extends Snowflake>(roleId: RoleId): `<@&${RoleId}>` {
		return `<@&${roleId}>`;
	}

	/**
	 * Formats a user id into a user mention.
	 *
	 * @param userId - The ID of the user to format.
	 * @returns The formatted user mention.
	 *
	 * @typeParam UserId - The ID of the user.
	 */
	static userMention<UserId extends Snowflake>(userId: UserId): `<@${UserId}>` {
		return `<@${userId}>`;
	}
}
