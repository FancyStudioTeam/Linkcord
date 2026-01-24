import { int } from 'zod';

const MAXIMUM_ID_VALUE_LENGTH = 2_147_483_647;

export const IdSchema = int().min(0).max(MAXIMUM_ID_VALUE_LENGTH);
