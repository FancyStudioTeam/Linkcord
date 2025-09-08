import { describe, expect, it } from "vitest";
import { SeparatorBuilder } from "#builders/index.js";
import { ComponentTypes, type SeparatorComponent, SeparatorSpacingSizes } from "#types/index.js";
import { Separator } from "../Separator.js";

describe("JSX: Separator", () => {
	it('Should return a "SeparatorBuilder" instance when using the "Separator" component.', () => {
		const SeparatorComponent1: SeparatorBuilder = <Separator />;
		const SeparatorComponent2: SeparatorBuilder = (
			<Separator divider={true} spacing={SeparatorSpacingSizes.Large} />
		);

		const SeparatorComponentBase: SeparatorComponent = {
			type: ComponentTypes.Separator,
		};
		const ExpectedSeparatorResult1: SeparatorComponent = SeparatorComponentBase;
		const ExpectedSeparatorResult2: SeparatorComponent = {
			...SeparatorComponentBase,
			divider: true,
			spacing: SeparatorSpacingSizes.Large,
		};

		expect(SeparatorComponent1).toBeInstanceOf(SeparatorBuilder);
		expect(SeparatorComponent1.toJSON()).toStrictEqual(ExpectedSeparatorResult1);

		expect(SeparatorComponent2).toBeInstanceOf(SeparatorBuilder);
		expect(SeparatorComponent2.toJSON()).toStrictEqual(ExpectedSeparatorResult2);
	});
});
