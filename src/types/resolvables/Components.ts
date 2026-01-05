import type { ContainerBuilder, SeparatorBuilder, TextDisplayBuilder } from '#builders/index.js';
import type {
	ActionRowComponent,
	ContainerComponent,
	FileComponent,
	LabelComponent,
	MediaGalleryComponent,
	SectionComponent,
	SeparatorComponent,
	TextDisplayComponent,
} from '#types/resources/index.js';

export type ActionRowComponentResolvable = ActionRowComponent;

export type ContainerComponentResolvable = ContainerBuilder | ContainerComponent;
export type ContainerComponentsResolvable = SeparatorComponentResolvable | TextDisplayComponentResolvable;

export type FileComponentResolvable = FileComponent;

export type LabelComponentResolvable = LabelComponent;

export type MediaGalleryComponentResolvable = MediaGalleryComponent;

export type SectionComponentResolvable = SectionComponent;

export type SeparatorComponentResolvable = SeparatorBuilder | SeparatorComponent;

export type TextDisplayComponentResolvable = TextDisplayBuilder | TextDisplayComponent;
