import type { Snowflake } from "#types/index.js";
import { ONE_SECOND_MILLISECONDS } from "#utils/Constants.js";
import { isArray, isEnum, isInstanceOf, isNumber, isString } from "./AssertionUtils.js";
import {
	type CodeBlockLanguage,
	HeadingLevel,
	type HeadingLevelsMap,
	type RecursiveArray,
	TimestampStyle,
} from "./FormatterUtils.types.js";

const HEX_COLOR_DIGITS = 6;
const HEXADECIMAL_BASE = 16;

const MAXIMUM_TUPLE_LENGTH = 3;
const MINIMUM_TUPLE_LENGTH = 2;

/**
 * @internal
 */
function isChatInputCommandTuple(input: unknown): input is string[] {
	if (!isArray(input)) return false;

	const { length } = input;

	const isValidLength = length >= MINIMUM_TUPLE_LENGTH && length <= MAXIMUM_TUPLE_LENGTH;
	const areAllStrings = input.every((item) => isString(item));

	return isValidLength && areAllStrings;
}

/**
 * @internal
 */
function isHeadingLevel(input: unknown): input is HeadingLevel {
	return isNumber(input) && HeadingLevel[input] !== undefined;
}

/**
 * @internal
 */
function listCallback(items: RecursiveArray<string>, startNumber = 1, isMainList = true, indentLevel = 0): string {
	const indent = " ".repeat(indentLevel);
	const mark = startNumber ? `${startNumber}.` : "-";

	if (Array.isArray(items)) {
		const spacesToPrepend = isMainList ? 0 : indentLevel + 2;
		const formattedList = items.map((item) => listCallback(item, startNumber, false, spacesToPrepend)).join("\n");

		return formattedList;
	}

	return `${indent}${mark} ${items}`;
}

/**
 * @internal
 */
function normalizeChatInputCommandName(commandName: string | string[]): string {
	return isChatInputCommandTuple(commandName) ? commandName.join(" ") : commandName;
}

export function blockQuote<Content extends string>(content: Content) {
	return `>>> ${content}` as const;
}

export function bold<Content extends string>(content: Content) {
	return `**${content}**` as const;
}

export function channelMention<ChannelId extends Snowflake>(channelId: ChannelId) {
	return `<#${channelId}>` as const;
}

export function chatInputCommandMention<CommandName extends Lowercase<string>, CommandId extends Snowflake>(
	commandName: CommandName,
	commandId: CommandId,
): `</${CommandName}:${CommandId}>`;
export function chatInputCommandMention<
	CommandName extends Lowercase<string>,
	SubcommandName extends Lowercase<string>,
	CommandId extends Snowflake,
>(
	commandNames: [
		CommandName,
		SubcommandName,
	],
	commandId: CommandId,
): `</${CommandName} ${SubcommandName}:${CommandId}>`;
export function chatInputCommandMention<
	CommandName extends Lowercase<string>,
	SubcommandGroupName extends Lowercase<string>,
	SubcommandName extends Lowercase<string>,
	CommandId extends Snowflake,
>(
	commandNames: [
		CommandName,
		SubcommandGroupName,
		SubcommandName,
	],
	commandId: CommandId,
): `</${CommandName} ${SubcommandGroupName} ${SubcommandName}:${CommandId}>`;

export function chatInputCommandMention(commandName: string | string[], commandId: Snowflake): string {
	const normalizedCommandName = normalizeChatInputCommandName(commandName);

	const commandMention = `</${normalizedCommandName}:${commandId}>`;
	const lowercasedCommandMention = commandMention.toLowerCase();

	return lowercasedCommandMention;
}

export function codeBlock<Content extends string>(content: Content): `\`\`\`\n${Content}\n\`\`\``;
export function codeBlock<Language extends CodeBlockLanguage, Content extends string>(
	language: Language,
	content: Content,
): `\`\`\`${Language}\n${Content}\n\`\`\``;

export function codeBlock(languageOrContent: CodeBlockLanguage | string, possibleContent?: string): string {
	if (possibleContent) {
		return `\`\`\`${languageOrContent}\n${possibleContent}\n\`\`\``;
	}

	return `\`\`\`\n${languageOrContent}\n\`\`\``;
}

export function email<Username extends string, Domain extends string>(username: Username, domain: Domain): `<${Username}@${Domain}>`;
export function email<Username extends string, Domain extends string>(
	username: Username,
	domain: Domain,
	headersInit: HeadersInit,
): `<${Username}@${Domain}?${string}>`;

export function email(username: string, domain: string, headersInit?: HeadersInit): string {
	const emailBase = `${username}@${domain}`;

	if (headersInit) {
		const headersObject = new Headers(headersInit);
		const headersEntries = headersObject.entries();

		const headersArray = Array.from(headersEntries).map(([key, value]) => `${key}=${value}`);
		const headersString = headersArray.join("&");

		const encodedHeadersParams = encodeURIComponent(headersString);

		return `<${emailBase}?${encodedHeadersParams}>`;
	}

	return `<${emailBase}>`;
}

export function everyone() {
	return "@everyone" as const;
}

export function header<Content extends string>(content: Content): `# ${Content}`;
export function header<Level extends HeadingLevel, Content extends string>(
	level: Level,
	content: Content,
): HeadingLevelsMap<Content>[Level];

export function header(levelOrContent: HeadingLevel | string, possibleContent?: string): string {
	if (isHeadingLevel(levelOrContent)) {
		return `${"#".repeat(levelOrContent)} ${possibleContent}`;
	}

	return `# ${levelOrContent}`;
}

export function here() {
	return "@here" as const;
}

export function hexColor(color: number) {
	const hexadecimal = color.toString(HEXADECIMAL_BASE);
	const hexColor = `#${hexadecimal.padEnd(HEX_COLOR_DIGITS, "0")}` as const;

	return hexColor;
}

export function hideEmbedLink(url: URL): `<${string}>`;
export function hideEmbedLink<Url extends string>(url: Url): `<${Url}>`;

export function hideEmbedLink(url: URL | string): string {
	return `<${String(url)}>`;
}

export function hyperlink<Content extends string>(content: Content, url: URL): `[${Content}](${string})`;
export function hyperlink<Content extends string, Url extends string>(content: Content, url: Url): `[${Content}](${Url})`;
export function hyperlink<Content extends string, Title extends string>(
	content: Content,
	url: URL,
	title: Title,
): `[${Content}](${string} "${Title}")`;
export function hyperlink<Content extends string, Url extends string, Title extends string>(
	content: Content,
	url: Url,
	title: Title,
): `[${Content}](${Url} "${Title}")`;

export function hyperlink(content: string, url: URL | string, possibleTitle?: string): string {
	const urlString = String(url);

	if (isString(possibleTitle)) {
		return `[${content}](${urlString} "${possibleTitle}")`;
	}

	return `[${content}](${urlString})`;
}

export function inlineCode<Content extends string>(content: Content) {
	return `\`${content}\`` as const;
}

export function italic<Content extends string>(content: Content) {
	return `*${content}*` as const;
}

export function linkedRoleMention<LinkedRoleId extends Snowflake>(linkedRoleId: LinkedRoleId) {
	return `<id:linked-roles:${linkedRoleId}>` as const;
}

export function messageLink<ChannelId extends Snowflake, MessageId extends Snowflake>(
	channelId: ChannelId,
	messageId: MessageId,
): `https://discord.com/channels/@me/${ChannelId}/${MessageId}`;
export function messageLink<GuildId extends Snowflake, ChannelId extends Snowflake, MessageId extends Snowflake>(
	guildId: GuildId,
	channelId: ChannelId,
	messageId: MessageId,
): `https://discord.com/channels/${GuildId}/${ChannelId}/${MessageId}`;

export function messageLink(channelOrGuildId: Snowflake, channelOrMessageId: Snowflake, possibleMessageId?: Snowflake): string {
	if (possibleMessageId) {
		return `https://discord.com/channels/${channelOrGuildId}/${channelOrMessageId}/${possibleMessageId}`;
	}

	return `https://discord.com/channels/@me/${channelOrGuildId}/${channelOrMessageId}`;
}

export function orderedList(items: RecursiveArray<string>, startNumber = 1): string {
	return listCallback(items, Math.max(startNumber, 1));
}

export function phoneNumber<Number extends `+${string}`>(number: Number) {
	if (!number.startsWith("+")) {
		throw new TypeError("First parameter (number) from phoneNumber must start with '+'");
	}

	return `<${number}>` as const;
}

export function quote<Content extends string>(content: Content) {
	return `> ${content}` as const;
}

export function roleMention<RoleId extends Snowflake>(roleId: RoleId) {
	return `<@&${roleId}>` as const;
}

export function shrug() {
	return "¯\\_(ツ)_/¯" as const;
}

export function spoiler<Content extends string>(content: Content) {
	return `||${content}||` as const;
}

export function strikethrough<Content extends string>(content: Content) {
	return `~~${content}~~` as const;
}

export function subtext<Content extends string>(content: Content) {
	return `-# ${content}` as const;
}

export function tableFlip() {
	return "(╯°□°)╯︵ ┻━┻" as const;
}

export function underline<Content extends string>(content: Content) {
	return `__${content}__` as const;
}

export function unflip() {
	return "┬─┬ノ( º _ ºノ)" as const;
}

export function unixTimestamp(date?: Date): `<t:${string}>`;
export function unixTimestamp<Style extends TimestampStyle>(date: Date, style: Style): `<t:${string}:${Style}>`;
export function unixTimestamp<Seconds extends number>(seconds: Seconds): `<t:${Seconds}>`;
export function unixTimestamp<Seconds extends number, Style extends TimestampStyle>(
	seconds: Seconds,
	style: Style,
): `<t:${Seconds}:${Style}>`;

export function unixTimestamp(dateOrSeconds?: Date | number, possibleStyle?: TimestampStyle): string {
	if (isInstanceOf(dateOrSeconds, Date)) {
		const dateTime = dateOrSeconds.getTime();
		const unixTimestamp = Math.floor(dateTime / ONE_SECOND_MILLISECONDS);

		if (possibleStyle) {
			if (!isEnum(possibleStyle, TimestampStyle)) {
				throw new TypeError("Second parameter (style) from unixTimestamp must be an enum");
			}

			return `<t:${unixTimestamp}:${possibleStyle}>`;
		}

		return `<t:${unixTimestamp}>`;
	}

	if (possibleStyle) {
		if (!isEnum(possibleStyle, TimestampStyle)) {
			throw new TypeError("Second parameter (style) from unixTimestamp must be an enum");
		}

		return `<t:${dateOrSeconds}:${possibleStyle}>`;
	}

	return `<t:${dateOrSeconds}>`;
}

export function unorderedList(items: RecursiveArray<string>): string {
	return listCallback(items);
}

export function userMention<UserId extends Snowflake>(userId: UserId) {
	return `<@${userId}>` as const;
}
