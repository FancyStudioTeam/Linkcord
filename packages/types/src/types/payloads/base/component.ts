import type { ButtonStyles, ComponentTypes } from "../component.js";
import type { APIPartialEmoji } from "../emoji.js";

/**
 * https://discord.com/developers/docs/interactions/message-components#component-object-example-component
 */
export interface APIComponentBase<Type extends ComponentTypes> {
  disabled?: boolean;
  type: Type;
}

/**
 * https://discord.com/developers/docs/interactions/message-components#button-object-button-structure
 */
export interface APIButtonComponentBase<Style extends ButtonStyles> extends APIComponentBase<ComponentTypes.Button> {
  emoji?: APIPartialEmoji;
  label?: string;
  style: Style;
}

/**
 * https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-menu-structure
 */
export interface APISelectMenuComponentBase<Type extends AnySelectMenuType> extends APIComponentBase<Type> {
  custom_id: string;
  max_values?: number;
  min_values?: number;
  placeholder?: string;
}

/**
 * https://discord.com/developers/docs/interactions/message-components#select-menu-types
 */
type AnySelectMenuType =
  | ComponentTypes.ChannelSelect
  | ComponentTypes.MentionableSelect
  | ComponentTypes.RoleSelect
  | ComponentTypes.StringSelect
  | ComponentTypes.UserSelect;
