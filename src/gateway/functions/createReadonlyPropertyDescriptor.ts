/**
 * @internal
 */
export const createReadonlyPropertyDescriptor = <Type>(value: Type): PropertyDescriptor => ({
  configurable: false,
  enumerable: true,
  value,
  writable: false,
});
