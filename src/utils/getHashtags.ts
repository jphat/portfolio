// 1. Import utilities from `astro:content`

// 2. Get collections
import { getBlogContent, getProjectContent } from "./getContent";
const blogContent = getBlogContent({});
const projectContent = getProjectContent({});

// 3. Get Hashtags
/**
 * Retrieves hashtags from blog and project content and returns an array of tags and their count.
 * 
 * @param options - Optional parameters for limiting and sorting the results.
 * @param options.limit - The maximum number of tag appearances to return. Default is 0 (no limit).
 * @param options.sortBySize - Specifies whether to sort the tag appearances by count. Default is true.
 * @returns An array of tag appearances, sorted by count if specified and limited by the given limit.
 */
export function getHashtags({
  limit = 0,
  sortBySize = true,
}: { limit?: number; sortBySize?: boolean; }) {

  // setup the tag counter with the tag as key
  const tagCounts: { [tag: string]: number } = {};

  // build a super set of your content types
  const hashtags = [...new Set([
    ...blogContent.map(item => item.data.tags),
    ...projectContent.map(item => item.data.tags),
  ])];

  // count your tags
  hashtags.forEach(item => {
    if (item) {
      item.forEach((tag: string) => {
        if (tagCounts[tag]) {
          tagCounts[tag]++;
        } else {
          tagCounts[tag] = 1;
        }
      });
    }
  });

  let tagAppearances = Object.keys(tagCounts).map(tag => ({
    tag,
    count: tagCounts[tag],
    url: `/hashtags/${tag}`,
  }));

  if (sortBySize)
    tagAppearances.sort((a, b) => b.count - a.count);

  if (limit > 0)
    tagAppearances = tagAppearances.slice(0, limit);

  return tagAppearances;
}

/**
 * Retrieves unique hashtags from project and blog tags.
 * 
 * @returns {string[]} An array of unique hashtags.
 */
export function getUniqueHashtags() {
  const projectTags = blogContent.map(item => item.data.tags).flat();
  const blogTags = blogContent.map(item => item.data.tags).flat();

  const hashtags = [...new Set([...projectTags, ...blogTags])];

  return hashtags;
}