import type { FileBuilder, SeparatorBuilder, TextDisplayBuilder } from "#builders/structures/index.js";
import type { FileComponent, SeparatorComponent, TextDisplayComponent } from "#types/index.js";

export type AllowedContainerAccentColor = `#${string}` | number;

export type AllowedContainerComponent =
	| AllowedContainerFileComponent
	| AllowedContainerSeparatorComponent
	| AllowedContainerTextDisplayComponent;

export type AllowedContainerFileComponent = FileBuilder | FileComponent;

export type AllowedContainerSeparatorComponent = SeparatorBuilder | SeparatorComponent;

export type AllowedContainerTextDisplayComponent = TextDisplayBuilder | TextDisplayComponent;
