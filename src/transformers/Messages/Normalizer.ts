import type { MessageFlags } from '#types/index.js';
import { isArray, isInstanceOf } from '#utils/helpers/AssertionUtils.js';
import { BitField } from '#utils/index.js';

export function normalizeMessageFlags(messageFlags: number | BitField | MessageFlags[]): number {
	if (isInstanceOf(messageFlags, BitField)) {
		return messageFlags.bitField;
	}

	if (isArray(messageFlags)) {
		return new BitField().add(...messageFlags);
	}

	return messageFlags;
}
