import type { APISelectMenuDefaultValue, ButtonStyles, ComponentTypes } from "../component.js";
import type { APIPartialEmoji } from "../emoji.js";

export interface APIComponentBase<Type extends ComponentTypes> {
  id?: number;
  type: Type;
}

export interface APIInteractiveComponentBase<Type extends AnyInteractiveComponent> extends APIComponentBase<Type> {
  custom_id: string;
  disabled?: boolean;
}

export interface APIButtonComponentBase<Style extends ButtonStyles>
  extends APIInteractiveComponentBase<ComponentTypes.Button> {
  emoji?: APIPartialEmoji;
  label?: string;
  style: Style;
}

export interface APIResolvedSelectMenuComponentBase<Type extends AnyResolvedSelectMenuType>
  extends APISelectMenuComponentBase<Type> {
  default_values?: APISelectMenuDefaultValue[];
}

export interface APISelectMenuComponentBase<Type extends AnySelectMenuType> extends APIInteractiveComponentBase<Type> {
  custom_id: string;
  max_values?: number;
  min_values?: number;
  placeholder?: string;
}

type AnyInteractiveComponent =
  | ComponentTypes.Button
  | ComponentTypes.ChannelSelect
  | ComponentTypes.MentionableSelect
  | ComponentTypes.RoleSelect
  | ComponentTypes.StringSelect
  | ComponentTypes.TextInput
  | ComponentTypes.UserSelect;

type AnyResolvedSelectMenuType = Exclude<AnySelectMenuType, ComponentTypes.StringSelect>;

type AnySelectMenuType =
  | ComponentTypes.ChannelSelect
  | ComponentTypes.MentionableSelect
  | ComponentTypes.RoleSelect
  | ComponentTypes.StringSelect
  | ComponentTypes.UserSelect;
