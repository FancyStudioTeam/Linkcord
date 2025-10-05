import type { SelectMenuDefaultValueBuilder } from "#builders/structures/index.js";
import type { SelectMenuDefaultValue } from "#types/index.js";

/**
 * Represents a select menu default value that can be set to a {@link MentionableSelectMenuBuilder | `MentionableSelectMenuBuilder`} instance.
 * @group Builders/Structures
 */
export type AllowedSelectMenuDefaultValue = SelectMenuDefaultValueBuilder | SelectMenuDefaultValue;
