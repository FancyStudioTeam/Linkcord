import { join } from "node:path";
import { Extractor, ExtractorConfig } from "@microsoft/api-extractor";

const apiExtractorJsonPath = join(process.cwd(), "api-extractor.json");
const config = ExtractorConfig.loadFileAndPrepare(apiExtractorJsonPath);

Extractor.invoke(config);
