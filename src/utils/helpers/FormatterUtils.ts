import type { Snowflake } from "#types/index.js";
import { HeadingLevels, type RecursiveArray } from "#utils/types/index.js";
import { SnowflakeUtils } from "./SnowflakeUtils.js";

/**
 * Creates a list from the given items.
 *
 * @param item - The item of the given items.
 * @param startNumber - The number at which the list should start.
 * @param depth - The depth of the list.
 * @returns The formatted list.
 */
function listCallback(item: RecursiveArray<string>, startNumber?: number, depth = 0): string {
	if (Array.isArray(item)) {
		return item.map((item) => listCallback(item, startNumber, depth + 1)).join("\n");
	}

	return `${"  ".repeat(depth - 1)}${startNumber ? `${startNumber}.` : "-"} ${item}`;
}

/**
 * Utility class for working with Discord markdown.
 * @group Utils/Helpers
 */
export class FormatterUtils {
	/**
	 * Formats the given content into a block quote.
	 *
	 * @param content - The content to format.
	 * @returns The formatted block quote.
	 *
	 * @typeParam Content - The inferred type from the `content` parameter.
	 */
	static blockQuote<Content extends string>(content: Content): `>>> ${Content}` {
		return `>>> ${content}`;
	}

	/**
	 * Formats the given content in a bold text.
	 *
	 * @param content - The content to format.
	 * @returns The formatted bold text.
	 *
	 * @typeParam Content - The inferred type from the `content` parameter.
	 */
	static bold<Content extends string>(content: Content): `**${Content}**` {
		return `**${content}**`;
	}

	/**
	 * Formats the given channel ID into a channel mention.
	 *
	 * @param channelId - The ID of the channel to format.
	 * @returns The formatted channel mention.
	 *
	 * @typeParam ChannelId - The inferred type from the `channelId` parameter.
	 */
	static channelMention<ChannelId extends Snowflake>(channelId: ChannelId): `<#${ChannelId}>` {
		if (!SnowflakeUtils.isSnowflake(channelId)) {
			throw new TypeError("The first parameter (channelId) must be a Snowflake.");
		}

		return `<#${channelId}>`;
	}

	/**
	 * Formats the given content into a code block.
	 *
	 * @param content - The content to format.
	 * @returns The formatted code block.
	 *
	 * @typeParam Content - The inferred type from the `content` parameter.
	 */
	static codeBlock<Content extends string>(content: Content): `\`\`\`\n${Content}\n\`\`\``;

	/**
	 * Formats the given content into a code block.
	 *
	 * @param language - The language of the code to format.
	 * @param content - The content to format.
	 * @returns The formatted code block.
	 *
	 * @typeParam Language - The inferred type from the `language` parameter.
	 * @typeParam Content - The inferred type from the `content` parameter.
	 */
	static codeBlock<Language extends string, Content extends string>(
		language: Language,
		content: Content,
	): `\`\`\`${Language}\n${Content}\n\`\`\``;

	/**
	 * Formats the given content into a code block.
	 *
	 * @param languageOrContent - The language of the code to format or the content to format.
	 * @param possibleContent - The content to format, if the `languageOrContent` parameter is a language.
	 * @returns The formatted code block.
	 */
	static codeBlock(languageOrContent: string, possibleContent?: string): string {
		if (typeof possibleContent === "string") {
			return `\`\`\`${languageOrContent}\n${possibleContent}\n\`\`\``;
		}

		return `\`\`\`\n${languageOrContent}\n\`\`\``;
	}

	/**
	 * Formats the given username and domain into an email.
	 *
	 * @param username - The username of the email.
	 * @param domain - The domain of the email.
	 * @returns The formatted email.
	 *
	 * @typeParam Username - The inferred type from the `username` parameter.
	 * @typeParam Domain - The inferred type from the `domain` parameter.
	 */
	static email<Username extends string, Domain extends string>(
		username: Username,
		domain: Domain,
	): `<${Username}@${Domain}>`;

	/**
	 * Formats the given username, domain, and headers into an email.
	 *
	 * @param username - The username of the email.
	 * @param domain - The domain of the email.
	 * @param headers - The headers of the email.
	 * @returns The formatted email.
	 *
	 * @typeParam Username - The inferred type from the `username` parameter.
	 * @typeParam Domain - The inferred type from the `domain` parameter.
	 */
	static email<Username extends string, Domain extends string>(
		username: Username,
		domain: Domain,
		headers: Record<string, string>,
	): `<${Username}@${Domain}?${string}>`;

	/**
	 * Formats the given username, domain, and headers into an email.
	 *
	 * @param username - The username of the email.
	 * @param domain - The domain of the email.
	 * @param headers - The headers of the email, if provided.
	 * @returns The formatted email.
	 *
	 * @typeParam Username - The inferred type from the `username` parameter.
	 * @typeParam Domain - The inferred type from the `domain` parameter.
	 */
	static email(username: string, domain: string, headers?: Record<string, string>): string {
		const email = `${username}@${domain}`;

		if (headers !== undefined) {
			if (typeof headers !== "object" || headers === null) {
				throw new TypeError("The third parameter (headers) must be a record of strings.");
			}

			const headersEntries = Object.entries(headers);
			const headersArray = headersEntries.map(([key, value]) => `${key}=${value}`).join("&");

			const encodedQueryStringParams = encodeURIComponent(headersArray);

			return `<${email}?${encodedQueryStringParams}>`;
		}

		return `<${email}>`;
	}

	/**
	 * Formats the given content into a header of the first level.
	 *
	 * @param content - The content of the header.
	 * @returns The formatted header.
	 *
	 * @typeParam Content - The inferred type from the `content` parameter.
	 */
	static header<Content extends string>(content: Content): `# ${Content}`;

	/**
	 * Formats the given content into a header of the first level.
	 *
	 * @param level - The level of the header.
	 * @param content - The content of the header.
	 * @returns The formatted header.
	 *
	 * @typeParam Level - The inferred type from the `level` parameter.
	 * @typeParam Content - The inferred type from the `content` parameter.
	 */
	static header<Level extends number, Content extends string>(
		level: Level,
		content: Content,
	): Level extends HeadingLevels.One
		? `# ${Content}`
		: Level extends HeadingLevels.Two
			? `## ${Content}`
			: Level extends HeadingLevels.Three
				? `### ${Content}`
				: `# ${Content}`;

	/**
	 * Formats the given content into a header of the first level or the given level.
	 *
	 * @param levelOrContent - The level of the header or the content of the header.
	 * @param possibleContent - The content of the header, if the `levelOrContent` parameter is a level.
	 * @returns The formatted header.
	 */
	static header(levelOrContent: HeadingLevels | string, possibleContent?: string): string {
		if (typeof levelOrContent === "string") {
			return `# ${levelOrContent}`;
		}

		if (typeof levelOrContent === "number") {
			if (possibleContent === undefined || typeof possibleContent !== "string") {
				throw new TypeError("The second parameter (content) must be present and be a string.");
			}

			if (HeadingLevels[levelOrContent] === undefined) {
				return `# ${possibleContent}`;
			}

			return `${"#".repeat(levelOrContent)} ${possibleContent}`;
		}

		throw new TypeError("The first parameter (levelOrContent) must be a number or string.");
	}

	/**
	 * Formats the given content and link into a hyperlink.
	 *
	 * @param content - The content of the hyperlink.
	 * @param url - The {@link URL | `URL`} instance of the hyperlink.
	 * @returns The formatted hyperlink.
	 *
	 * @typeParam Content - The inferred type from the `content` parameter.
	 */
	static hyperlink<Content extends string>(content: Content, url: URL): `[${Content}](${string})`;

	/**
	 * Formats the given content and link into a hyperlink.
	 *
	 * @param content - The content of the hyperlink.
	 * @param url - The URL of the hyperlink.
	 * @returns The formatted hyperlink.
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
	 * @returns The formatted hyperlink.
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
	 * @returns The formatted hyperlink.
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

	/**
	 * Formats the given content and link into a hyperlink.
	 *
	 * @param content - The content of the hyperlink.
	 * @param url - The URL of the hyperlink.
	 * @param possibleTitle - The title of the hyperlink, if provided.
	 * @returns The formatted hyperlink.
	 */
	static hyperlink(content: string, url: URL | string, possibleTitle?: string): string {
		const urlString = url instanceof URL ? url.toString() : url;

		if (typeof possibleTitle === "string") {
			return `[${content}](${urlString} "${possibleTitle}")`;
		}

		return `[${content}](${urlString})`;
	}

	/**
	 * Formats the given content into an inline code.
	 *
	 * @param content - The content to format.
	 * @returns The formatted inline code.
	 *
	 * @typeParam Content - The inferred type from the `content` parameter.
	 */
	static inlineCode<Content extends string>(content: Content): `\`${Content}\`` {
		return `\`${content}\``;
	}

	/**
	 * Formats the given content into italic text.
	 *
	 * @param content - The content to format.
	 * @returns The formatted italic text.
	 *
	 * @typeParam Content - The inferred type from the `content` parameter.
	 */
	static italic<Content extends string>(content: Content): `*${Content}*` {
		return `*${content}*`;
	}

	/**
	 * Formats the given items into an ordered list.
	 *
	 * @param items - The items to format.
	 * @param startNumber The number at which the list should start.
	 * @returns The formatted ordered list.
	 */
	static orderedList(items: RecursiveArray<string>, startNumber = 1): string {
		return listCallback(items, Math.max(startNumber, 1));
	}

	/**
	 * Formats the given content into a quote.
	 *
	 * @param content - The content to format.
	 * @returns The formatted quote.
	 *
	 * @typeParam Content - The inferred type from the `content` parameter.
	 */
	static quote<Content extends string>(content: Content): `> ${Content}` {
		return `> ${content}`;
	}

	/**
	 * Formats the given role ID into a role mention.
	 *
	 * @param roleId - The ID of the role to format.
	 * @returns The formatted role mention.
	 *
	 * @typeParam RoleId - The inferred type from the `roleId` parameter.
	 */
	static roleMention<RoleId extends Snowflake>(roleId: RoleId): `<@&${RoleId}>` {
		if (!SnowflakeUtils.isSnowflake(roleId)) {
			throw new TypeError("The first parameter (roleId) must be a Snowflake.");
		}

		return `<@&${roleId}>`;
	}

	/**
	 * Formats the given content into a spoiler text.
	 *
	 * @param content - The content to format.
	 * @returns The formatted spoiler text.
	 *
	 * @typeParam Content - The inferred type from the `content` parameter.
	 */
	static spoiler<Content extends string>(content: Content): `||${Content}||` {
		return `||${content}||`;
	}

	/**
	 * Formats the given content into a strikethrough text.
	 *
	 * @param content - The content to format.
	 * @returns The formatted strikethrough text.
	 *
	 * @typeParam Content - The inferred type from the `content` parameter.
	 */
	static strikethrough<Content extends string>(content: Content): `~~${Content}~~` {
		return `~~${content}~~`;
	}

	/**
	 * Formats the given content into a sub-text.
	 *
	 * @param content - The content to format.
	 * @returns The formatted sub-text.
	 *
	 * @typeParam Content - The inferred type from the `content` parameter.
	 */
	static subText<Content extends string>(content: Content): `-# ${Content}` {
		return `-# ${content}`;
	}

	/**
	 * Formats the given content into an under line text.
	 *
	 * @param content - The content to format.
	 * @returns The formatted underline text.
	 *
	 * @typeParam Content - The inferred type from the `content` parameter.
	 */
	static underline<Content extends string>(content: Content): `__${Content}__` {
		return `__${content}__`;
	}

	/**
	 * Formats the given items into an unordered list.
	 *
	 * @param items - The items to format.
	 * @returns The formatted unordered list.
	 */
	static unorderedList(items: RecursiveArray<string>): string {
		return listCallback(items);
	}

	/**
	 * Formats the given user ID into a user mention.
	 *
	 * @param userId - The ID of the user to format.
	 * @returns The formatted user mention.
	 *
	 * @typeParam UserId - The inferred type from the `userId` parameter.
	 */
	static userMention<UserId extends Snowflake>(userId: UserId): `<@${UserId}>` {
		if (!SnowflakeUtils.isSnowflake(userId)) {
			throw new TypeError("The first parameter (userId) must be a Snowflake.");
		}

		return `<@${userId}>`;
	}
}
