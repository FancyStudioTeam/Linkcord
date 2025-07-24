import * as v from "valibot";
import { GatewayIntents } from "#types/index.js";

const GatewayIntentsEnumSchema = v.enum_(GatewayIntents);
const GatewayIntentsNumberSchema = v.number();
const GatewayIntentsStringsSchema = v.string();

const GatewayIntentsArraySchema = v.pipe(
	v.array(v.union([GatewayIntentsEnumSchema, GatewayIntentsStringsSchema])),
	v.minLength(1),
);
const GatewayIntentsSchema = v.union([GatewayIntentsArraySchema, GatewayIntentsNumberSchema]);

export const ConfigurationSchema = v.object({
	compress: v.optional(v.boolean(), false),
	intents: GatewayIntentsSchema,
	token: v.string(),
});
