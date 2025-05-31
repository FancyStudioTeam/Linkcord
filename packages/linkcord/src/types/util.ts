/**
 * @public
 */
// biome-ignore lint/suspicious/noExplicitAny:
export type _Function = (...args: any[]) => any;

/**
 * @public
 */
export type _OmitMethods<Type> = {
  [Key in keyof Type as Type[Key] extends _Function ? never : Key]: Type[Key];
};

/**
 * @public
 */
export type _OmitProperties<Type> = {
  [Key in keyof Type as Type[Key] extends _Function ? Key : never]: Type[Key];
};
