import type { TextInputBuilder } from "#builders/structures/index.js";
import type { TextInputComponent } from "#types/index.js";

/**
 * Represents a valid {@link TextInputComponent | `TextInputComponent`} component.
 * @group Builders/Structures
 */
export type AllowedTextInput = TextInputBuilder | TextInputComponent;
