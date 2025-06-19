import { existsSync } from "node:fs";
import { basename, join } from "node:path";
import { importModule } from "../../utils/functions/importModule.js";
import type { LinkcordOptions } from "../functions/defineConfig.js";

const ALLOWED_FILE_EXTENSIONS = ["js", "cjs", "mjs", "ts", "cts", "mts"] as const;
const LINKCORD_CONFIGURATION: LinkcordOptions | null = null;

export class LinkcordConfiguration {
  static freeze(): void {
    if (typeof LINKCORD_CONFIGURATION !== "object" || LINKCORD_CONFIGURATION === null) {
      throw new TypeError("Cannot freeze an invalid object.");
    }

    Object.freeze(LINKCORD_CONFIGURATION);
  }

  static getOptions(): Readonly<LinkcordOptions> {
    if (typeof LINKCORD_CONFIGURATION !== "object" || LINKCORD_CONFIGURATION === null) {
      throw new TypeError("Cannot get options from an invalid object.");
    }

    return LINKCORD_CONFIGURATION;
  }

  static loadConfigurationFile(): Readonly<LinkcordOptions> {
    for (const extension of ALLOWED_FILE_EXTENSIONS) {
      const configurationFilePath = join(process.cwd(), `linkcord.config.${extension}`);

      if (!existsSync(configurationFilePath)) {
        continue;
      }

      const importConfigurationFileData = importModule<ImportConfigurationFileData>(configurationFilePath);
      const configurationFileName = basename(configurationFilePath);
      const { default: defaultExport } = importConfigurationFileData;

      if (!defaultExport) {
        throw new Error(`File '${configurationFileName}' must include a default export.`);
      }

      LinkcordConfiguration.setOptions(defaultExport);
      LinkcordConfiguration.freeze();

      break;
    }

    return LinkcordConfiguration.getOptions();
  }

  static setOptions(options: LinkcordOptions): LinkcordOptions {
    if (typeof LINKCORD_CONFIGURATION !== "object" || LINKCORD_CONFIGURATION === null) {
      throw new TypeError("Cannot assing properties to an invalid object.");
    }

    return Object.assign(LINKCORD_CONFIGURATION, options);
  }
}

interface ImportConfigurationFileData {
  default?: LinkcordOptions;
}
