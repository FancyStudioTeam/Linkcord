import { ButtonBuilderBase } from '#builders/base/ButtonBuilderBase.js';
import {
	PremiumButtonSchema,
	PremiumButtonSkuIdSchema,
} from '#builders/schemas/v1/interactive/PremiumButtonSchema.js';
import {
	ButtonStyle,
	type PremiumButtonComponent,
	type PremiumButtonResolvable,
	type Snowflake,
} from '#types/index.js';
import { validate } from '#utils/functions/validate.js';
import { isInstanceOf } from '#utils/helpers/AssertionUtils.js';

/**
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export class PremiumButtonBuilder extends ButtonBuilderBase<PremiumButtonComponent> {
	constructor(premiumButton?: PremiumButtonResolvable) {
		if (isInstanceOf(premiumButton, PremiumButtonBuilder)) {
			premiumButton = premiumButton.toJSON();
		}

		super({
			...validate(PremiumButtonSchema, premiumButton),
			style: ButtonStyle.Premium,
		});
	}

	/**
	 * @see https://discord.com/developers/docs/components/reference#button-button-structure
	 */
	static from(premiumButton: PremiumButtonResolvable): PremiumButtonBuilder {
		return new PremiumButtonBuilder(premiumButton);
	}

	setSkuId(skuId: Snowflake): this {
		this._data.skuId = validate(PremiumButtonSkuIdSchema, skuId);

		return this;
	}

	/**
	 * @see https://discord.com/developers/docs/components/reference#button-button-structure
	 */
	toJSON(): PremiumButtonComponent {
		const { _data: premiumButton } = this;
		const validatedData = validate(PremiumButtonSchema, premiumButton);

		return validatedData;
	}
}
