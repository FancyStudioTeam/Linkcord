import type { ContainerComponent } from '#types/index.js';
import type { ContainerBuilder } from './ContainerBuilder.js';
import type { SeparatorComponentResolvable } from './SeparatorBuilder.types.js';
import type { TextDisplayComponentResolvable } from './TextDisplayBuilder.types.js';

export type ContainerComponentResolvable = ContainerBuilder | ContainerComponent;
export type ContainerComponentsResolvable = SeparatorComponentResolvable | TextDisplayComponentResolvable;
