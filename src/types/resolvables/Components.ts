import type { ContainerBuilder, SeparatorBuilder, TextDisplayBuilder } from '#builders/index.js';
import type { ContainerComponent, SeparatorComponent, TextDisplayComponent } from '#types/resources/index.js';

export type ContainerComponentResolvable = ContainerBuilder | ContainerComponent;
export type ContainerComponentsResolvable = SeparatorComponentResolvable | TextDisplayComponentResolvable;

export type SeparatorComponentResolvable = SeparatorBuilder | SeparatorComponent;

export type TextDisplayComponentResolvable = TextDisplayBuilder | TextDisplayComponent;
