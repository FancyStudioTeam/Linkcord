import { SeparatorBuilder } from "#builders/index.js";
import type { SeparatorProperties } from "#jsx/types/index.js";

/**
 * Creates a {@link SeparatorBuilder | `SeparatorBuilder`} instance using JSX.
 * @param properties - The properties to use for the {@link Separator | `Separator`} component.
 * @returns The created {@link SeparatorBuilder | `SeparatorBuilder`} instance.
 */
export function Separator(properties: SeparatorProperties): SeparatorBuilder {
	const separatorBuilder = new SeparatorBuilder();
	const { divider, spacing } = properties;

	divider && separatorBuilder.setDivider(divider);
	spacing && separatorBuilder.setSpacing(spacing);

	return separatorBuilder;
}
