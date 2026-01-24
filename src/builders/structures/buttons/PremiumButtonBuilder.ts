import { ButtonBuilderBase } from '#builders/base/ButtonBuilderBase.js';
import {
	PremiumButtonSchema,
	PremiumButtonSkuIdSchema,
} from '#builders/schemas/buttons/PremiumButtonSchema.js';
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
	 * Sets the sku ID of the premium button.
	 *
	 * @param skuId - The sku ID of the premium button.
	 */
	setSkuId(skuId: Snowflake): this {
		this._data.skuId = validate(PremiumButtonSkuIdSchema, skuId);

		return this;
	}

	/**
	 * Converts the current {@link PremiumButtonBuilder} into a
	 * {@link PremiumButtonComponent} structure.
	 */
	toJSON(): PremiumButtonComponent {
		const { _data: data } = this;
		const validatedData = validate(PremiumButtonSchema, data);

		return validatedData;
	}
}
