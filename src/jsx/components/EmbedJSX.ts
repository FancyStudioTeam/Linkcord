import type { Embed } from "#types/index.js";
import type { ComponentProperties } from "../runtime.js";

/**
 * @public
 */
export const EmbedJSX = (properties: EmbedJSXProperties): Embed => ({
    ...properties,
});

/**
 * @public
 */
export type EmbedJSXProperties = ComponentProperties<Embed, unknown>;
