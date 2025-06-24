import { existsSync } from "node:fs";
import { basename, join } from "node:path";
import type { LinkcordOptions } from "../defineConfig.js";

/**
 * @internal
 */
const ALLOWED_FILE_EXTENSIONS = ["js", "cjs", "mjs", "ts", "cts", "mts"] as const;

/**
 * @internal
 */
// @ts-expect-error
const LINKCORD_CONFIGURATION: LinkcordOptions = {};

/**
 * @internal
 */
export class LinkcordConfiguration {
  /**
   * @internal
   */
  static freeze(): void {
    Object.freeze(LINKCORD_CONFIGURATION);
  }

  /**
   * @internal
   */
  static getOptions(): Readonly<LinkcordOptions> {
    return LINKCORD_CONFIGURATION;
  }

  /**
   * @internal
   */
  static async loadConfigurationFile(workingDirectory = process.cwd()): Promise<Readonly<LinkcordOptions>> {
    for (const extension of ALLOWED_FILE_EXTENSIONS) {
      const configurationFilePath = join(workingDirectory, `linkcord.config.${extension}`);

      if (!existsSync(configurationFilePath)) {
        continue;
      }

      const importConfigurationFileData = (await import(configurationFilePath)) as ImportConfigurationFileData;
      const configurationFileName = basename(configurationFilePath);
      const { default: defaultExport } = importConfigurationFileData;

      if (!("default" in importConfigurationFileData) || !defaultExport) {
        throw new Error(`File '${configurationFileName}' must include a default export.`);
      }

      LinkcordConfiguration.setOptions(defaultExport);
      LinkcordConfiguration.freeze();

      break;
    }

    return LinkcordConfiguration.getOptions();
  }

  /**
   * @internal
   */
  static setOptions(options: LinkcordOptions): LinkcordOptions {
    return Object.assign(LINKCORD_CONFIGURATION, options);
  }
}

/**
 * @internal
 */
interface ImportConfigurationFileData {
  default?: LinkcordOptions;
}
