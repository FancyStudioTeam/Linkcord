import { Client } from '#client/structures/Client.js';
import {
	DECORATOR_CAN_ONLY_BE_APPLIED_TO_ACCESSORS,
	DECORATOR_CAN_ONLY_BE_APPLIED_TO_CLASS,
} from '#messages/errors.js';
import { isFunction, isInstanceOf } from '#utils/helpers/AssertionUtils.js';

export function EnsureInitialized() {
	return (_target: object, _propertyKey: PropertyKey, propertyDescriptor: PropertyDescriptor) => {
		const { get } = propertyDescriptor;

		if (!isFunction(get)) {
			throw new TypeError(DECORATOR_CAN_ONLY_BE_APPLIED_TO_ACCESSORS('EnsureInitialized'));
		}

		propertyDescriptor.get = function (this: Client) {
			if (!isInstanceOf(this, Client)) {
				throw new TypeError(
					DECORATOR_CAN_ONLY_BE_APPLIED_TO_CLASS('EnsureInitialized', Client),
				);
			}

			this._checkIsInitialized();

			return get.call(this);
		};
	};
}
