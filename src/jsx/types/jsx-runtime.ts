/**
 * Represents the properties of a `Fragment` component.
 * @group JSX/Types
 * @public
 */
export interface FragmentProperties {
	children: unknown[];
}

/**
 * Represents the properties of a component.
 * @group JSX/Types
 * @public
 */
export type ComponentProperties<Properties, Children> = Properties & {
	children?: Children;
};
