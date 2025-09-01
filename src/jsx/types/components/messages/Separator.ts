import { Separator } from "#jsx/components/index.js";
import type { ComponentProperties } from "#jsx/types/jsx-runtime.js";
import type { SeparatorSpacingSizes } from "#types/index.js";

/** Represents the properties of the {@link Separator | `Separator`} JSX component. */
export type SeparatorProperties = ComponentProperties<
	{
		/** Whether to display a divider between the components. */
		divider?: boolean;
		/** The size of the spacing of the separator. */
		spacing?: SeparatorSpacingSizes;
	},
	SeparatorChildren
>;

/** Represents the children of the {@link Separator | `Separator`} JSX component. */
export type SeparatorChildren = never;
