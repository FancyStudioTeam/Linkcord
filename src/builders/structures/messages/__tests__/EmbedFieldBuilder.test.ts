import { ValiError } from "valibot";
import { describe, expect, it } from "vitest";
import type { EmbedField } from "#types/index.js";
import { EmbedFieldBuilder as EmbedFieldBuilderClass } from "../EmbedFieldBuilder.js";

describe("Class: EmbedFieldBuilder", () => {
	it("Should create an embed field.", () => {
		const EmbedFieldBuilder = new EmbedFieldBuilderClass();
		const ExpectedEmbedFieldResult: EmbedField = {
			name: "Field Name",
			value: "Field Value",
		};

		EmbedFieldBuilder.setName("Field Name");
		EmbedFieldBuilder.setValue("Field Value");

		expect(EmbedFieldBuilder.toJSON()).toEqual(ExpectedEmbedFieldResult);
	});

	it("Should throw an error if the name or value were not set.", () => {
		const EmbedFieldBuilder1 = new EmbedFieldBuilderClass();
		const EmbedFieldBuilder2 = new EmbedFieldBuilderClass();

		EmbedFieldBuilder1.setName("Field Name");
		EmbedFieldBuilder2.setValue("Field Value");

		expect(() => EmbedFieldBuilder1.toJSON()).toThrowError(ValiError);
		expect(() => EmbedFieldBuilder2.toJSON()).toThrowError(ValiError);
	});
});
