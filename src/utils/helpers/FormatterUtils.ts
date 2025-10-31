import type { Snowflake } from "#types/index.js";
import {
	type CodeBlockLanguage,
	HeadingLevel,
	type HeadingLevelsMap,
	type RecursiveArray,
	type TimestampStyle,
} from "#utils/types/index.js";
import { SnowflakeUtils } from "./SnowflakeUtils.js";

const MAXIMUM_TUPLE_LENGTH = 3;
const MINIMUM_TUPLE_LENGTH = 2;

const ONE_SECOND_MILLISECONDS = 1_000;

/** Utility class for working with Discord markdown. */
export class FormatterUtils {
	/**
	 * Checks whether the given input is a valid heading level.
	 *
	 * @param input - The input to check.
	 */
	static #isValidHeadingLevel(input: unknown): input is HeadingLevel {
		// @ts-expect-error
		return HeadingLevel[input] !== undefined;
	}

	/**
	 * Checks whether the given input is a valid tuple.
	 *
	 * @param input - The input to check.
	 */
	static #isValidTuple(input: unknown): boolean {
		if (!Array.isArray(input)) return false;

		const isValidLength = input.length === MINIMUM_TUPLE_LENGTH || input.length === MAXIMUM_TUPLE_LENGTH;
		const areAllStrings = input.every((item) => typeof item === "string");

		return isValidLength || areAllStrings;
	}

	/**
	 * Formats the given list of items into a markdown list.
	 *
	 * @param items - The list of items to use in the markdown list.
	 * @param startNumber - The number at which the markdown list starts.
	 * @param isMainList - Whether the markdown list is a top-level list.
	 * @param indentLevel - The number of spaces to prepend at the beginning of the markdown list item.
	 */
	static #listCallback(items: RecursiveArray<string>, startNumber = 1, isMainList = true, indentLevel = 0): string {
		const indent = " ".repeat(indentLevel);
		const mark = startNumber ? `${startNumber}.` : "-";

		if (Array.isArray(items)) {
			const spacesToPrepend = isMainList ? 0 : indentLevel + 2;
			const formattedList = items
				.map((item) => FormatterUtils.#listCallback(item, startNumber, false, spacesToPrepend))
				.join("\n");

			return formattedList;
		}

		return `${indent}${mark} ${items}`;
	}

	/**
	 * Formats the given content into a block quote.
	 *
	 * @param content - The content to format.
	 *
	 * @typeParam Content - The inferred type from the `content` parameter.
	 */
	static blockQuote<Content extends string>(content: Content) {
		return `>>> ${content}` as const;
	}

	/**
	 * Formats the given content into a bold text.
	 *
	 * @param content - The content to format.
	 *
	 * @typeParam Content - The inferred type from the `content` parameter.
	 */
	static bold<Content extends string>(content: Content) {
		return `**${content}**` as const;
	}

	/**
	 * Formats the given channel ID into a channel mention.
	 *
	 * @param channelId - The ID of the channel to format.
	 *
	 * @typeParam ChannelId - The inferred type from the `channelId` parameter.
	 */
	static channelMention<ChannelId extends Snowflake>(channelId: ChannelId) {
		if (!SnowflakeUtils.isSnowflake(channelId)) {
			throw new TypeError("First parameter (channelId) from 'FormatterUtils.channelMention' must be a Snowflake");
		}

		return `<#${channelId}>` as const;
	}

	/**
	 * Formats the given command name and command ID into a chat input command mention.
	 *
	 * @param commandName - The name of the chat input command.
	 * @param commandId - The ID of the chat input command.
	 *
	 * @typeParam CommandName - The inferred type from the `commandName` parameter.
	 * @typeParam CommandId - The inferred type from the `commandId` parameter.
	 */
	static chatInputCommandMention<CommandName extends string, CommandId extends Snowflake>(
		commandName: CommandName,
		commandId: CommandId,
	): `</${CommandName}:${CommandId}>`;

	/**
	 * Formats the given list of command names and command ID into a chat input command mention.
	 *
	 * @param commandNames - The name and the subcommand name of the chat input command.
	 * @param commandId - The ID of the chat input command.
	 *
	 * @typeParam CommandName - The inferred type from the first element at the `commandName` parameter.
	 * @typeParam SubcommandName - The inferred type from the second element at the `commandName` parameter.
	 * @typeParam CommandId - The inferred type from the `commandId` parameter.
	 */
	static chatInputCommandMention<
		CommandName extends string,
		SubcommandName extends string,
		CommandId extends Snowflake,
	>(
		commandNames: [CommandName, SubcommandName],
		commandId: CommandId,
	): `</${CommandName} ${SubcommandName}:${CommandId}>`;

	/**
	 * Formats the given list of command names and command ID into a chat input command mention.
	 *
	 * @param commandName - The name, the subcommand group name, and the subcommand name of the chat input command.
	 * @param commandId - The ID of the chat input command.
	 *
	 * @typeParam CommandName - The inferred type from the first element at the `commandName` parameter.
	 * @typeParam SubcommandGroupName - The inferred type from the second element at the `commandName` parameter.
	 * @typeParam SubcommandName - The inferred type from the third element at the `commandName` parameter.
	 * @typeParam CommandId - The inferred type from the `commandId` parameter.
	 */
	static chatInputCommandMention<
		CommandName extends string,
		SubcommandGroupName extends string,
		SubcommandName extends string,
		CommandId extends Snowflake,
	>(
		commandNames: [CommandName, SubcommandGroupName, SubcommandName],
		commandId: CommandId,
	): `</${CommandName} ${SubcommandGroupName} ${SubcommandName}:${CommandId}>`;

	static chatInputCommandMention(commandName: string | string[], commandId: Snowflake) {
		if (Array.isArray(commandName)) {
			if (FormatterUtils.#isValidTuple(commandName)) {
				throw new TypeError(
					"First parameter (commandNames) from 'FormatterUtils.chatInputCommandMention' must be a tuple",
				);
			}

			return `</${commandName.join(" ")}:${commandId}>` as const;
		}

		if (typeof commandName !== "string") {
			throw new TypeError(
				"First parameter (commandNames) from 'FormatterUtils.chatInputCommandMention' must be a string",
			);
		}

		return `</${commandName}:${commandId}>` as const;
	}

	/**
	 * Formats the given content into a code block.
	 *
	 * @param content - The content to format.
	 *
	 * @typeParam Content - The inferred type from the `content` parameter.
	 */
	static codeBlock<Content extends string>(content: Content): `\`\`\`\n${Content}\n\`\`\``;

	/**
	 * Formats the given content into a code block.
	 *
	 * @param language - The language of the code.
	 * @param content - The content to format.
	 *
	 * @typeParam Language - The inferred type from the `language` parameter.
	 * @typeParam Content - The inferred type from the `content` parameter.
	 */
	static codeBlock<Language extends CodeBlockLanguage, Content extends string>(
		language: Language,
		content: Content,
	): `\`\`\`${Language}\n${Content}\n\`\`\``;

	static codeBlock(languageOrContent: CodeBlockLanguage | string, possibleContent?: string): string {
		if (typeof possibleContent === "string") {
			return `\`\`\`${languageOrContent}\n${possibleContent}\n\`\`\`` as const;
		}

		return `\`\`\`\n${languageOrContent}\n\`\`\`` as const;
	}

	/**
	 * Formats the given username and domain into an email mention.
	 *
	 * @param username - The username of the email.
	 * @param domain - The domain of the email.
	 *
	 * @typeParam Username - The inferred type from the `username` parameter.
	 * @typeParam Domain - The inferred type from the `domain` parameter.
	 */
	static email<Username extends string, Domain extends string>(
		username: Username,
		domain: Domain,
	): `<${Username}@${Domain}>`;

	/**
	 * Formats the given username, domain, and headers into an email mention.
	 *
	 * @param username - The username of the email.
	 * @param domain - The domain of the email.
	 * @param headersInit - The headers to append at the end of the email.
	 *
	 * @typeParam Username - The inferred type from the `username` parameter.
	 * @typeParam Domain - The inferred type from the `domain` parameter.
	 */
	static email<Username extends string, Domain extends string>(
		username: Username,
		domain: Domain,
		headersInit: HeadersInit,
	): `<${Username}@${Domain}?${string}>`;

	static email(username: string, domain: string, headersInit?: HeadersInit) {
		const email = `${username}@${domain}`;

		if (headersInit) {
			const headersObject = new Headers(headersInit);
			const headersEntries = headersObject.entries();

			const headersArray = Array.from(headersEntries).map(([key, value]) => `${key}=${value}`);
			const headersString = headersArray.join("&");

			const encodedQueryStringParams = encodeURIComponent(headersString);

			return `<${email}?${encodedQueryStringParams}>` as const;
		}

		return `<${email}>` as const;
	}

	/**
	 * Formats the given content into a header of the first level.
	 *
	 * @param content - The content of the header.
	 *
	 * @typeParam Content - The inferred type from the `content` parameter.
	 */
	static header<Content extends string>(content: Content): `# ${Content}`;

	/**
	 * Formats the given content into a header of the given level.
	 *
	 * @param level - The level of the header.
	 * @param content - The content of the header.
	 *
	 * @typeParam Level - The inferred type from the `level` parameter.
	 * @typeParam Content - The inferred type from the `content` parameter.
	 */
	static header<Level extends HeadingLevel, Content extends string>(
		level: Level,
		content: Content,
	): HeadingLevelsMap<Content>[Level];

	static header(levelOrContent: HeadingLevel | string, possibleContent?: string): string {
		if (typeof levelOrContent === "number") {
			if (!FormatterUtils.#isValidHeadingLevel(levelOrContent)) {
				throw new TypeError(
					"First parameter (level) from 'FormatterUtils.header' must be a valid heading level",
				);
			}

			if (typeof possibleContent !== "string") {
				throw new TypeError("Second parameter (content) from 'FormatterUtils.header' must be a string");
			}

			return `${"#".repeat(levelOrContent)} ${possibleContent}`;
		}

		if (typeof levelOrContent !== "string") {
			throw new TypeError("First parameter (content) from 'FormatterUtils.header' must be a string");
		}

		return `# ${levelOrContent}` as const;
	}

	/**
	 * Formats the given link into a hidden embed link.
	 *
	 * @param url - The {@link URL | `URL`} instance of the embed link.
	 */
	static hideEmbedLink(url: URL): `<${string}>`;

	/**
	 * Formats the given link into a hidden embed link.
	 *
	 * @param url - The URL of the embed link.
	 *
	 * @typeParam Url - The inferred type from the `url` parameter.
	 */
	static hideEmbedLink<Url extends string>(url: Url): `<${Url}>`;

	static hideEmbedLink(url: URL | string): string {
		return `<${url.toString()}>` as const;
	}

	/**
	 * Formats the given content and link into a hyperlink.
	 *
	 * @param content - The content of the hyperlink.
	 * @param url - The {@link URL | `URL`} instance of the hyperlink.
	 *
	 * @typeParam Content - The inferred type from the `content` parameter.
	 */
	static hyperlink<Content extends string>(content: Content, url: URL): `[${Content}](${string})`;

	/**
	 * Formats the given content and link into a hyperlink.
	 *
	 * @param content - The content of the hyperlink.
	 * @param url - The URL of the hyperlink.
	 *
	 * @typeParam Content - The inferred type from the `content` parameter.
	 * @typeParam Url - The inferred type from the `url` parameter.
	 */
	static hyperlink<Content extends string, Url extends string>(content: Content, url: Url): `[${Content}](${Url})`;

	/**
	 * Formats the given content, link, and title into a hyperlink.
	 *
	 * @param content - The content of the hyperlink.
	 * @param url - The {@link URL | `URL`} instance of the hyperlink.
	 * @param title - The title of the hyperlink.
	 *
	 * @typeParam Content - The inferred type from the `content` parameter.
	 * @typeParam Title - The inferred type from the `title` parameter.
	 */
	static hyperlink<Content extends string, Title extends string>(
		content: Content,
		url: URL,
		title: Title,
	): `[${Content}](${string} "${Title}")`;

	/**
	 * Formats the given content, link, and title into a hyperlink.
	 *
	 * @param content - The content of the hyperlink.
	 * @param url - The URL of the hyperlink.
	 * @param title - The title of the hyperlink.
	 *
	 * @typeParam Content - The inferred type from the `content` parameter.
	 * @typeParam Url - The inferred type from the `url` parameter.
	 * @typeParam Title - The inferred type from the `title` parameter.
	 */
	static hyperlink<Content extends string, Url extends string, Title extends string>(
		content: Content,
		url: Url,
		title: Title,
	): `[${Content}](${Url} "${Title}")`;

	static hyperlink(content: string, url: URL | string, possibleTitle?: string): string {
		const urlString = url.toString();

		if (typeof possibleTitle === "string") {
			return `[${content}](${urlString} "${possibleTitle}")` as const;
		}

		return `[${content}](${urlString})` as const;
	}

	/**
	 * Formats the given content into an inline code.
	 *
	 * @param content - The content to format.
	 *
	 * @typeParam Content - The inferred type from the `content` parameter.
	 */
	static inlineCode<Content extends string>(content: Content) {
		return `\`${content}\`` as const;
	}

	/**
	 * Formats the given content into italic text.
	 *
	 * @param content - The content to format.
	 *
	 * @typeParam Content - The inferred type from the `content` parameter.
	 */
	static italic<Content extends string>(content: Content) {
		return `*${content}*` as const;
	}

	/**
	 * Formats the given linked role ID into a linked role mention.
	 *
	 * @param linkedRoleId - The ID of the linked role to format.
	 *
	 * @typeParam LinkedRoleId - The type inferred from the `linkedRoleId` parameter.
	 */
	static linkedRoleMention<LinkedRoleId extends Snowflake>(linkedRoleId: LinkedRoleId) {
		if (!SnowflakeUtils.isSnowflake(linkedRoleId)) {
			throw new TypeError(
				"First parameter (linkedRoleId) from 'FormatterUtils.linkedRoleMention' must be a Snowflake",
			);
		}

		return `<id:linked-roles:${linkedRoleId}>` as const;
	}

	/**
	 * Formats the given items into an ordered list.
	 *
	 * @param items - The items to format.
	 * @param startNumber - The number at which the list starts.
	 */
	static orderedList(items: RecursiveArray<string>, startNumber = 1): string {
		return FormatterUtils.#listCallback(items, Math.max(startNumber, 1));
	}

	/**
	 * Formats the given phone number into a phone number mention.
	 *
	 * @param number - The phone number to format.
	 *
	 * @typeParam Number - The inferred type from the `number` parameter.
	 */
	static phoneNumber<Number extends `+${string}`>(number: Number) {
		if (!number.startsWith("+")) {
			throw new TypeError("First parameter (number) from 'FormatterUtils.phoneNumber' must start with '+'");
		}

		return `<${number}>` as const;
	}

	/**
	 * Formats the given content into a quote.
	 *
	 * @param content - The content to format.
	 *
	 * @typeParam Content - The inferred type from the `content` parameter.
	 */
	static quote<Content extends string>(content: Content) {
		return `> ${content}` as const;
	}

	/**
	 * Formats the given role ID into a role mention.
	 *
	 * @param roleId - The ID of the role to format.
	 *
	 * @typeParam RoleId - The inferred type from the `roleId` parameter.
	 */
	static roleMention<RoleId extends Snowflake>(roleId: RoleId) {
		if (!SnowflakeUtils.isSnowflake(roleId)) {
			throw new TypeError("First parameter (roleId) from 'FormatterUtils.roleMention' must be a Snowflake");
		}

		return `<@&${roleId}>` as const;
	}

	/**
	 * Formats the given content into a spoiler text.
	 *
	 * @param content - The content to format.
	 *
	 * @typeParam Content - The inferred type from the `content` parameter.
	 */
	static spoiler<Content extends string>(content: Content) {
		return `||${content}||` as const;
	}

	/**
	 * Formats the given content into a strikethrough text.
	 *
	 * @param content - The content to format.
	 *
	 * @typeParam Content - The inferred type from the `content` parameter.
	 */
	static strikethrough<Content extends string>(content: Content) {
		return `~~${content}~~` as const;
	}

	/**
	 * Formats the given content into a subtext.
	 *
	 * @param content - The content to format.
	 *
	 * @typeParam Content - The inferred type from the `content` parameter.
	 */
	static subtext<Content extends string>(content: Content) {
		return `-# ${content}` as const;
	}

	/**
	 * Formats the given content into an underline text.
	 *
	 * @param content - The content to format.
	 *
	 * @typeParam Content - The inferred type from the `content` parameter.
	 */
	static underline<Content extends string>(content: Content) {
		return `__${content}__` as const;
	}

	/**
	 * Formats the current or given date into a unix timestamp of the default style.
	 *
	 * @param date - The {@link Date | `Date`} instance to format.
	 */
	static unixTimestamp(date?: Date): `<t:${bigint}>`;

	/**
	 * Formats the given date into a unix timestamp with the given style.
	 *
	 * @param date - The {@link Date | `Date`} instance to format.
	 * @param style - The style of the unix timestamp.
	 */
	static unixTimestamp<Style extends TimestampStyle>(date: Date, style: Style): `<t:${bigint}:${Style}>`;

	/**
	 * Formats the given seconds into a unix timestamp of the default style.
	 *
	 * @param seconds - The seconds to format.
	 *
	 * @typeParam Seconds - The inferred type from the `seconds` parameter.
	 */
	static unixTimestamp<Seconds extends number>(seconds: Seconds): `<t:${Seconds}>`;

	/**
	 * Formats the given seconds into a unix timestamp with the given style.
	 *
	 * @param seconds - The seconds to format.
	 * @param style - The style of the unix timestamp.
	 *
	 * @typeParam Seconds - The inferred type from the `seconds` parameter.
	 * @typeParam Style - The inferred type from the `style` parameter.
	 */
	static unixTimestamp<Seconds extends number, Style extends TimestampStyle>(
		seconds: Seconds,
		style: Style,
	): `<t:${Seconds}:${Style}>`;

	static unixTimestamp(dateOrSeconds?: Date | number, possibleStyle?: TimestampStyle): string {
		if (dateOrSeconds instanceof Date) {
			const dateTime = dateOrSeconds.getTime();
			const unixTimestamp = Math.floor(dateTime / ONE_SECOND_MILLISECONDS);

			if (possibleStyle) {
				return `<t:${unixTimestamp}:${possibleStyle}>` as const;
			}

			return `<t:${unixTimestamp}>` as const;
		}

		if (typeof dateOrSeconds !== "number") {
			throw new TypeError("First parameter (seconds) from 'FormatterUtils.unixTimestamp' must be a number");
		}

		if (possibleStyle) {
			return `<t:${dateOrSeconds}:${possibleStyle}>` as const;
		}

		return `<t:${dateOrSeconds}>` as const;
	}

	/**
	 * Formats the given items into an unordered list.
	 *
	 * @param items - The items to format.
	 */
	static unorderedList(items: RecursiveArray<string>): string {
		return FormatterUtils.#listCallback(items);
	}

	/**
	 * Formats the given user ID into a user mention.
	 *
	 * @param userId - The ID of the user to format.
	 *
	 * @typeParam UserId - The inferred type from the `userId` parameter.
	 */
	static userMention<UserId extends Snowflake>(userId: UserId) {
		if (!SnowflakeUtils.isSnowflake(userId)) {
			throw new TypeError("First parameter (userId) from 'FormatterUtils.userMention' must be a Snowflake");
		}

		return `<@${userId}>` as const;
	}
}
