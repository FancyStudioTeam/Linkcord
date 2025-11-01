import type { Snowflake } from "#types/index.js";
import {
	CodeBlockLanguage,
	HeadingLevel,
	type HeadingLevelsMap,
	type RecursiveArray,
	TimestampStyle,
} from "#utils/types/index.js";
import { AssertionUtils } from "./AssertionUtils.js";

///////////////////////////////////////////////////////////////////////////

const { isArray, isEnum, isInstanceOf, isNumber, isSnowflake, isString } = AssertionUtils;

///////////////////////////////////////////////////////////////////////////

const MAXIMUM_TUPLE_LENGTH = 3;
const MINIMUM_TUPLE_LENGTH = 2;

const ONE_SECOND_MILLISECONDS = 1_000;

///////////////////////////////////////////////////////////////////////////

function _isChatInputCommandTuple(input: unknown): input is string[] {
	if (!isArray(input)) return false;

	const { length } = input;

	const isValidLength = length >= MINIMUM_TUPLE_LENGTH && length <= MAXIMUM_TUPLE_LENGTH;
	const areAllStrings = input.every((item) => typeof item === "string");

	return isValidLength && areAllStrings;
}

///////////////////////////////////////////////////////////////////////////

function _isHeadingLevel(input: unknown): input is HeadingLevel {
	// @ts-expect-error
	return HeadingLevel[input] !== undefined;
}

///////////////////////////////////////////////////////////////////////////

function _listCallback(items: RecursiveArray<string>, startNumber = 1, isMainList = true, indentLevel = 0): string {
	const indent = " ".repeat(indentLevel);
	const mark = startNumber ? `${startNumber}.` : "-";

	if (Array.isArray(items)) {
		const spacesToPrepend = isMainList ? 0 : indentLevel + 2;
		const formattedList = items.map((item) => _listCallback(item, startNumber, false, spacesToPrepend)).join("\n");

		return formattedList;
	}

	return `${indent}${mark} ${items}`;
}

///////////////////////////////////////////////////////////////////////////

function _normalizeChatInputCommandName(commandName: string | string[]): string {
	if (isArray(commandName) && _isChatInputCommandTuple(commandName)) {
		return commandName.join(" ");
	}

	if (!isString(commandName)) {
		throw new TypeError(
			"First parameter (commandName) from 'FormatterUtils.chatInputCommandMention' must be a string",
		);
	}

	return commandName;
}

///////////////////////////////////////////////////////////////////////////

function blockQuote<Content extends string>(content: Content) {
	return `>>> ${content}` as const;
}

///////////////////////////////////////////////////////////////////////////

function bold<Content extends string>(content: Content) {
	return `**${content}**` as const;
}

///////////////////////////////////////////////////////////////////////////

function channelMention<ChannelId extends Snowflake>(channelId: ChannelId) {
	if (!isSnowflake(channelId)) {
		throw new TypeError("First parameter (channelId) from 'FormatterUtils.channelMention' must be a Snowflake");
	}

	return `<#${channelId}>` as const;
}

///////////////////////////////////////////////////////////////////////////

function chatInputCommandMention<CommandName extends Lowercase<string>, CommandId extends Snowflake>(
	commandName: CommandName,
	commandId: CommandId,
): `</${CommandName}:${CommandId}>`;
function chatInputCommandMention<
	CommandName extends Lowercase<string>,
	SubcommandName extends Lowercase<string>,
	CommandId extends Snowflake,
>(
	commandNames: [CommandName, SubcommandName],
	commandId: CommandId,
): `</${CommandName} ${SubcommandName}:${CommandId}>`;
function chatInputCommandMention<
	CommandName extends Lowercase<string>,
	SubcommandGroupName extends Lowercase<string>,
	SubcommandName extends Lowercase<string>,
	CommandId extends Snowflake,
>(
	commandNames: [CommandName, SubcommandGroupName, SubcommandName],
	commandId: CommandId,
): `</${CommandName} ${SubcommandGroupName} ${SubcommandName}:${CommandId}>`;

function chatInputCommandMention(commandName: string | string[], commandId: Snowflake): string {
	const normalizedCommandName = _normalizeChatInputCommandName(commandName);

	if (!isSnowflake(commandId)) {
		throw new TypeError(
			"Second parameter (commandId) from 'FormatterUtils.chatInputCommandMention' must be a Snowflake",
		);
	}

	const commandMention = `</${normalizedCommandName}:${commandId}>`;
	const lowercasedCommandMention = commandMention.toLowerCase();

	return lowercasedCommandMention;
}

///////////////////////////////////////////////////////////////////////////

function codeBlock<Content extends string>(content: Content): `\`\`\`\n${Content}\n\`\`\``;
function codeBlock<Language extends CodeBlockLanguage, Content extends string>(
	language: Language,
	content: Content,
): `\`\`\`${Language}\n${Content}\n\`\`\``;

function codeBlock(languageOrContent: CodeBlockLanguage | string, possibleContent?: string): string {
	if (isString(possibleContent) && isEnum(languageOrContent, CodeBlockLanguage)) {
		return `\`\`\`${languageOrContent}\n${possibleContent}\n\`\`\`` as const;
	}

	return `\`\`\`\n${languageOrContent}\n\`\`\`` as const;
}

///////////////////////////////////////////////////////////////////////////

function email<Username extends string, Domain extends string>(
	username: Username,
	domain: Domain,
): `<${Username}@${Domain}>`;
function email<Username extends string, Domain extends string>(
	username: Username,
	domain: Domain,
	headersInit: HeadersInit,
): `<${Username}@${Domain}?${string}>`;

function email(username: string, domain: string, headersInit?: HeadersInit): string {
	const emailBase = `${username}@${domain}`;

	if (headersInit) {
		const headersObject = new Headers(headersInit);
		const headersEntries = headersObject.entries();

		const headersArray = Array.from(headersEntries).map(([key, value]) => `${key}=${value}`);
		const headersString = headersArray.join("&");

		const encodedHeadersParams = encodeURIComponent(headersString);

		return `<${emailBase}?${encodedHeadersParams}>` as const;
	}

	return `<${emailBase}>` as const;
}

///////////////////////////////////////////////////////////////////////////

function header<Content extends string>(content: Content): `# ${Content}`;
function header<Level extends HeadingLevel, Content extends string>(
	level: Level,
	content: Content,
): HeadingLevelsMap<Content>[Level];

function header(levelOrContent: HeadingLevel | string, possibleContent?: string): string {
	if (isNumber(levelOrContent) && _isHeadingLevel(levelOrContent)) {
		if (!isString(possibleContent)) {
			throw new TypeError("Second parameter (content) from 'FormatterUtils.header' must be a string");
		}

		return `${"#".repeat(levelOrContent)} ${possibleContent}`;
	}

	if (!isString(possibleContent)) {
		throw new TypeError("First parameter (content) from 'FormatterUtils.header' must be a string");
	}

	return `# ${levelOrContent}` as const;
}

///////////////////////////////////////////////////////////////////////////

function hideEmbedLink(url: URL): `<${string}>`;
function hideEmbedLink<Url extends string>(url: Url): `<${Url}>`;

function hideEmbedLink(url: URL | string): string {
	return `<${url.toString()}>` as const;
}

///////////////////////////////////////////////////////////////////////////

function hyperlink<Content extends string>(content: Content, url: URL): `[${Content}](${string})`;
function hyperlink<Content extends string, Url extends string>(content: Content, url: Url): `[${Content}](${Url})`;
function hyperlink<Content extends string, Title extends string>(
	content: Content,
	url: URL,
	title: Title,
): `[${Content}](${string} "${Title}")`;
function hyperlink<Content extends string, Url extends string, Title extends string>(
	content: Content,
	url: Url,
	title: Title,
): `[${Content}](${Url} "${Title}")`;

function hyperlink(content: string, url: URL | string, possibleTitle?: string): string {
	const urlString = url.toString();

	if (isString(possibleTitle)) {
		return `[${content}](${urlString} "${possibleTitle}")` as const;
	}

	return `[${content}](${urlString})` as const;
}

///////////////////////////////////////////////////////////////////////////

function inlineCode<Content extends string>(content: Content) {
	return `\`${content}\`` as const;
}

///////////////////////////////////////////////////////////////////////////

function italic<Content extends string>(content: Content) {
	return `*${content}*` as const;
}

///////////////////////////////////////////////////////////////////////////

function linkedRoleMention<LinkedRoleId extends Snowflake>(linkedRoleId: LinkedRoleId) {
	if (!isSnowflake(linkedRoleId)) {
		throw new TypeError(
			"First parameter (linkedRoleId) from 'FormatterUtils.linkedRoleMention' must be a Snowflake",
		);
	}

	return `<id:linked-roles:${linkedRoleId}>` as const;
}

///////////////////////////////////////////////////////////////////////////

function orderedList(items: RecursiveArray<string>, startNumber = 1): string {
	return _listCallback(items, Math.max(startNumber, 1));
}

///////////////////////////////////////////////////////////////////////////

function phoneNumber<Number extends `+${string}`>(number: Number) {
	if (!number.startsWith("+")) {
		throw new TypeError("First parameter (number) from 'FormatterUtils.phoneNumber' must start with '+'");
	}

	return `<${number}>` as const;
}

///////////////////////////////////////////////////////////////////////////

function quote<Content extends string>(content: Content) {
	return `> ${content}` as const;
}

///////////////////////////////////////////////////////////////////////////

function roleMention<RoleId extends Snowflake>(roleId: RoleId) {
	if (!isSnowflake(roleId)) {
		throw new TypeError("First parameter (roleId) from 'FormatterUtils.roleMention' must be a Snowflake");
	}

	return `<@&${roleId}>` as const;
}

///////////////////////////////////////////////////////////////////////////

function spoiler<Content extends string>(content: Content) {
	return `||${content}||` as const;
}

///////////////////////////////////////////////////////////////////////////

function strikethrough<Content extends string>(content: Content) {
	return `~~${content}~~` as const;
}

///////////////////////////////////////////////////////////////////////////

function subtext<Content extends string>(content: Content) {
	return `-# ${content}` as const;
}

///////////////////////////////////////////////////////////////////////////

function underline<Content extends string>(content: Content) {
	return `__${content}__` as const;
}

///////////////////////////////////////////////////////////////////////////

function unixTimestamp(date?: Date): `<t:${string}>`;
function unixTimestamp<Style extends TimestampStyle>(date: Date, style: Style): `<t:${string}:${Style}>`;
function unixTimestamp<Seconds extends number>(seconds: Seconds): `<t:${Seconds}>`;
function unixTimestamp<Seconds extends number, Style extends TimestampStyle>(
	seconds: Seconds,
	style: Style,
): `<t:${Seconds}:${Style}>`;

function unixTimestamp(dateOrSeconds?: Date | number, possibleStyle?: TimestampStyle): string {
	if (isInstanceOf(dateOrSeconds, Date)) {
		const dateTime = dateOrSeconds.getTime();
		const unixTimestamp = Math.floor(dateTime / ONE_SECOND_MILLISECONDS);

		if (isEnum(possibleStyle, TimestampStyle)) {
			return `<t:${unixTimestamp}:${possibleStyle}>` as const;
		}

		return `<t:${unixTimestamp}>` as const;
	}

	if (!isNumber(dateOrSeconds)) {
		throw new TypeError("First parameter (seconds) from 'FormatterUtils.unixTimestamp' must be a number");
	}

	if (isEnum(possibleStyle, TimestampStyle)) {
		return `<t:${dateOrSeconds}:${possibleStyle}>` as const;
	}

	return `<t:${dateOrSeconds}>` as const;
}

///////////////////////////////////////////////////////////////////////////

function unorderedList(items: RecursiveArray<string>): string {
	return _listCallback(items);
}

///////////////////////////////////////////////////////////////////////////

function userMention<UserId extends Snowflake>(userId: UserId) {
	if (!isSnowflake(userId)) {
		throw new TypeError("First parameter (userId) from 'FormatterUtils.userMention' must be a Snowflake");
	}

	return `<@${userId}>` as const;
}

///////////////////////////////////////////////////////////////////////////

export const FormatterUtils = Object.freeze({
	blockQuote,
	bold,
	channelMention,
	chatInputCommandMention,
	codeBlock,
	email,
	header,
	hideEmbedLink,
	hyperlink,
	inlineCode,
	italic,
	linkedRoleMention,
	orderedList,
	phoneNumber,
	quote,
	roleMention,
	spoiler,
	strikethrough,
	subtext,
	underline,
	unixTimestamp,
	unorderedList,
	userMention,
});
