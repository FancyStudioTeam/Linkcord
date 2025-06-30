/**
 * @public
 */
export interface Embed {
    author?: EmbedAuthor;
    color?: number;
    description?: string;
    fields?: EmbedField;
    url?: string;
    footer?: EmbedFooter;
    image?: EmbedImage;
    thumbnail?: EmbedThumbnail;
    timestamp?: string;
    title?: string;
}

/**
 * @public
 */
export interface EmbedAuthor {
    iconURL?: string;
    name: string;
    url?: string;
}

/**
 * @public
 */
export interface EmbedField {
    inline?: boolean;
    name: string;
    value: string;
}

/**
 * @public
 */
export interface EmbedFooter {
    iconURL?: string;
    text: string;
}

/**
 * @public
 */
export interface EmbedImage {
    url: string;
}

/**
 * @public
 */
export interface EmbedThumbnail {
    url: string;
}
