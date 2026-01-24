import { string } from 'zod';

const MAXIMUM_CUSTOM_ID_VALUE_LENGTH = 100;

export const CustomIdSchema = string().min(1).max(MAXIMUM_CUSTOM_ID_VALUE_LENGTH);
