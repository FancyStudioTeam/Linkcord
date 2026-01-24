import type {
	ContainerBuilder,
	FileUploadBuilder,
	PremiumButtonBuilder,
	SeparatorBuilder,
	TextDisplayBuilder,
} from '#builders/index.js';
import type {
	ActionRowComponent,
	ContainerComponent,
	FileComponent,
	FileUploadComponent,
	LabelComponent,
	MediaGalleryComponent,
	PremiumButtonComponent,
	SectionComponent,
	SeparatorComponent,
	TextDisplayComponent,
} from '#types/resources/index.js';

export type ActionRowComponentResolvable = ActionRowComponent;

export type ContainerChildComponentResolvable =
	| ActionRowComponentResolvable
	| FileComponentResolvable
	| MediaGalleryComponentResolvable
	| SectionComponentResolvable
	| SeparatorComponentResolvable
	| TextDisplayComponentResolvable;
export type ContainerComponentResolvable = ContainerBuilder | ContainerComponent;

export type FileComponentResolvable = FileComponent;

export type FileUploadComponentResolvable = FileUploadBuilder | FileUploadComponent;

export type LabelComponentResolvable = LabelComponent;

export type MediaGalleryComponentResolvable = MediaGalleryComponent;

export type PremiumButtonResolvable = PremiumButtonBuilder | PremiumButtonComponent;

export type SectionComponentResolvable = SectionComponent;

export type SeparatorComponentResolvable = SeparatorBuilder | SeparatorComponent;

export type TextDisplayComponentResolvable = TextDisplayBuilder | TextDisplayComponent;
