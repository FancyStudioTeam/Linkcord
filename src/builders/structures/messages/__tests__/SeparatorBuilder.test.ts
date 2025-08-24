import { describe, expect, it } from "vitest";
import { ComponentTypes, type SeparatorComponent, SeparatorSpacingSizes } from "#types/index.js";
import { SeparatorBuilder as SeparatorBuilderClass } from "../SeparatorBuilder.js";

describe("Class: SeparatorBuilder", () => {
	it("Should create a separator component.", () => {
		const SeparatorBuilder = new SeparatorBuilderClass();
		const ExpectedSeparatorResult: SeparatorComponent = {
			divider: true,
			spacing: SeparatorSpacingSizes.Large,
			type: ComponentTypes.Separator,
		};

		SeparatorBuilder.setDivider(true);
		SeparatorBuilder.setSpacing(SeparatorSpacingSizes.Large);

		expect(SeparatorBuilder.toJSON()).toEqual(ExpectedSeparatorResult);
	});
});
