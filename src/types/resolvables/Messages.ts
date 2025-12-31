import type { Snowflake } from '#types/miscellaneous/discord.js';
import type { Embed, MessageComponents, MessageFlags, MessagePoll } from '#types/resources/index.js';
import type { BitField } from '#utils/index.js';

export type MessageComponentResolvable = MessageComponents;
export type MessageEmbedResolvable = Embed[];
export type MessageFlagsResolvable = BitField | MessageFlags | MessageFlags[];
export type MessagePollResolvable = MessagePoll;
export type MessageStickerResolvable = Snowflake;
