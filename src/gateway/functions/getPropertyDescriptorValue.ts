export const getPropertyDescriptorValue = <Required extends boolean = false>(
  object: unknown,
  property: PropertyKey,
  required?: Required,
): Required extends true ? unknown : unknown | undefined => {
  const objectDescriptor = Object.getOwnPropertyDescriptor(object, property);
  const { value } = objectDescriptor ?? {};

  if (!value && required) {
    throw new TypeError(`Cannot get property '${String(property)}' from object.`);
  }

  return value ?? undefined;
};
