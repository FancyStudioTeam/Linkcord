import type { ComponentProperties } from "#jsx/types/jsx-runtime.js";
import type { SeparatorSpacingSize } from "#types/index.js";

export type SeparatorProperties = ComponentProperties<
	{
		divider?: boolean;
		spacing?: SeparatorSpacingSize;
	},
	SeparatorChildren
>;

export type SeparatorChildren = never;
