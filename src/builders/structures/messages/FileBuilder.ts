import { FileObjectSchema, FileSpoilerSchema, FileURLSchema } from "#builders/schemas/messages/FileSchema.js";
import type { AllowedFileURL } from "#builders/types/index.js";
import { ComponentTypes, type FileComponent } from "#types/index.js";
import { validate } from "#utils/functions/validate.js";
import { BaseBuilder } from "../base/BaseBuilder.js";

/**
 * Utility class for building {@link FileComponent | `FileComponent`} objects.
 * @group Builders/Structures
 */
export class FileBuilder extends BaseBuilder<FileComponent> {
	/**
	 * Sets the URL of the file.
	 * @param url - The URL of the file.
	 */
	setURL(url: AllowedFileURL): this {
		this.data.file = validate(FileURLSchema, url);

		return this;
	}

	/**
	 * Sets whether the file is spoiler.
	 * @param spoiler - Whether the file is spoiler.
	 */
	setSpoiler(spoiler: boolean = true): this {
		this.data.spoiler = validate(FileSpoilerSchema, spoiler);

		return this;
	}

	/**
	 * Converts the {@link FileBuilder | `FileBuilder`} instance into a {@link FileComponent | `FileComponent`} object.
	 * @returns The converted {@link FileComponent | `FileComponent`} object.
	 */
	toJSON(): FileComponent {
		const { data } = this;
		const validatedData = validate(FileObjectSchema, {
			...data,
			type: ComponentTypes.File,
		});

		return validatedData;
	}
}
