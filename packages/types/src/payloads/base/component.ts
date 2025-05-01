import type { APISelectMenuDefaultValue, ButtonStyles, ComponentTypes } from "../component.js";
import type { APIPartialEmoji } from "../emoji.js";

/**
 * @public
 */
export interface APIComponentBase<Type extends ComponentTypes> {
  id?: number;
  type: Type;
}

/**
 * @public
 */
export interface APIInteractiveComponentBase<Type extends AnyInteractiveComponent> extends APIComponentBase<Type> {
  custom_id: string;
  disabled?: boolean;
}

/**
 * @public
 */
export interface APIButtonComponentBase<Style extends ButtonStyles>
  extends APIInteractiveComponentBase<ComponentTypes.Button> {
  emoji?: APIPartialEmoji;
  label?: string;
  style: Style;
}

/**
 * @public
 */
export interface APIResolvedSelectMenuComponentBase<Type extends AnyResolvedSelectMenuType>
  extends APISelectMenuComponentBase<Type> {
  default_values?: APISelectMenuDefaultValue[];
}

/**
 * @public
 */
export interface APISelectMenuComponentBase<Type extends AnySelectMenuType> extends APIInteractiveComponentBase<Type> {
  custom_id: string;
  max_values?: number;
  min_values?: number;
  placeholder?: string;
}

/**
 * @public
 */
type AnyInteractiveComponent =
  | ComponentTypes.Button
  | ComponentTypes.ChannelSelect
  | ComponentTypes.MentionableSelect
  | ComponentTypes.RoleSelect
  | ComponentTypes.StringSelect
  | ComponentTypes.TextInput
  | ComponentTypes.UserSelect;

/**
 * @public
 */
type AnyResolvedSelectMenuType = Exclude<AnySelectMenuType, ComponentTypes.StringSelect>;

/**
 * @public
 */
type AnySelectMenuType =
  | ComponentTypes.ChannelSelect
  | ComponentTypes.MentionableSelect
  | ComponentTypes.RoleSelect
  | ComponentTypes.StringSelect
  | ComponentTypes.UserSelect;
