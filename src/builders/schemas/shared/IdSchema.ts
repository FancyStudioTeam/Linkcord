import { int } from 'zod';

const MAXIMUM_SIGNED_32_BITS_LENGTH = 2_147_483_647;

export const IdSchema = int().min(0).max(MAXIMUM_SIGNED_32_BITS_LENGTH);
