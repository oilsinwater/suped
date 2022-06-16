import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
    url: process.env.GHOST_API_URL,
    key: process.env.GHOST_CONTENT_API_KEY,
    version: 'v5.0'
  });

  /** Fetches a list of all blog posts from Ghost */
  export async function getAllPosts() {
    const posts = await api.posts.browse({ limit: 'all' }).catch(err => { console.error(err); });
    return posts;
  }
