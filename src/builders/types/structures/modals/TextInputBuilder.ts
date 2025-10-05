import type { TextInputBuilder } from "#builders/structures/index.js";
import type { TextInputComponent } from "#types/index.js";

/**
 * Represents a text input component that can be set to a {@link ModalBuilder | `ModalBuilder`} instance.
 * @group Builders/Structures
 */
export type AllowedTextInput = TextInputBuilder | TextInputComponent;
