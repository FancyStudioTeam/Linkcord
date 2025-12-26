import { join } from 'node:path';
import { cwd } from 'node:process';
import { Extractor, ExtractorConfig } from '@microsoft/api-extractor';

const apiExtractorJsonPath = join(cwd(), 'api-extractor.json');
const config = ExtractorConfig.loadFileAndPrepare(apiExtractorJsonPath);

Extractor.invoke(config);
