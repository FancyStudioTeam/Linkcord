import { describe, expect, it } from "vitest";
import { EmbedFooterBuilder } from "#builders/index.js";
import type { EmbedFooter as EmbedFooterInterface } from "#types/index.js";
import { EmbedFooter } from "../EmbedFooter.js";

describe("JSX: EmbedFooter", () => {
	it('Should return an "EmbedFooterBuilder" instance when using the "EmbedFooter" component.', () => {
		const EmbedFooterText = "Lorem ipsum dolor sit amet";
		const EmbedFooterIconURL = "https://example.com";

		const EmbedFooterComponent1: EmbedFooterBuilder = (
			<EmbedFooter iconURL={EmbedFooterIconURL}>{EmbedFooterText}</EmbedFooter>
		);
		const EmbedFooterComponent2: EmbedFooterBuilder = (
			<EmbedFooter iconURL={EmbedFooterIconURL} text={EmbedFooterText} />
		);

		const ExpectedEmbedFooterResult: EmbedFooterInterface = {
			iconURL: EmbedFooterIconURL,
			text: EmbedFooterText,
		};

		expect(EmbedFooterComponent1).toBeInstanceOf(EmbedFooterBuilder);
		expect(EmbedFooterComponent1.toJSON()).toStrictEqual(ExpectedEmbedFooterResult);

		expect(EmbedFooterComponent2).toBeInstanceOf(EmbedFooterBuilder);
		expect(EmbedFooterComponent2.toJSON()).toStrictEqual(ExpectedEmbedFooterResult);
	});
});
