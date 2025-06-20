import { existsSync } from "node:fs";
import { basename, join } from "node:path";
import { requireModule } from "../../utils/functions/requireModule.js";
import type { LinkcordOptions } from "../functions/defineConfig.js";

const ALLOWED_FILE_EXTENSIONS = ["js", "cjs", "mjs", "ts", "cts", "mts"] as const;
// @ts-expect-error
const LINKCORD_CONFIGURATION: LinkcordOptions = {};

export class LinkcordConfiguration {
  static freeze(): void {
    Object.freeze(LINKCORD_CONFIGURATION);
  }

  static getOptions(): Readonly<LinkcordOptions> {
    return LINKCORD_CONFIGURATION;
  }

  static loadConfigurationFile(): Readonly<LinkcordOptions> {
    for (const extension of ALLOWED_FILE_EXTENSIONS) {
      const configurationFilePath = join(process.cwd(), `linkcord.config.${extension}`);

      if (!existsSync(configurationFilePath)) {
        continue;
      }

      const importConfigurationFileData = requireModule<ImportConfigurationFileData>(configurationFilePath);
      const configurationFileName = basename(configurationFilePath);
      const { default: defaultExport } = importConfigurationFileData;

      if (!("default" in importConfigurationFileData) || !defaultExport) {
        const errorMessages = [
          `File '${configurationFileName}' must export a default export.`,
          "- If you are using 'CommonJS', export the configuration using 'module.exports.default' or 'exports.default'.",
          "- If you are using 'ESModules', export the configuration using 'export default'.",
        ];

        throw new Error(errorMessages.join("\n"));
      }

      LinkcordConfiguration.setOptions(defaultExport);
      LinkcordConfiguration.freeze();

      break;
    }

    return LinkcordConfiguration.getOptions();
  }

  static setOptions(options: LinkcordOptions): LinkcordOptions {
    return Object.assign(LINKCORD_CONFIGURATION, options);
  }
}

interface ImportConfigurationFileData {
  default?: LinkcordOptions;
}
