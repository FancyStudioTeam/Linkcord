import { IS_PRODUCTION_ENVIRONMENT } from '#utils/Constants.js';
import type { DefineConfigOptions } from './defineConfig.types.js';

export function defineConfig(options: DefineConfigOptions): DefineConfigOptions {
	options.locations ??= {};
	options.locations.commands ??= 'commands';
	options.locations.events ??= 'events';
	options.locations.root ??= IS_PRODUCTION_ENVIRONMENT ? 'dist' : 'src';

	return options;
}
