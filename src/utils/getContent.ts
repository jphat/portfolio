// 1. Import utilities from `astro:content`
import { type CollectionEntry, getCollection, getEntry } from "astro:content";

// 2. Get collections
const blogContent = await getCollection("blog");
const clientContent = await getCollection("client");
const personContent = await getCollection("person");
const projectContent = await getCollection("project");

type relatedContent = {
  collection: "blog" | "project";
  slug: string;
}

// 3. Extend collection entries types
type ExtendedProjectCollectionEntry = CollectionEntry<"project"> & {
  url: string;
};

type ExtendedBlogCollectionEntry = CollectionEntry<"blog"> & {
  url: string;
};

type ExtendedPersonCollectionEntry = CollectionEntry<"person"> & {
  url: string;
};

// 4. Get content

/**
 * Retrieves project content based on the specified options.
 *
 * @param options - The options for filtering, limiting, and sorting the content.
 * @param options.filter - Whether to filter the content based on the draft status. Default is true.
 * @param options.limit - The maximum number of content entries to return. Default is 0 (no limit).
 * @param options.sort - Whether to sort the content based on the date. Default is true.
 * @returns An array of project content entries.
 */
export function getProjectContent({
  filter = true,
  limit = 0,
  sort = true,
}: { filter?: boolean; limit?: number; sort?: boolean }) {

  let content: ExtendedProjectCollectionEntry[] = projectContent.map(item => ({
    ...(item as ExtendedProjectCollectionEntry),
    url: `/projects/${item.slug}`,
  }));

  if (filter)
    content = content.filter(item => !item.data.draft && new Date(item.data.date).getTime() / 1000 <= new Date().getTime() / 1000);

  if (sort)
    content.sort(
      (a, b) =>
        Math.floor(new Date(b.data.date).getTime() / 1000) -
        Math.floor(new Date(a.data.date).getTime() / 1000)
    )

  if (limit > 0)
    content = content.slice(0, limit);

  return content;
}

/**
 * Retrieves blog content based on the provided options.
 * 
 * @param options - The options for filtering, limiting, and sorting the content.
 * @param options.filter - Whether to filter the content based on the draft status. Default is true.
 * @param options.limit - The maximum number of content entries to return. Default is 0 (no limit).
 * @param options.sort - Whether to sort the content based on the date. Default is true.
 * @returns An array of blog content entries.
 */
export function getBlogContent({
  filter = true,
  limit = 0,
  sort = true,
}: { filter?: boolean; limit?: number; sort?: boolean }) {

  let content: ExtendedBlogCollectionEntry[] = blogContent.map(item => ({
    ...(item as ExtendedBlogCollectionEntry),
    url: `/${item.collection}/${item.slug}`,
  }));

  if (filter)
    content = content.filter(item => !item.data.draft && new Date(item.data.date).getTime() / 1000 <= new Date().getTime() / 1000);

  if (sort)
    content.sort(
      (a, b) =>
        Math.floor(new Date(b.data.date).getTime() / 1000) -
        Math.floor(new Date(a.data.date).getTime() / 1000)
    )

  if (limit > 0)
    content = content.slice(0, limit);

  return content;
}

/**
 * Retrieves related content based on the provided array of related items.
 * 
 * @param related - An array of related content items.
 * @returns A promise that resolves to an array of extended project or blog collection entries.
 */
export async function getRelatedContent(related: relatedContent[]) {

  const payload: (ExtendedProjectCollectionEntry | ExtendedBlogCollectionEntry)[] = [];

  await Promise.all(
    related.map(async (item) => {
      const entry = await getEntry(item.collection, item.slug);

      if (entry) {
        if (item.collection === "project") {
          payload.push({
            ...(entry as ExtendedProjectCollectionEntry),
            url: `/projects/${entry.slug}`,
          } as ExtendedProjectCollectionEntry);
        }

        if (item.collection === "blog") {
          payload.push({
            ...(entry as ExtendedBlogCollectionEntry),
            url: `/${entry.collection}/${entry.slug}`,
          } as ExtendedBlogCollectionEntry);
        }
      }
    })
  );

  return payload;
}


/**
 * Retrieves the content of persons.
 * 
 * @param options - The options for retrieving the content.
 * @param options.limit - The maximum number of items to retrieve. Defaults to 0 (retrieve all items).
 * @param options.sort - Whether to sort the content based on weight. Defaults to true.
 * @returns The content of persons.
 */
export function getPersonContent({
  filter = true,
  limit = 0,
  sort = true,
}: { filter?: true, limit?: number, sort?: boolean }) {

  let content: ExtendedPersonCollectionEntry[] = personContent.map(item => ({
    ...(item as ExtendedPersonCollectionEntry),
    url: `/our-team/${item.id}`,
  }));

  if (filter)
    content = content.filter(item => item.data.draft === false);

  if (limit > 0)
    content = content.slice(0, limit);

  if (sort)
    content.sort((a: any, b: any) => (a.data.weight || 0) - (b.data.weight || 0));

  return content;
}

/**
 * Retrieves client content based on the provided options.
 * @param options - The options for retrieving client content.
 * @param options.limit - The maximum number of client content to retrieve. Default is 0 (retrieve all).
 * @param options.sort - Whether to sort the client content based on weight. Default is true.
 * @returns An array of client content entries.
 */
export function getClientContent({
  filter = true,
  limit = 0,
  sort = true,
}: { filter?: true, limit?: number, sort?: boolean }) {
  let content: CollectionEntry<"client">[] = clientContent;

  content = content.map(item => ({
    ...item,
    url: `/clients/${item.id}`,
  }));

  if (filter)
    content = content.filter(item => item.data.draft === false);

  if (limit > 0)
    content = content.slice(0, limit);

  if (sort)
    content.sort((a: any, b: any) => (a.data.weight || 0) - (b.data.weight || 0));

  return content;
}

/**
 * Retrieves tagged content based on the specified criteria.
 * 
 * @param filter - Whether to filter out draft content. Default is true.
 * @param limit - The maximum number of content items to retrieve. Default is 0 (no limit).
 * @param sortByDate - Whether to sort the content by date. Default is true.
 * @param tag - The tag to filter the content by.
 * @returns An array of content items that match the specified criteria.
 */
export function getTaggedContent({
  filter = true,
  limit = 0,
  sortByDate = true,
  tag,
}: { filter?: boolean; limit?: number; sortByDate?: boolean; tag: string; }) {
  let content = [...new Set([...getBlogContent({}), ...getProjectContent({})])].filter(item => item.data.tags?.includes(tag))

  if (filter)
    content = content.filter(item => item.data.draft === false);

  if (sortByDate)
    content.sort(
      (a, b) =>
        Math.floor(new Date(b.data.date).getTime() / 1000) -
        Math.floor(new Date(a.data.date).getTime() / 1000)
    )

  if (limit > 0)
    content = content.slice(0, limit);

  return content;
}
