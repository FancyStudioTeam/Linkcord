import { array, object, string, union } from "zod";
import { TextDisplaySchema } from "../messages/TextDisplaySchema.js";
import { LabelSchema } from "./LabelSchema.js";

const MAXIMUM_MODAL_COMPONENTS_LENGTH = 5;
const MAXIMUM_MODAL_CUSTOM_ID_LENGTH = 100;
const MAXIMUM_MODAL_TITLE_LENGTH = 45;

export const ModalComponentSchema = union([LabelSchema, TextDisplaySchema]);
export const ModalComponentsSchema = array(ModalComponentSchema).min(1).max(MAXIMUM_MODAL_COMPONENTS_LENGTH);
export const ModalCustomIDSchema = string().min(1).max(MAXIMUM_MODAL_CUSTOM_ID_LENGTH);
export const ModalTitleSchema = string().min(1).max(MAXIMUM_MODAL_TITLE_LENGTH);

export const ModalObjectSchema = object({
	customId: ModalCustomIDSchema,
	title: ModalTitleSchema,
});

export const ModalSchema = union([ModalObjectSchema]);
