import { BuilderBase } from '#builders/base/BuilderBase.js';
import {
	FileUploadCustomIdSchema,
	FileUploadMaxValuesSchema,
	FileUploadMinValuesSchema,
	FileUploadRequiredSchema,
	FileUploadSchema,
} from '#builders/schemas/v2/interactive/FileUploadSchema.js';
import {
	ComponentType,
	type FileUploadComponent,
	type FileUploadComponentResolvable,
} from '#types/index.js';
import { validate } from '#utils/functions/validate.js';
import { isInstanceOf } from '#utils/helpers/AssertionUtils.js';

/**
 * @see https://discord.com/developers/docs/components/reference#file-upload-file-upload-structure
 */
export class FileUploadBuilder extends BuilderBase<FileUploadComponent> {
	constructor(fileUpload?: FileUploadComponentResolvable) {
		if (isInstanceOf(fileUpload, FileUploadBuilder)) {
			fileUpload = fileUpload.toJSON();
		}

		super({
			...validate(FileUploadSchema, fileUpload),
			type: ComponentType.FileUpload,
		});
	}

	/**
	 * @see https://discord.com/developers/docs/components/reference#file-upload-file-upload-structure
	 */
	static from(fileUpload: FileUploadComponentResolvable): FileUploadBuilder {
		return new FileUploadBuilder(fileUpload);
	}

	setCustomId(customId: string): this {
		this._data.customId = validate(FileUploadCustomIdSchema, customId);

		return this;
	}

	setMaxValues(maxValues: number): this {
		this._data.maxValues = validate(FileUploadMaxValuesSchema, maxValues);

		return this;
	}

	setMinValues(minValues: number): this {
		this._data.minValues = validate(FileUploadMinValuesSchema, minValues);

		return this;
	}

	setRequired(required: boolean = true): this {
		this._data.required = validate(FileUploadRequiredSchema, required);

		return this;
	}

	/**
	 * @see https://discord.com/developers/docs/components/reference#file-upload-file-upload-structure
	 */
	toJSON(): FileUploadComponent {
		const { _data: fileUpload } = this;
		const fileUploadComponent = validate(FileUploadSchema, fileUpload);

		return fileUploadComponent;
	}
}
