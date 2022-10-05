import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: process.env.GHOST_API_URL,
  key: process.env.GHOST_CONTENT_API_KEY,
  version: "v5.0",
});

/** Fetches a list of all blog posts from Ghost */
export async function getAllPosts() {
  const posts = await api.posts.browse({ limit: "all" }).catch((err) => {
    console.error(err);
  });
  return posts;
}

//* Accepts the slug of a post and returns the post's data, includes the content in html format and posts' tags */
export async function getPostBySlug(slug) {
  return api.posts.read({ slug }, { formats: ["html"], include: "tags" });
  return post;
}

// Dynamically generate a page that will render the route of the slug
export async function getAllTags() {
  const tags = await api.tags.browse({ limit: "all" });
  return tags;
}

// Returns all the posts that are tagged with a tag represented by its corresponding slug.
export async function getAllPostsByTagSlug(slug) {
  const post = await api.posts.browse({
    limit: "all",
    filter: `tag:${slug}`,
  });
  return posts;
}

// Returns info about each tag
export async function getTagBySlug(slug) {
  const tag = await api.tags.read({ slug }, { include: "count.posts" });
  return tag;
}
