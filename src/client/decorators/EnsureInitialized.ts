import { isFunction } from '#utils/helpers/AssertionUtils.js';

export function EnsureInitialized() {
	return (_target: object, _propertyKey: string, propertyDescriptor: PropertyDescriptor) => {
		const { get } = propertyDescriptor;
		const originalGetter = get;

		if (!isFunction(originalGetter)) {
			throw new TypeError(`'${originalGetter}' is not a getter method`);
		}

		propertyDescriptor.get = function () {
			// @ts-expect-error
			this.checkIsInitialized();

			return originalGetter.call(this);
		};
	};
}
