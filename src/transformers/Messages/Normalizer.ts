import type { MessageFlags } from '#types/index.js';
import { isArray, isInstanceOf } from '#utils/helpers/AssertionUtils.js';
import { BitFieldResolver } from '#utils/index.js';

export function normalizeMessageFlags(messageFlags: number | BitFieldResolver | MessageFlags[]): number {
	if (isInstanceOf(messageFlags, BitFieldResolver)) {
		return messageFlags.bitField;
	}

	if (isArray(messageFlags)) {
		return new BitFieldResolver().add(...messageFlags);
	}

	return messageFlags;
}
