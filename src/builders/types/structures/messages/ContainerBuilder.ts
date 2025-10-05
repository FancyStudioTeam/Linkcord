import type { ContainerBuilder, SeparatorBuilder, TextDisplayBuilder } from "#builders/structures/index.js";
import type { SeparatorComponent, TextDisplayComponent } from "#types/index.js";

/**
 * Represents an accent color that can be set to a {@link ContainerBuilder | `ContainerBuilder`} instance.
 * @group Builders/Structures
 */
export type AllowedContainerAccentColor = `#${string}` | number;

/**
 * Represents a component that can be set to a {@link ContainerBuilder | `ContainerBuilder`} instance.
 * @group Builders/Structures
 */
export type AllowedContainerComponent = AllowedContainerSeparatorComponent | AllowedContainerTextDisplayComponent;

/**
 * Represents a separator component that can be set to a {@link ContainerBuilder | `ContainerBuilder`} instance.
 * @group Builders/Structures
 */
export type AllowedContainerSeparatorComponent = SeparatorBuilder | SeparatorComponent;

/**
 * Represents a text display component that can be set to a {@link ContainerBuilder | `ContainerBuilder`} instance.
 * @group Builders/Structures
 */
export type AllowedContainerTextDisplayComponent = TextDisplayBuilder | TextDisplayComponent;
