/** Represents the properties of a `Fragment` component. */
export interface FragmentProperties {
	children: unknown[];
}

/** Represents the properties of a JSX component. */
export type ComponentProperties<Properties, Children> = Properties & {
	children?: Children;
};
