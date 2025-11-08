import type { Snowflake } from "#types/index.js";
import {
	CodeBlockLanguage,
	HeadingLevel,
	type HeadingLevelsMap,
	type RecursiveArray,
	TimestampStyle,
} from "#utils/types/index.js";
import { AssertionUtils } from "./AssertionUtils.js";

/* --------------------------------------------------------------------------- */

const { isArray, isEnum, isInstanceOf, isNumber, isString } = AssertionUtils;

/* --------------------------------------------------------------------------- */

const MAXIMUM_TUPLE_LENGTH = 3;
const MINIMUM_TUPLE_LENGTH = 2;

const ONE_SECOND_MILLISECONDS = 1_000;

/* --------------------------------------------------------------------------- */

function isChatInputCommandTuple(input: unknown): input is string[] {
	if (!isArray(input)) return false;

	const { length } = input;

	const isValidLength = length >= MINIMUM_TUPLE_LENGTH && length <= MAXIMUM_TUPLE_LENGTH;
	const areAllStrings = input.every((item) => isString(item));

	return isValidLength && areAllStrings;
}

/* --------------------------------------------------------------------------- */

function isHeadingLevel(input: unknown): input is HeadingLevel {
	if (!isNumber(input)) return false;

	return HeadingLevel[input] !== undefined;
}

/* --------------------------------------------------------------------------- */

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

/* --------------------------------------------------------------------------- */

function normalizeChatInputCommandName(commandName: string | string[]): string {
	if (isChatInputCommandTuple(commandName)) {
		return commandName.join(" ");
	}

	return commandName;
}

/* --------------------------------------------------------------------------- */

function blockQuote<Content extends string>(content: Content): `>>> ${Content}` {
	return `>>> ${content}`;
}

/* --------------------------------------------------------------------------- */

function bold<Content extends string>(content: Content): `**${Content}**` {
	return `**${content}**`;
}

/* --------------------------------------------------------------------------- */

function channelMention<ChannelId extends Snowflake>(channelId: ChannelId): `<#${ChannelId}>` {
	return `<#${channelId}>`;
}

/* --------------------------------------------------------------------------- */

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
	const normalizedCommandName = normalizeChatInputCommandName(commandName);

	const commandMention = `</${normalizedCommandName}:${commandId}>`;
	const lowercasedCommandMention = commandMention.toLowerCase();

	return lowercasedCommandMention;
}

/* --------------------------------------------------------------------------- */

function codeBlock<Content extends string>(content: Content): `\`\`\`\n${Content}\n\`\`\``;
function codeBlock<Language extends CodeBlockLanguage, Content extends string>(
	language: Language,
	content: Content,
): `\`\`\`${Language}\n${Content}\n\`\`\``;

function codeBlock(languageOrContent: CodeBlockLanguage | string, possibleContent?: string): string {
	if (isEnum(languageOrContent, CodeBlockLanguage)) {
		return `\`\`\`${languageOrContent}\n${possibleContent}\n\`\`\``;
	}

	return `\`\`\`\n${languageOrContent}\n\`\`\``;
}

/* --------------------------------------------------------------------------- */

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

		return `<${emailBase}?${encodedHeadersParams}>`;
	}

	return `<${emailBase}>`;
}

/* --------------------------------------------------------------------------- */

function header<Content extends string>(content: Content): `# ${Content}`;
function header<Level extends HeadingLevel, Content extends string>(
	level: Level,
	content: Content,
): HeadingLevelsMap<Content>[Level];

function header(levelOrContent: HeadingLevel | string, possibleContent?: string): string {
	if (isHeadingLevel(levelOrContent)) {
		return `${"#".repeat(levelOrContent)} ${possibleContent}`;
	}

	return `# ${levelOrContent}`;
}

/* --------------------------------------------------------------------------- */

function hideEmbedLink(url: URL): `<${string}>`;
function hideEmbedLink<Url extends string>(url: Url): `<${Url}>`;

function hideEmbedLink(url: URL | string): string {
	return `<${url.toString()}>`;
}

/* --------------------------------------------------------------------------- */

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
		return `[${content}](${urlString} "${possibleTitle}")`;
	}

	return `[${content}](${urlString})`;
}

/* --------------------------------------------------------------------------- */

function inlineCode<Content extends string>(content: Content): `\`${Content}\`` {
	return `\`${content}\``;
}

/* --------------------------------------------------------------------------- */

function italic<Content extends string>(content: Content): `*${Content}*` {
	return `*${content}*`;
}

/* --------------------------------------------------------------------------- */

function linkedRoleMention<LinkedRoleId extends Snowflake>(
	linkedRoleId: LinkedRoleId,
): `<id:linked-roles:${LinkedRoleId}>` {
	return `<id:linked-roles:${linkedRoleId}>`;
}

/* --------------------------------------------------------------------------- */

function orderedList(items: RecursiveArray<string>, startNumber = 1): string {
	return listCallback(items, Math.max(startNumber, 1));
}

/* --------------------------------------------------------------------------- */

function phoneNumber<Number extends `+${string}`>(number: Number): `<${Number}>` {
	if (!number.startsWith("+")) {
		throw new TypeError("First parameter (number) from 'FormatterUtils.phoneNumber' must start with '+'");
	}

	return `<${number}>`;
}

/* --------------------------------------------------------------------------- */

function quote<Content extends string>(content: Content): `> ${Content}` {
	return `> ${content}`;
}

/* --------------------------------------------------------------------------- */

function roleMention<RoleId extends Snowflake>(roleId: RoleId): `<@&${RoleId}>` {
	return `<@&${roleId}>`;
}

/* --------------------------------------------------------------------------- */

function spoiler<Content extends string>(content: Content): `||${Content}||` {
	return `||${content}||`;
}

/* --------------------------------------------------------------------------- */

function strikethrough<Content extends string>(content: Content): `~~${Content}~~` {
	return `~~${content}~~`;
}

/* --------------------------------------------------------------------------- */

function subtext<Content extends string>(content: Content): `-# ${Content}` {
	return `-# ${content}`;
}

/* --------------------------------------------------------------------------- */

function underline<Content extends string>(content: Content): `__${Content}__` {
	return `__${content}__`;
}

/* --------------------------------------------------------------------------- */

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
			return `<t:${unixTimestamp}:${possibleStyle}>`;
		}

		return `<t:${unixTimestamp}>`;
	}

	if (isEnum(possibleStyle, TimestampStyle)) {
		return `<t:${dateOrSeconds}:${possibleStyle}>`;
	}

	return `<t:${dateOrSeconds}>`;
}

/* --------------------------------------------------------------------------- */

function unorderedList(items: RecursiveArray<string>): string {
	return listCallback(items);
}

/* --------------------------------------------------------------------------- */

function userMention<UserId extends Snowflake>(userId: UserId): `<@${UserId}>` {
	return `<@${userId}>`;
}

/* --------------------------------------------------------------------------- */

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
