import type { LabelComponentResolvable, TextDisplayComponentResolvable } from './Components.js';
import type { MessageComponentResolvable, MessageEmbedResolvable, MessageFlagsResolvable, MessagePollResolvable } from './Messages.js';

export type InteractionMessageComponentResolvable = MessageComponentResolvable;
export type InteractionMessageEmbedResolvable = MessageEmbedResolvable;
export type InteractionMessageFlagsResolvable = MessageFlagsResolvable;
export type InteractionMessagePollResolvable = MessagePollResolvable;
export type InteractionModalComponentResolvable = LabelComponentResolvable | TextDisplayComponentResolvable;
