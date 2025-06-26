/**
 * @internal
 */
export const createReadonlyDescriptor = <Type>(value: Type): PropertyDescriptor => ({
  configurable: false,
  enumerable: true,
  value,
  writable: false,
});
