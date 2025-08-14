import { ValiError } from "valibot";
import { describe, expect, it } from "vitest";
import { EmbedFieldBuilder as EmbedFieldBuilderClass } from "../EmbedFieldBuilder.js";

describe("Class: EmbedFieldBuilder", () => {
	it("Should create an embed field.", () => {
		const EmbedFieldBuilder = new EmbedFieldBuilderClass();

		EmbedFieldBuilder.setName("Field Name");
		EmbedFieldBuilder.setValue("Field Value");

		expect(EmbedFieldBuilder.toJSON()).toEqual({
			name: "Field Name",
			value: "Field Value",
		});
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
