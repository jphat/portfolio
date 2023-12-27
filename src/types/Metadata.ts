// Used for landing page where author and date are not needed
export interface ShortMetadataType {
    description: string,
    thumbnail_alt: string,
    thumbnail: string,
    title: string,
}

// Used for project and blog posts
export interface LongMetadataType extends ShortMetadataType {
    author?: string,
    date: Date,
    updated: string,
}
