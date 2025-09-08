import { SeparatorBuilder } from "#builders/index.js";
import type { SeparatorProperties } from "#jsx/types/index.js";

/**
 * Creates a {@link SeparatorBuilder | `SeparatorBuilder`} instance using a JSX component.
 * @param properties - The properties of the {@link Separator | `Separator`} JSX component.
 * @returns The created {@link SeparatorBuilder | `SeparatorBuilder`} instance.
 */
export function Separator(properties: SeparatorProperties): SeparatorBuilder {
	const separatorBuilder = new SeparatorBuilder();
	const { divider, spacing } = properties;

	if (divider) separatorBuilder.setDivider(divider);
	if (spacing) separatorBuilder.setSpacing(spacing);

	return separatorBuilder;
}
