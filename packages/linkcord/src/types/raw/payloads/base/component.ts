import type { APISelectMenuDefaultValue, ButtonStyles, ComponentTypes } from "../component.js";
import type { APIPartialEmoji } from "../emoji.js";

/**
 * @public
 */
export interface APIActionRowComponentBase<Component> extends APIComponentBase<ComponentTypes.ActionRow> {
  components: Component[];
}

/**
 * @public
 */
export interface APIButtonComponentBase<ButtonStyle extends ButtonStyles>
  extends APIInteractiveComponentBase<ComponentTypes.Button> {
  emoji?: APIPartialEmoji;
  label?: string;
  style: ButtonStyle;
}

/**
 * @public
 */
export interface APIComponentBase<ComponentType extends ComponentTypes> {
  id?: number;
  type: ComponentType;
}

/**
 * @public
 */
export interface APIInteractiveComponentBase<ComponentType extends AnyInteractiveComponent>
  extends APIComponentBase<ComponentType> {
  custom_id: string;
  disabled?: boolean;
}

/**
 * @public
 */
export interface APIResolvedSelectMenuComponentBase<ComponentType extends AnyResolvedSelectMenuType>
  extends APISelectMenuComponentBase<ComponentType> {
  default_values?: APISelectMenuDefaultValue[];
}

/**
 * @public
 */
export interface APISelectMenuComponentBase<ComponentType extends AnySelectMenuType>
  extends APIInteractiveComponentBase<ComponentType> {
  max_values?: number;
  min_values?: number;
  placeholder?: string;
}

/**
 * @public
 */
export type AnyInteractiveComponent =
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
export type AnyResolvedSelectMenuType = Exclude<AnySelectMenuType, ComponentTypes.StringSelect>;

/**
 * @public
 */
export type AnySelectMenuType =
  | ComponentTypes.ChannelSelect
  | ComponentTypes.MentionableSelect
  | ComponentTypes.RoleSelect
  | ComponentTypes.StringSelect
  | ComponentTypes.UserSelect;
