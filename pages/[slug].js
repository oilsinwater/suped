import { getAllPosts, getPostBySlug } from "../lib/ghost";
import Link from 'next/link'

//** Generates routes for all posts*/
export async function getStaticPaths() {
  const posts = await getAllPosts();
  const paths = posts.map(({ slug }) => ({ params: { slug } }));
  return { paths, fallback: false };
}

// Fetches posts' content
export async function getStaticProps({ params }) {
  const { slug } = params;
  const data = await getPostBySlug(slug);
  return { props: { data } };
}

// Returns posts' slugs as data in props
export default function Post({ data }) {
    return (
      <article className={styles.article}>
        <h1>{data.title}</h1>
        <div>
          {data.tags.map((tag) => (
            <Link key={tag.id} href={`/tag/${tag.slug}`}>
                <a>#{tag.name}</a>
            </Link>
          ))}
        </div>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: data.html }} />
      </article>
    );
  }