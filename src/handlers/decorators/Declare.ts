import { defineReadonlyProperty } from '#utils/functions/defineReadonlyProperty.js';
import type { DeclarableConstructor, DeclareOptions } from './Declare.types.js';

export function Declare<Target extends DeclarableConstructor>(declareOptions: DeclareOptions<Target>) {
	return (target: Target) => {
		// @ts-expect-error
		return class extends target {
			constructor(...args: unknown[]) {
				super(...args);

				defineReadonlyProperty(this, 'declareOptions', declareOptions);
			}
		};
	};
}
