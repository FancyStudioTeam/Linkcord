import { IS_PRODUCTION_ENVIRONMENT } from '#utils/Constants.js';
import type { DefineConfigOptions } from './defineConfig.types.js';

export function defineConfig(options: DefineConfigOptions): DefineConfigOptions {
	options.commandsCache ??= {};
	options.commandsCache.enabled ??= true;
	options.commandsCache.file ??= 'commands.json';

	options.locations ??= {};
	options.locations.commands ??= 'commands';
	options.locations.events ??= 'events';
	options.locations.root ??= IS_PRODUCTION_ENVIRONMENT ? 'dist' : 'src';

	return options;
}
