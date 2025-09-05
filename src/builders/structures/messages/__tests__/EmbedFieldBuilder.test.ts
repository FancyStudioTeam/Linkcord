import { ValiError } from "valibot";
import { describe, expect, it } from "vitest";
import type { EmbedField } from "#types/index.js";
import { EmbedFieldBuilder as EmbedFieldBuilderClass } from "../EmbedFieldBuilder.js";

describe("Class: EmbedFieldBuilder", () => {
	it('Should return an "EmbedField" object.', () => {
		const EmbedFieldBuilder = new EmbedFieldBuilderClass();
		const ExpectedEmbedFieldResult: EmbedField = {
			name: "Lorem ipsum dolor sit amet",
			value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		};

		EmbedFieldBuilder.setName("Lorem ipsum dolor sit amet");
		EmbedFieldBuilder.setValue("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");

		expect(EmbedFieldBuilder.toJSON()).toEqual(ExpectedEmbedFieldResult);
	});

	it("Should throw an error if some of the required properties are missing.", () => {
		const EmbedFieldBuilder1 = new EmbedFieldBuilderClass();
		const EmbedFieldBuilder2 = new EmbedFieldBuilderClass();

		EmbedFieldBuilder1.setName("Lorem ipsum dolor sit amet");
		EmbedFieldBuilder2.setValue("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");

		expect(() => EmbedFieldBuilder1.toJSON()).toThrow(ValiError);
		expect(() => EmbedFieldBuilder2.toJSON()).toThrow(ValiError);
	});
});
